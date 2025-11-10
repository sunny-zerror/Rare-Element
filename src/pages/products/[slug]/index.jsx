import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ShopCard from '@/components/common/ShopCard';
import { ProductsData } from '@/utils/ProductsData';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);
const ProductDetail = () => {

    useGSAP(() => {
        gsap.to(".productDetail_line-inner", {
            scrollTrigger: {
                trigger: ".productDetail_main",
                start: "top top",
                end: "bottom bottom",
                scrub: .4
            },
            transform: "translateY(calc(100vh))",
            ease: "linear"
        })
    })

    return (
        <>
            <div className="productDetail_main">
                <div className="productDetail_left">
                    <div className="productDetail_block ">
                        <img className='cover' src="https://www.buccellati.com/media/.renditions/wysiwyg/2_5_HP_Ramage.jpg" alt="" />
                    </div>
                    <div className="productDetail_block ">
                        <img className='cover' src="https://www.buccellati.com/media/catalog/category/4_Earrings.jpg?width=500" alt="" />
                    </div>
                    <div className="productDetail_block ">
                        <img className='cover' src="https://www.buccellati.com/media/.renditions/wysiwyg/2_2_HP_Opera.jpg" alt="" />
                    </div>
                </div>
                <div className="productDetail_right">
                    <div className="productDetail_sticky">
                        <div class="productDetail_line">
                            <div class="productDetail_line-inner"></div>
                        </div>
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
                                    <h2 className='text-xxs'>Add To Cart</h2>
                                </div>
                                <div className="productDetail_btn_icon center">
                                    <img className='invert' src="/icons/heart.svg" alt="heart icon" />
                                </div>
                            </div>
                            <div className="productDetail_links">
                                <p className="productDetail_link uppercase text-sm">Description</p>
                                <p className="productDetail_link uppercase text-sm">Care Instruction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="suggestion_parent">
                <div className="suggestion_parent_header">
                    <p className='text-base uppercase'>you may also like </p>
                </div>
                <div className="featured_scroll">
                    {ProductsData?.map((item, i) => (
                        <a key={i} href="/products/ring">
                            <div className="featured_shopcard">
                                <ShopCard item={item} />
                            </div>
                        </a>
                    ))}
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