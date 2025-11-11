import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const pathname = usePathname()

    useGSAP(() => {
        gsap.to(".home_hero_video", {
            scrollTrigger: {
                trigger: ".home_hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true
            },
            y:250,
            ease:"linear"
        })
    }, [pathname])

    return (
        <>
            {pathname === "/" && (
                <div className="info_header center">
                    <h3 className='text-xs'> Free Shipping on orders above Rs. 3,000 </h3>
                </div>
            )}
            <div className="dummy_hero_div"></div>
            <div className="home_hero">
                <video className=' home_hero_video cover' loop muted playsInline autoPlay src="https://365ayearof.cartier.com/hero-carousel/1_Creative_Alchemy_Desktop%20test%20loop%208%20sec.mp4"></video>
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