import React from 'react'

const ProductDetailPageSkeleton = () => {
    return (
        <div style={{height:"100vh"}} className='flex'>
            <div className="productDetail_left   ">
                <div  className="MobileImageSlider_container  skeleton_detail_left skeleton_animate">
                    {/* Thumbnails */}
                    <div style={{overflow:"hidden"}} className="MobileImageSlider_thumbnails ">
                        {[1, 2, 3, 4, 5]?.map((item, index) => (
                            <div
                                key={index}
                                className={`MobileImageSlider_thumbnail skeleton_animate `}
                            >
                            </div>
                        ))}
                    </div>
                    <div
                        className="MobileImageSlider_swiper"
                    >
                        <div className="MobileImageSlider_slide ">
                            <div
                                className="MobileImageSlider_slideImage "
                            />
                        </div>
                        <div className="MobileImageSlider_nav">
                            <button
                                className="MobileImageSlider_arrow   left"
                            >
                            </button>
                            <button
                                className="MobileImageSlider_arrow   right"
                            >

                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    )
}

export default ProductDetailPageSkeleton