import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ProductsData } from "@/utils/ProductsData";
import { usePathname } from "next/navigation";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

const LookBook = () => {

    const pathname = usePathname()

    useGSAP(() => {
        gsap.fromTo(".lookbook_bg_img", {
            y: -100
        }, {
            scrollTrigger: {
                trigger: ".lookbook_section",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            },
            y: 100,
            ease:"linear"
        })

        gsap.fromTo(".lookbookCard_image img", {
            y: -100
        }, {
            scrollTrigger: {
                trigger: ".lookbookCard_box",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            },
            y: 100,
            ease:"linear"
        })

        gsap.fromTo(".lookbookSlider_left img", {
            y: -100
        }, {
            scrollTrigger: {
                trigger: ".lookbookSlider_left",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            },
            y: 100,
            ease:"linear"
        })

    }, [pathname])

    return (
        <>
            <div className="lookbook_section">
                <div className="lookbook_content">
                    <p className="lookbook_tagline uppercase text-base">The Essence of Elegance</p>
                    <h2 className="lookbook_title uppercase text-3xl">
                        Aurora Drop <br /> Earrings
                    </h2>
                    <button className="lookbook_button">
                        <h3 className="lookbook_btn_text text-base">Shop Now</h3>
                    </button>
                </div>
                <img
                    className="lookbook_bg_img"
                    src="/images/homepage/bookletHero.svg"
                    alt="Aurora Drop Earrings"
                />
            </div>

            <div className="lookbookCard_container">

                <div className="lookbookCard_box">
                    <div className="lookbookCard_image">
                        <img className='cover' src="/images/homepage/bookletbox1.svg" alt="" />
                    </div>
                    <div className="lookbookCard_text">
                        <h2 className="lookbookCard_title text-xl uppercase">Iconic Gifts</h2>
                        <p className="lookbookCard_link text-sm">Shop Now</p>
                    </div>
                </div>

                <div className="lookbookCard_box">
                    <div className="lookbookCard_image">
                        <img className='cover' src="/images/homepage/bookletbox2.svg" alt="" />
                    </div>
                    <div className="lookbookCard_text">
                        <h2 className="lookbookCard_title text-xl uppercase">Iconic Gifts</h2>
                        <p className="lookbookCard_link text-sm">Shop Now</p>
                    </div>
                </div>

            </div>


            <div className="lookbookSlider_section">
                <div className="lookbookSlider_left">
                    <img className='cover' src="/images/homepage/bookletbox3.svg" alt="" />
                </div>

                <div className="lookbookSlider_right">
                    <div className="lookbookSlider_heading_wrapper">
                        <p className="lookbookSlider_heading uppercase text-base">The Looks</p>
                    </div>

                    <div className="lookbookSlider_card_wrapper">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={'auto'}
                            centeredSlides={true}
                            spaceBetween={"150rem"}
                            loop
                            infinite={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            // pagination={{ clickable: true }}
                            className="lookbook_swiper"
                        >
                            {ProductsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="lookbookSlider_card">
                                        <div className="lookbookSlider_card_image">
                                            <img className='cover' src={item.hoverImage} alt="" />
                                        </div>
                                        <p className="lookbookSlider_card_description text-base">
                                            {item.title}
                                        </p>
                                        <button className="lookbook_button">
                                            <h3 className="lookbook_btn_text text-base">Shop Now</h3>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>


        </>
    )
}

export default LookBook