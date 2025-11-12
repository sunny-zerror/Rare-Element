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
const MobileHeader = () => {

      const pathname = usePathname()

  useEffect(() => {
    if(window.innerWidth > 750) return
    // Reset or set conditions when changing paths
    if (pathname?.startsWith("/products/")) {
      gsap.set(".mobile_header_bg", { top: 0 });
    }
  }, [pathname]);

  useEffect(() => {
    if(window.innerWidth > 750) return
    if (pathname === "/") {
      gsap.set(".mobile_dummy_paren", { display: "block" });
      gsap.set(".mobile_header", {
        position: "sticky",
        height: "4rem",
        display: "flex",
      });
      gsap.set(".mobile_header_bg", { top: "-4.1rem", height: "4rem" });
    }
  }, [pathname]);

  useEffect(() => {
    if(window.innerWidth > 750) return
    if (pathname !== "/") {
      gsap.set(".mobile_dummy_paren", { display: "none" });
      gsap.set(".mobile_header", { top: 0, position: "fixed", left: 0 });
    }
  }, [pathname]);

  useEffect(() => {
    if(window.innerWidth > 750) return
    if (pathname?.startsWith("/products/")) return;

    // Kill old ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mobile_header",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".mobile_header_bg", {
      top: 0,
      duration: 0.25,
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, [pathname]);

    return (
        <>
            <div className="mobile_dummy_paren"></div>
            <div className="mobile_header padding">
                <div className="mobile_header_bg"></div>
                <img className='short_links_icon' src="/icons/menu.svg" alt="" />
                <a href="/">
                    <img className='mobile_logo' src="/logo.svg" alt="" />
                </a>
                <img className='short_links_icon' src="/icons/cart.svg" alt="" />
            </div>
        </>
    )
}

export default MobileHeader