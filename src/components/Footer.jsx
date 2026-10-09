import React, { useState } from "react";
import {FaCcMastercard, FaCcVisa, FaChevronDown,FaFacebook,FaInstagram,FaYoutube,FaTiktok, FaWhatsapp,} from "react-icons/fa6";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState("Pakistan");

  return (
    <footer className="bg-[#2b2b2b] text-[#cfcfcf] px-[60px] pt-[50px] pb-5 font-sans max-[768px]:px-5 max-[768px]:pt-[30px]">
      {/* Top columns */}
      <div className="flex flex-wrap justify-between gap-10 max-w-[1300px] mx-auto max-[768px]:flex-col">
        <div>
          <h4 className="text-white text-[13px] tracking-[1.5px] mb-5 font-semibold">
            ABOUT
          </h4>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Who We Are
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Our Responsibility
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Service We Provide
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Careers
          </a>
 <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Store Locations
          </a>
        </div>

        <div>
 <h4 className="text-white text-[13px] tracking-[1.5px] mb-5 font-semibold">CUSTOMER SERVICE</h4>
  <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white"> Contact Us</a>
<a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white"> Dispatch Timeline</a>
 <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white"> Exchange Information </a>
  <a href="mailto:info@yourstore.pk"className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white"> Email: info@yourstore.pk</a>
      <p className="block text-[#b5b5b5] text-sm mb-3.5">UAN 111-000-000</p>
      <p className="block text-[#b5b5b5] text-sm mb-3.5">WhatsApp: +92 300 0000000</p>
        </div>

        <div>
          <h4 className="text-white text-[13px] tracking-[1.5px] mb-5 font-semibold">
            POLICIES
          </h4>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Refund Policy
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Shipping Policy
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="block text-[#b5b5b5] no-underline text-sm mb-3.5 transition-colors hover:text-white">
            Legal
          </a>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex gap-[18px] mt-[30px] max-w-[1300px] mx-auto">
        <a
          href="#"
          aria-label="Facebook"
          className="w-[34px] h-[34px] flex items-center justify-center text-white/85 no-underline text-xl"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="w-[34px] h-[34px] flex items-center justify-center text-white/85 no-underline text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="w-[34px] h-[34px] flex items-center justify-center text-white/85 no-underline text-xl"
        >
          <FaYoutube />
        </a>
        <a
          href="#"
          aria-label="TikTok"
          className="w-[34px] h-[34px] flex items-center justify-center text-white/85 no-underline text-xl"
        >
          <FaTiktok />
        </a>
        <a
          href="#"
          aria-label="WhatsApp"
          className="w-[34px] h-[34px] flex items-center justify-center text-white/85 no-underline text-xl"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between items-center max-w-[1300px] mx-auto mt-10 pt-5 text-[13px] text-[#aaa] max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-[15px]">
        <button
          className="bg-transparent text-[#aaa] border-none text-[13px] tracking-wide cursor-pointer font-sans p-0 flex items-center gap-1.5 hover:text-white transition-colors"
          onClick={() => setShowModal(true)}
        >
          {country.toUpperCase()} <FaChevronDown className="text-[10px]" />
        </button>
        <span>&copy; {new Date().getFullYear()} - YOUR BRAND</span>
        <div className="flex gap-2 items-center">
          <FaCcMastercard className="w-[38px] h-[38px]" />
          <FaCcVisa className="w-[38px] h-[38px]" />
        </div>
      </div>

      {/* Country selection modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-5"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-[540px] p-10 font-sans max-[480px]:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[22px] font-normal mb-4 text-[#111111ec]">
              Are you in the right place?
            </h2>
            <p className="text-base font-light mb-2.5 text-[#111111bb]">
              Please select your shipping country.
            </p>
            <p className="text-xs text-[#555] leading-tight mb-6">
              Buy from the country of your choice. Remember that we can only
              ship your order to addresses located in the chosen country.
            </p>

            <label
              className="block text-xs text-[#777] mb-1.5"
              htmlFor="country"
            >
              Country
            </label>
            <select
              id="country"
              className="w-full border-0 border-b border-[#111] py-2 text-base text-[#111] bg-transparent mb-7 cursor-pointer focus:outline-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
            </select>

            <button
              className="w-full bg-[#111] text-white border-none py-3.5 text-[15px] font-semibold cursor-pointer hover:bg-[#333] transition-colors"
              onClick={() => setShowModal(false)}
            >
              Shop now
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}