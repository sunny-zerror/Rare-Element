import Link from 'next/link'
import React from 'react'

const Category = ({ data }) => {
    return (
        <>
            <div className="padding">
                <div className="category_header">
                    <p className='text-base uppercase thin'>The Essence of Elegance</p>
                </div>
                <div className="home_category_paren scroller_none">
                    <div className="home_category_inner scroller_none">
                        {data?.map((item, index) => (
                            <Link scroll={false} key={index} href={`/${item?.slug || item?._id}`}>
                                <div className="category_box">
                                    <div className="category_box_img_paren">
                                        <img src={item?.imgsrc} className='category_box_img' alt={item?.name || ""} />
                                    </div>
                                    <p className='text-sm bold uppercase'>{item?.name || ""}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category