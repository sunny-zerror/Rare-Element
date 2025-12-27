import { RiEqualizerLine } from '@remixicon/react'
import React from 'react'
import ProductsAside from '../product/ProductsAside'
import ProductCardSkeleton from './ProductCardSkeleton'

const AllProductsPageSkeleton = () => {
    return (
        <>
            <div className="products_header">
                <p className="products_subtitle thin text-base uppercase">Crafted for Every Moment</p>
                <h2 className="products_title text-3xl">Explore  Products</h2>
            </div>

            <div className="w-full center">
                <button type="button" className="open_filter  text-xs uppercase">
                    <RiEqualizerLine size={14} />
                    <p className="uppercase text-base">
                        Apply Filter
                    </p>
                </button>
            </div>

            <div className=" products_layout_paren padding ">
                <ProductsAside/>
                <div className="allproducts_paren ">
                        {[1,2,3,4,5,6].map((item, index) => (<ProductCardSkeleton key={index} />))}
                </div>
            </div>
        </>
    )
}

export default AllProductsPageSkeleton