import React from 'react'

const ProductContantSkeleton = () => {
    return (
        <>
            <div className="productDetail_right ">
                <div className="productDetail_sticky   ">
                    <div className="productDetail_info skeleton_animate">
                        <p className='hidden'>0</p>
                        <p className='hidden'>0</p>
                    </div>
                    <div className="productDetail_options skeleton_animate">
                        <p className='hidden'>0</p>
                        <p className='hidden'>0</p>
                        <p className='hidden'>0</p>
                        <p className='hidden'>0</p>
                    </div>
                    <div className="productDetail_options skeleton_animate">
                        <p className='hidden'>0</p>
                        <p className='hidden'>0</p>
                        <p className='hidden'>0</p>
                    </div>
                    <div className="accordion_container skeleton_animate ">
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductContantSkeleton