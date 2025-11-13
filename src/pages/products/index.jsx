import ShopCard from '@/components/common/ShopCard'
import { ProductsData } from '@/utils/ProductsData'
import Link from 'next/link'
import React from 'react'

const AllProducts = () => {
    return (
        <>
            <div className="products_hero-section ">
                <img className='products_hero-img' src="/images/productpage/heroImg.png" alt="" />
                <div className="products_content padding">
                    <h2 className='text-xl uppercase'>Aurora Drop Earrings</h2>
                    <h3 className='text-base'>
                        At Nahara, every piece is a blend of artistry and precision designed to celebrate your story.
                        From everyday classics to statement creations, our jewellery reflects beauty that endures beyond trends.
                    </h3>
                </div>
            </div>
            <div className="products_header">
                <p className="products_subtitle text-base uppercase">Crafted for Every Moment</p>
                <h2 className="products_title text-3xl">Rings</h2>
            </div>

            <div className="padding">
                <div className="allproducts_paren ">
                    {ProductsData.map((item, i) => (
                        <a key={i} href={`/products/${item.slug}`}>
                            <ShopCard item={item} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllProducts