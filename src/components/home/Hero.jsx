import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Hero = () => {
        const pathname = usePathname()
    return (
        <>
            {pathname==="/"&&(
                <div className="info_header center">
                <h3 className='text-xs'> Free Shipping on orders above Rs. 3,000 </h3>
            </div>
            )}
            <div className="dummy_hero_div"></div>
            <div className="home_hero">
                <video className='cover' loop muted playsInline autoPlay src="https://www.buccellati.com/media/wysiwyg/videos/PLP_Macri_cut_1_1.mp4"></video>
                <div className="home_hero_inner">
                    <h2 className='text-3xl'>The Aurora Collection</h2>
                    <a href="/products">
                        <button className='green_button'><h3 className='text-base ' >Discover</h3></button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero