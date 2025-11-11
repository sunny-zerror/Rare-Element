import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
export const featureData = [
  {
    title: "Secure Payment",
    img: "/icons/lock.svg", 
    desc: "Your transactions are encrypted and fully protected for safe checkout.",
  },
  {
    title: "Free Shipping",
    img: "/icons/shipping.svg",
    desc: "Enjoy complimentary shipping on all domestic orders with no minimum spend.",
  },
  {
    title: "Store & Retail",
    img: "/icons/store.svg",
    desc: "Visit our boutique stores for an exclusive hands-on shopping experience.",
  },
  {
    title: "Chat Support",
    img: "/icons/chat.svg",
    desc: "Need help? Our support team is available 24/7 to assist you instantly.",
  },
];

const Footer = () => {

  useGSAP(()=>{
    gsap.from(".footer_below",{
      scrollTrigger:{
        trigger:".footer_classname_wrapper",
        start:"15% bottom",
        end:"bottom bottom",
        scrub:true,
        // markers:true
      },
      transform:"translateY(-100%)",
      opacity:0,
      ease:"linear"
    })
  })


  return (
    <div className="footer_classname_wrapper">
      <div className="footer_classname_container">
        {/* Secure Payment Section */}
        <div className="footer_classname_features">
          {featureData.map((item, i) => (
            <div key={i} className="footer_classname_featureCard">
              <div className="featured_icon">
              <img src={item.img} className='' alt="Feature Icon" />
              </div>
              <p className="footer_classname_featureTitle text-sm  uppercase">{item.title}</p>
              <h3 className="footer_classname_featureDesc text-sm">
                {item.desc}
              </h3>
            </div>
          ))}
        </div>
        <div className="footer_below">
        {/* Footer Links Section */}
        <div className="footer_classname_linksGrid">
          <div className="footer_classname_about">
            <h3 className='text-base'>
              Rare Element is where timeless design meets modern craftsmanship — every piece a statement of individuality.
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
              <h3 className='text-sm' >About Rare Element</h3>
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
          <img className='footer_logo' src="/logo.svg" alt="Rare Element Logo" />
          <h3 className='uppercase text-xs copyright_txt'>© 2025 Rare Element. All rights reserved. Crafted in India with timeless artistry.</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
