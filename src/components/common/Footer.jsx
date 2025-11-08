import React from 'react';

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
  return (
    <div className="footer_classname_wrapper">
      <div className="footer_classname_container">
        {/* Secure Payment Section */}
        <div className="footer_classname_features">
          {featureData.map((item, i) => (
            <div key={i} className="footer_classname_featureCard">
              <img src={item.img} alt="Feature Icon" />
              <p className="footer_classname_featureTitle text-base  uppercase">{item.title}</p>
              <h3 className="footer_classname_featureDesc text-lg">
                {item.desc}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer Links Section */}
        <div className="footer_classname_linksGrid">
          <div className="footer_classname_about">
            <h3 className='text-lg'>
              Rare Element is where timeless design meets modern craftsmanship — every piece a statement of individuality.
            </h3>
          </div>

          <div className="footer_classname_column">
            <h3 className="footer_classname_heading text-lg uppercase">Category</h3>
            <div className='footer_links_column' >
              <h3 className='text-base' >Rings</h3>
              <h3 className='text-base' >Earrings</h3>
              <h3 className='text-base' >Bracelet</h3>
              <h3 className='text-base' >Necklace</h3>
              <h3 className='text-base' >Anklets</h3>
            </div>
          </div>

          <div className="footer_classname_column">
            <h3 className="footer_classname_heading text-lg uppercase">Brand</h3>
            <div className='footer_links_column' >
              <h3 className='text-base' >Home</h3>
              <h3 className='text-base' >Shop</h3>
              <h3 className='text-base' >About Rare Element</h3>
            </div>
          </div>

          <div className="footer_classname_column">
            <h3 className="footer_classname_heading text-lg uppercase">Support</h3>
            <div className='footer_links_column' >
              <h3 className='text-base' >Shipping & Returns</h3>
              <h3 className='text-base' >FAQs</h3>
              <h3 className='text-base' >Care Guide</h3>
            </div>
          </div>

          <div className="footer_classname_column">
            <h3 className="footer_classname_heading text-lg uppercase">Contact Us</h3>
            <div className='footer_links_column' >
              <h3 className='text-base' >hello@rareelement.in</h3>
              <h3 className='text-base' >Instagram</h3>
              <h3 className='text-base' >WhatsApp</h3>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer_classname_bottom">
          <img className='footer_logo' src="/logo.svg" alt="Rare Element Logo" />
          <h3 className='uppercase text-sm copyright_txt'>© 2025 Rare Element. All rights reserved. Crafted in India with timeless artistry.</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
