// context/shopContext.jsx
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('')
  const navigate = useNavigate();

  // Helper: size aur stitchType ko ek combined key mein convert karta hai
  const buildKey = (size, stitchType) => {
    return stitchType ? `${size}__${stitchType}` : size;
  };

  // Add to cart function
  const addToCart = async (itemId, size, stitchType) => {

    if (!size) {
      toast.error('select product size');
      return
    }

    const key = buildKey(size, stitchType);

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][key]) {
        cartData[itemId][key] += 1;
      } else {
        cartData[itemId][key] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][key] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add',
          { itemId, size, stitchType },
          { headers: { Authorization: `Bearer ${token}` } })
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
  };

  // Update quantity function
  // FIX: ab backend ko bhi update call jaata hai (pehle sirf local state update hota tha)
  const updateQuantity = async (itemId, size, quantity, stitchType) => {
    const key = buildKey(size, stitchType);
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][key]) {
        if (quantity > 0) {
          cartData[itemId][key] = quantity;
        } else {
          delete cartData[itemId][key];
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        }
      }
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update',
          { itemId, size, stitchType, quantity },
          { headers: { Authorization: `Bearer ${token}` } })
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
  };

  // Remove from cart function
  // FIX: ab backend ko bhi remove call jaata hai
  const removeFromCart = async (itemId, size, stitchType) => {
    const key = buildKey(size, stitchType);
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][key]) {
        delete cartData[itemId][key];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/remove',
          { itemId, size, stitchType },
          { headers: { Authorization: `Bearer ${token}` } })
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
  };

  // Get total cart items count
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const key in cartItems[itemId]) {
        totalCount += cartItems[itemId][key];
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find(product => product._id === itemId);
      if (itemInfo) {
        for (const key in cartItems[itemId]) {
          totalAmount += itemInfo.price * cartItems[itemId][key];
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  // FIX: header ab Authorization: Bearer format mein hai (addToCart ke sath consistent)
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { Authorization: `Bearer ${token}` } })
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  // FIX: token load ab alag useEffect mein hai, aur token change hone par getUserCart chalta hai
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!token && savedToken) {
      setToken(savedToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      getUserCart(token)
    }
  }, [token])

  const value = {
    products, currency, delivery_fee, search, setSearch,
    showSearch, setShowSearch, cartItems, setCartItems, addToCart,
    updateQuantity, removeFromCart, getCartCount, getCartAmount,
    navigate, backendUrl, setToken, token
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;