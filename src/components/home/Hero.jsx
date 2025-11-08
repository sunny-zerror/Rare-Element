import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="info_header center">
                <h3 className='text-sm'> Free Shipping on orders above Rs. 3,000 </h3>
            </div>
            <div className="home_hero">
                <video className='cover' loop muted playsInline autoPlay src="https://palmonas.com/cdn/shop/videos/c/vp/bb026995c2684066a92fd9a2324a77e3/bb026995c2684066a92fd9a2324a77e3.SD-480p-1.5Mbps-59300699.mp4?v=0"></video>
                <div className="home_hero_inner">
                    <h2 className='text-4xl'>The Aurora Collection</h2>
                    <a href="/products">
                        <button className='green_button'><h3 className='text-xl'>Discover</h3></button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero