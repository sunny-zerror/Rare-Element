import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import MobileHeader from "../common/MobileHeader";
const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <MobileHeader/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
