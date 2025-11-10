import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import CustomEase from 'gsap/dist/CustomEase';
gsap.registerPlugin(ScrollTrigger, CustomEase)

const navLinks = [
    {
        title: "rings",
        link: "/products"
    },
    {
        title: "earings",
        link: "/products"
    },
    {
        title: "necklaces",
        link: "/products"
    },
    {
        title: "bracelets",
        link: "/products"
    },
    {
        title: "anklets",
        link: "/products"
    },
]
const Header = () => {
    const pathname = usePathname()

    useGSAP(() => {
        if (pathname?.startsWith("/products/")) {
            gsap.set(".header_bg", {
                top: 0,
            });
        }
    }, [pathname]);

    useGSAP(() => {
        if (pathname !== "/") {
            gsap.set(".dummy_paren", {
                display: "none",
            })
            // gsap.set(".header_bg", {
            //     top: 0,
            // })
            gsap.set(".header", {
                top: 0,
                position: "fixed",
                left: 0
            })
        }

    }, [pathname])


    useGSAP(() => {
        if (pathname === "/products/") return
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".header",
                start: "bottom top",
                toggleActions: "play none none reverse",
                // end:"30rem top",
                // scrub:true,
                // markers:true,
            }
        })
        tl.to(".header_bg", {
            top: 0,
            duration: .25
        })
    })
    return (
        <>
            <div className="dummy_paren"></div>
            <div className="header padding">
                <div className="header_bg"></div>
                <div className="logo_paren">
                    <a href="/">
                        <img className='header_logo' src="/logo.svg" alt="" />
                    </a>
                </div>
                <div className="nav_links">
                    {
                        navLinks.map((item, index) => (
                            <a href={item.link} key={index}>
                                <h3 className='text-sm hover_text'>{item.title}</h3>
                            </a>
                        ))
                    }
                </div>
                <div className="short_links">
                    <a href="/">
                        <img className='short_links_icon' src="/icons/heart.svg" alt="" />
                    </a>
                    <a href="/">
                        <img className='short_links_icon' src="/icons/cart.svg" alt="" />
                    </a>
                    <a href="/">
                        <img className='short_links_icon' src="/icons/profile.svg" alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header