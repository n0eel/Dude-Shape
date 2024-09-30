import React from 'react'
import HeroImg from '../assets/images/hero-img.png'
import MasterCard from '../assets/images/master-card.svg'
import AirBnb from '../assets/images/airbnb.svg'
import Uber from '../assets/images/uber.svg'
import PayPal from '../assets/images/pay-pal.svg'
import Visa from '../assets/images/visa.svg'
import Stripe from '../assets/images/stripe.svg'

function Hero() {
  return (
    <section className='mb-[14px]'>
        <div className="containers md:mb-[140px]">
            <div className='flex flex-col-reverse lg:flex-row bg-[#154444]'>
            <img className='mx-auto w-[309px] h-[326px] lg:w-[411px] lg:h-[565px] lg:mx-0 mt-[40px] lg:mt-0' src={HeroImg} alt="#"  width={411} height={565}/>
                <div className='pl-[24px] pt-[49px] lg:pl-[100px] lg:pt-[100px]'>
                    <h1 className='text-[32px] leading-[42px] md:text-[56px] md:leading-[68px] text-white font-bold mb-[20px]' >We Help You Make Modern Furniture</h1>
                    <p className='w-[257px] text-[12px] leading-[17px] md:text-[20px] md:leading-[25px] text-[white] mb-[35px] md:w-[488px]'>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                    <button className='w-[149px] py-[10px] text-[14px] leading-[20px] md:w-[172px] md:py-[15px] text-[#154444] bg-white md:text-[20px] md:leading-[25px]'>Explore More</button>
                </div>
            </div>
        </div>
        <div className='mt-[60px] md:mt-0'>
            <p className='text-[18px] leading-[23px] mb-[24px] md:text-[32px] md:leading-[41px] text-[#244D4D] md:mb-[40px] text-center'>Trusted by 20,000+ companies</p>
            <div className='flex items-center space-x-[28px] lg:space-x-[100px] justify-center'>
                <img className='w-[31px] md:w-[67px]' src={MasterCard} alt="" />
                <img className='w-[79px] md:w-[125px]' src={AirBnb} alt="" />
                <img className='w-[57px] md:w-[97px]' src={Uber} alt="" />
                <img className='w-[70px] md:w-[106px]' src={PayPal} alt="" />
                <img className='w-[67px] md:w-[89px]' src={Visa} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
