import { RiCloseLine, RiDeleteBinLine } from '@remixicon/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'
import GreenBoxBtn from '../buttons/GreenBoxBtn';
import { ProductsData } from '@/utils/ProductsData';

const CartBag = ({ openCartBag, setOpenCartBag, headerOverlayRef }) => {

    useEffect(() => {
        if (window.innerWidth < 1020) {
            if (openCartBag) {
                const tedv = gsap.timeline();
                tedv.to(".cartBag_openBagParent", {
                    opacity: 1,
                    right: "0",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 1,
                        duration: 0.5,
                    }, "<+=0.1")

            } else {
                const dsc = gsap.timeline();
                dsc.to(".cartBag_openBagParent", {
                    opacity: 0,
                    right: "-100%",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 0,
                        duration: 0.5,
                    }, "<+=0.1")
            }

        } else {
            if (openCartBag) {
                if (window.lenis) window.lenis.stop();
                const tedv = gsap.timeline();
                tedv.to(".cartBag_openBagParent", {
                    opacity: 1,
                    right: "0rem",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 1,
                        duration: 0.5,
                    }, "<+=0.1")

            } else {
                if (window.lenis) window.lenis.start();
                const dsc = gsap.timeline();
                dsc.to(".cartBag_openBagParent", {
                    opacity: 0,
                    right: "-38rem",
                    ease: "power2.out",
                    duration: 0.5
                })
                    .to(headerOverlayRef.current, {
                        opacity: 0,
                        duration: 0.5,
                    }, "<+=0.1")
            }

        }
    }, [openCartBag])

    return (
        <>
            <div className="cartBag_openBagParent">
                <div className="cartBag_bagHeader">
                    <div className="cartBag_bagHeaderLeft">
                        <h2 className="cartBag_bagTitle text-2xl">Cart</h2>
                        <p className="cartBag_bagCount text-base"> (3) </p>
                    </div>
                    <div
                        onClick={() => { setOpenCartBag(false) }}
                        className="cartBag_menuHeaderClose">
                        <RiCloseLine size={14} className='close_icon' />
                    </div>
                </div>

                {/* empty cart bag */}

                {/* <div className="empty_cart_box">
                        <p className='text-lg'>There are currently no items in your bag.</p>
                    </div> */}

                {/* bag scroll */}
                <div data-lenis-prevent className="cartBag_bagScroll">
                    {ProductsData.slice(0, 3).map((item, index) => (
                        <div key={index} className="cartBag_bagItem">
                            <div className="cartBag_bagItemInner">
                                <div className="cartBag_bagImageWrapper">
                                    <Link onClick={() => setOpenCartBag(false)} key={index} href={`/products/${item.slug}`} className='cartBag_bagImage'>
                                        <img
                                            className="cartBag_bagImage"
                                            src={item.hoverImage}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="cartBag_bagItemDetails">
                                    <div className="cartBag_bagItemTop">
                                        <div>
                                            <p className="cartBag_itemName text-base">{item.title}</p>
                                            <p className="cartBag_itemSize text-sm">Color - Gold</p>
                                            <p className="cartBag_itemSize text-sm">Size - 16</p>

                                        </div>
                                        <p className='text-xl'>₹ {item.price}</p>
                                    </div>
                                    <div className="cartBag_bagItemBottom">
                                        <div className="cartBag_qtyControl text-lg">
                                            <div className="cartBag_qtyControl_dec">
                                                <p>−</p>
                                            </div>
                                            <p>1</p>
                                            <div className="cartBag_qtyControl_inc">
                                                <p>+</p>
                                            </div>
                                        </div>
                                        <div className="cartBag_removeButton">
                                            <RiDeleteBinLine size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="cartBag_bagFooter">
                    <div className="cartBag_totalRow text-2xl">
                        <p>Total</p>
                        <p>₹ 1,797</p>
                    </div>
                    <Link href="/checkout">
                        <div
                            onClick={() => { setOpenCartBag(false) }}
                            className="cartBag_checkoutButton">
                            <GreenBoxBtn text={"Proceed to Checkout"} />
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CartBag