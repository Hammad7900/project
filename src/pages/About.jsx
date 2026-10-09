import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About=() => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t  '>
                <Title text1={'ABOUT '} text2={'US'}/>
                
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16 pl-32'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Broque was born out of passion for inovation and a desire to revolution , discoverm, explore and purchese a wide range of products from comfort from their homes.</p>
                <p>Since our inception, we have worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and prefrence from fashion beauty to electronics and home essentials, we offer an extensive collection source from trusted brand and suppliers.

                </p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission at Broque is to empower customers with choice, with convineince, and confidence. we're dedicated to providing experiencen that exceeds expectations, from browsing and odering to delivery and beyond. </p>
                </div>
            </div>
            <div className='text-4xl py-4 pl-32'>
                <Title text1={'WhY'}  text2={'CHOOSE Us'}/>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20 pl-22 pr-12'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We metaculously select and vet  each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>We metaculously select and vet  each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Custom Service:</b>
                    <p className='text-gray-600'>Our tem of dedicated  professionals is here to assist you the way, ensuring your satisfication is our top prioraty.</p>
                </div>
            </div>
            <NewsletterBox/>

        </div>
    )
}

export default About
