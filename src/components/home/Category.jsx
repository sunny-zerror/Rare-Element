import Link from 'next/link'
import React from 'react'

const categoryData = [
    {
        link: "",
        title: "Rings",
        img: "https://www.buccellati.com/media/wysiwyg/Widget_Macri_Capri.jpg"
    },
    {
        link: "",
        title: "earings",
        img: "https://www.buccellati.com/media/wysiwyg/Category_Boxes_Macri.jpg"
    },
    {
        link: "",
        title: "Necklace",
        img: "https://www.buccellati.com/media/wysiwyg/Category_Boxes_Macri_Classica_copia.jpg"
    },
    {
        link: "",
        title: "Bracelets",
        img: "https://www.buccellati.com/media/wysiwyg/Category_Boxes_Macri_AB_copia.jpg"
    },
    {
        link: "",
        title: "anklets",
        img: "https://www.buccellati.com/media/wysiwyg/Category_Boxes_Macri_Giglio_copia.jpg"
    },
]
const Category = () => {
    return (
        <>
            <div className="padding">
                <div className="category_header">
                    <p className='text-base uppercase'>The Essence of Elegance</p>
                </div>
                <div className="home_category_paren">
                    {categoryData.map((item, index) => (
                        <a key={index} href="/products">
                            <div className="category_box">
                                <div className="category_box_img_paren">
                                    <img src={item.img} className='category_box_img' alt={item.title} />
                                </div>
                                <p className='text-base uppercase'>{item.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category