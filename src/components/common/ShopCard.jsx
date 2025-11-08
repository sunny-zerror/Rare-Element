import React from 'react'

const ShopCard = ({ item }) => {
    return (
        <>
            <div className="shopCard_card">

                <img className='shopCard_hoverImg' src={item?.hoverImage} alt="" />

                <div className="shopCard_img_wrapper">
                    <img
                        src={item?.image}
                        alt="coverImg"
                    />
                </div>
                <div className="shopCard_card_info">
                    <div>
                        <p className="shopCard_item_name text-base uppercase">{item?.title}</p>
                        <p className="shopCard_item_price text-sm">Rs. {item?.price}</p>
                    </div>
                    <img className=' short_links_icon' src="/icons/heart.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default ShopCard