import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'lottie-react';
import SecureLock from "../../../public/icons/animationJson/SecureLock.json";
import FreeShipping from "../../../public/icons/animationJson/FreeShipping.json";
import ChatSupport from "../../../public/icons/animationJson/ChatSupport.json";
import StoresRetail from "../../../public/icons/animationJson/StoresRetail.json";
import StretchArrow from "../../../public/icons/animationJson/StretchArrow.json";
import Link from 'next/link';


gsap.registerPlugin(ScrollTrigger)

export const featureData = [
  {
    title: "Secure Payment",
    img: "/icons/lock.svg",
    animationData: SecureLock,
    desc: "Your transactions are encrypted and fully protected for safe checkout.",
  },
  {
    title: "Free Shipping",
    img: "/icons/shipping.svg",
    animationData: FreeShipping,
    desc: "Enjoy complimentary shipping on all domestic orders with no minimum spend.",
  },
  {
    title: "Store & Retail",
    img: "/icons/store.svg",
    animationData: StoresRetail,
    desc: "Visit our boutique stores for an exclusive hands-on shopping experience.",
  },
  {
    title: "Chat Support",
    img: "/icons/chat.svg",
    animationData: ChatSupport,
    desc: "Need help? Our support team is available 24/7 to assist you instantly.",
  },
];

const Footer = () => {

  useEffect(() => {
    gsap.to(".footer_below", {
      scrollTrigger: {
        trigger: ".footer_classname_wrapper",
        start: "15% bottom",
        end: "bottom bottom",
        scrub: true,
        // markers: true
      },
      transform: "translateY(0%)",
      opacity: 1,
      ease: "linear"
    })
  })


  return (
    <div className="footer_classname_wrapper">
      <div className="footer_classname_container">
        {/* Secure Payment Section */}
        <div className="footer_classname_features">
          {featureData.map((item, i) => {
            const mainRef = useRef(null);
            const arrowRef = useRef(null);

            return (
              <div
                key={i}
                onMouseEnter={() => {
                  // Restart and play once
                  mainRef.current?.goToAndPlay(0, true);
                  arrowRef.current?.goToAndPlay(0, true);
                }}
                // 👇 No stop on mouse leave (let animation finish naturally)
                className="footer_classname_featureCard"
              >
                <div className="featured_icon">
                  <Lottie
                    lottieRef={mainRef}
                    animationData={item?.animationData}
                    autoplay={false}
                    loop={false} // play only once
                  />
                </div>

                <p className="footer_classname_featureTitle text-sm uppercase">
                  {item.title}
                </p>

                <h3 className="footer_classname_featureDesc text-sm">
                  {item.desc}
                </h3>

                <div className="featured_icon">
                  <Lottie
                    lottieRef={arrowRef}
                    animationData={StretchArrow}
                    autoplay={false}
                    loop={false} // play only once
                  />
                </div>
              </div>
            );
          })}

        </div>
        <div className="footer_below">
          {/* Footer Links Section */}
          <div className="footer_classname_linksGrid">
            <div className="footer_classname_about">
              <h3 className='text-base'>
                Nahara is where timeless design meets modern craftsmanship — every piece a statement of individuality.
              </h3>
            </div>

            <div className="footer_classname_column">
              <h3 className="footer_classname_heading text-base uppercase">Category</h3>
              <div className='footer_links_column' >
                <h3 className='text-sm' >Rings</h3>
                <h3 className='text-sm' >Earrings</h3>
                <h3 className='text-sm' >Bracelet</h3>
                <h3 className='text-sm' >Necklace</h3>
                <h3 className='text-sm' >Anklets</h3>
              </div>
            </div>

            <div className="footer_classname_column">
              <h3 className="footer_classname_heading text-base uppercase">Brand</h3>
              <div className='footer_links_column' >
                <h3 className='text-sm' >Home</h3>
                <h3 className='text-sm' >Shop</h3>
                <h3 className='text-sm' >About Nahara</h3>
              </div>
            </div>

            <div className="footer_classname_column">
              <h3 className="footer_classname_heading text-base uppercase">Support</h3>
              <div className='footer_links_column' >
                <h3 className='text-sm' >Shipping & Returns</h3>
                <h3 className='text-sm' >FAQs</h3>
                <h3 className='text-sm' >Care Guide</h3>
              </div>
            </div>

            <div className="footer_classname_column">
              <h3 className="footer_classname_heading text-base uppercase">Contact Us</h3>
              <div className='footer_links_column' >
                <h3 className='text-sm' >hello@rareelement.in</h3>
                <h3 className='text-sm' >Instagram</h3>
                <h3 className='text-sm' >WhatsApp</h3>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer_classname_bottom">
            <Link scroll={false} href="/">
              <img className='footer_logo' src="/logo.svg" alt="Nahara Logo" />
            </Link>
            <h3 className='uppercase text-xs copyright_txt'>© 2025 Nahara. All rights reserved. Developed by Zerror Studios</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
