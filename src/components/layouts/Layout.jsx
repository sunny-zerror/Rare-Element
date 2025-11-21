import React, { useEffect, useRef, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import MobileHeader from "../common/MobileHeader";
import CartBag from "../common/CartBag";
import gsap from "gsap";
const Layout = ({ children }) => {
  const [openCartBag, setOpenCartBag] = useState(false)
  const overlayRef = useRef()


  useEffect(() => {
    if(openCartBag){
      gsap.set(overlayRef.current,{pointerEvents:"auto"})
    }else{
      gsap.set(overlayRef.current,{pointerEvents:"none"})
    }
  }, [openCartBag])
  

  return (
    <>
      <div onClick={()=>setOpenCartBag(false)} ref={overlayRef} className="header_overlay scroller_none" />

      <CartBag
        openCartBag={openCartBag}
        setOpenCartBag={setOpenCartBag}
        headerOverlayRef={overlayRef}
      />

      <Header setOpenCartBag={setOpenCartBag} />
      <MobileHeader setOpenCartBag={setOpenCartBag} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
