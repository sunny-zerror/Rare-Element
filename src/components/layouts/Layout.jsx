import React, { useEffect, useRef } from "react";
import { useCartStore } from "@/store/cart-store";
import gsap from "gsap";
import Header from "@/components/common/Header";
import MobileHeader from "@/components/common/MobileHeader";
import Footer from "@/components/common/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
const Layout = ({ children }) => {
  const { isCartOpen, openCart, closeCart } = useCartStore((state) => state);
  const overlayRef = useRef()

  useEffect(() => {
    if (isCartOpen) {
      gsap.set(overlayRef.current, { pointerEvents: "auto" })
    } else {
      gsap.set(overlayRef.current, { pointerEvents: "none" })
    }
  }, [isCartOpen])


  return (
    <>

      <a href="https://wa.me/910000000000">
        <div className="whatsapp_chat">
          <div className="whatsapp_chat_img center">
            <img className="cover" src="/gifs/whatsapp.gif" alt="" />
          </div>
          <p className="bold">CHAT</p>
        </div>
      </a>

      <div onClick={closeCart} ref={overlayRef} className="header_overlay scroller_none" />
      <CartDrawer isOpen={isCartOpen} overlayRef={overlayRef} closeCart={closeCart} />
      <Header openCart={openCart} />
      <MobileHeader openCart={openCart} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
