import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ShopCard from '@/components/common/ShopCard';
import { ProductsData } from '@/utils/ProductsData';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 const accordionData = [
    {
      title: "DESCRIPTION",
      content:
        "At Rare Element, Every Piece Is A Blend Of Artistry And Precision Designed To Celebrate Your Story. From Everyday Classics To Statement Creations, Our Jewellery Reflects Beauty That Endures Beyond Trends.",
    },
    {
      title: "INSTRUCTIONS",
      content:
        "Handle your jewellery with care. Store it in a soft pouch when not in use and avoid exposure to harsh chemicals or moisture.",
    },
  ];


const ProductDetail = () => {

     const [openIndex, setOpenIndex] = useState(0);


     
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
        <>
            <div className="productDetail_main padding">
                <div className="productDetail_left">
                    <div className="productDetail_left_upper">
                        <img className='cover' src="https://www.buccellati.com/media/catalog/category/4_Earrings.jpg?width=500" alt="" />
                    </div>
                    <div className="productDetail_left_lower">
                        <img className='cover' src="https://www.buccellati.com/media/catalog/category/4_Earrings.jpg?width=500" alt="" />
                        <img className='cover' src="https://www.buccellati.com/media/catalog/category/4_Earrings.jpg?width=500" alt="" />
                        <img className='cover' src="https://www.buccellati.com/media/catalog/category/4_Earrings.jpg?width=500" alt="" />

                    </div>
                </div>
                <div className="productDetail_right">
                    <div className="productDetail_sticky">
                        <div className="productDetail_info">
                            <p className="productDetail_category text-base">RINGS</p>
                            <h2 className="productDetail_title text-xl uppercase">Aurora</h2>
                            <p className="productDetail_price text-base">Rs. 28,200</p>
                        </div>
                        <div className="productDetail_options">
                            <div className="productDetail_row ">
                                <div className="productDetail_select productDetail_select--green">
                                    <button className='text-sm'>
                                        <h3>Silver</h3>
                                        <h3>↓</h3>
                                    </button>
                                </div>
                                <div className="productDetail_select productDetail_select--white">
                                    <button className='text-sm'>
                                        <h3>Medium</h3>
                                        <h3>↓</h3>
                                    </button>
                                </div>
                            </div>

                            <div className="productDetail_quantity text-sm">
                                <h3>-</h3>
                                <h3>1</h3>
                                <h3>+</h3>
                            </div>
                        </div>
                        <div className="productDetail_footer">
                            <div className="productDetail_addtocart">
                                <div className="productDetail_btn ">
                                    <h3 className='text-lg'>Add To Cart</h3>
                                </div>
                                <div className="productDetail_btn_icon center">
                                    <div className="icon_pr">
                                        <img className='  short_links_icon_heart invert' src="/icons/heart.svg" alt="" />
                                        <img className=' short_links_icon_heart_hover' src="/icons/heartFill.svg" alt="" />
                                    </div>
                                    {/* <img className='invert' src="/icons/heart.svg" alt="heart icon" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion_container">
                        {accordionData.map((item, index) => (
                            <div className="accordion_item" key={index}>
                                <button
                                    className="accordion_header"
                                    onClick={() => handleToggle(index)}
                                >
                                    <p className=" text-sm accordion_title">{item.title}</p>
                                    <h3 className="accordion_icon text-lg">
                                        {openIndex === index ? "−" : "+"}
                                    </h3>
                                </button>

                                <div
                                    className={`accordion_content ${openIndex === index ? "open" : ""
                                        }`}
                                >
                                    <p className='text-sm'>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="suggestion_parent">
                <div className="suggestion_parent_header">
                    <p className='text-base uppercase'>you may also like </p>
                </div>
                <div className="featured_scroll relative">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        loop={true}
                        infinite={true}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {ProductsData?.map((item, i) => (
                            <SwiperSlide key={i} className="featured_shopcard">
                                <a href="/products/ring">
                                    <div className="featured_shopcard">
                                        <ShopCard item={item} />
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="padding">
                <div className="image_banner_paren">
                    <div className="image_banner_paren_left">
                        <img className='cover' src="/images/productpage/giftsHeroimg.svg" alt="" />
                    </div>
                    <div className="image_banner_paren_right">
                        <div className="image_banner_paren_left_txt">
                            <h2 className='text-xl uppercase'>Iconic gifts</h2>
                            <h3 className='text-base'>From everyday classics to statement <br /> creations, our jewellery reflects beauty that <br /> endures beyond trends.</h3>
                        </div>
                        <button>
                            <p className='text-base'>Shop Now</p>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail