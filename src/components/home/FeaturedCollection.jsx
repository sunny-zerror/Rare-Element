import React from 'react'
import ShopCard from '../common/ShopCard'
import { ProductsData } from '@/utils/ProductsData'
import Link from 'next/link'

const FeaturedCollection = () => {
    return (
        <>
            <div className="featured_collections_section ">
                <div className="featured_header">
                    <p className="featured_subtitle text-base uppercase">Crafted for Every Moment</p>
                    <h2 className="featured_title text-3xl">Featured Collections</h2>
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

        </>
    )
}

export default FeaturedCollection