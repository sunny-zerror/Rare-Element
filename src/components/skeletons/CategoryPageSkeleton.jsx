import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

const CategoryPageSkeleton = () => {
    return (
        <>
            <div >
                <div className="products_hero-section category_skeleton skeleton_animate">
                </div>
                <div className="category_products_header skeleton_animate">
                </div>
                <div className="padding">
                    <div className="allproducts_paren categories_paren ">
                        {[1,2,3,4,5,6].map((item, index) => (<ProductCardSkeleton key={index} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryPageSkeleton