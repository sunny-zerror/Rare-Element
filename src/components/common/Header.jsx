import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
gsap.registerPlugin(ScrollTrigger)

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
        if (pathname !== "/") {
            gsap.set(".header", {
                top: 0,
                ease: "linear",
            })
            gsap.set(".header", {
                backgroundColor: "#F9F9F9",
                height: "4rem",
            })
            gsap.set(".nav_links p", {
                color: "black",
            })
            gsap.set(".header_logo", {
                width: "12vw",
                ease: "linear",
            })
        }

        if (pathname !== "/") return
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: "top top",
                end: "35px top",
                scrub: true,
            }
        })
        tl.to(".header", {
            top: 0,
            ease: "linear",
        })
        tl.to(".header", {
            backgroundColor: "#F9F9F9",
            height: "4rem",
        })
        tl.to(".nav_links p", {
            color: "black",
        }, ">")
        tl.to(".header_logo", {
            width: "12vw",
            ease: "linear",
            duration: 4
        }, ">")
    })

    return (
        <>
            <div className="header padding">
                <div className="logo_paren">
                    <a href="/">
                        <img className='header_logo' src="/logo.svg" alt="" />
                    </a>
                </div>
                <div className="nav_links">
                    {
                        navLinks.map((item, index) => (
                            <a href={item.link} key={index}>
                                <p className='text-base'>{item.title}</p>
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