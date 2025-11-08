import Link from 'next/link'
import React from 'react'

const categoryData = [
    {
        link: "",
        title: "Rings",
        img: "https://www.buccellati.com/media/.renditions/wysiwyg/2_5_HP_Ramage.jpg"
    },
    {
        link: "",
        title: "Bracelets",
        img: "https://www.buccellati.com/media/.renditions/wysiwyg/2_1_HP_Macri.jpg"
    },
    {
        link: "",
        title: "earings",
        img: "https://www.buccellati.com/media/.renditions/wysiwyg/2_4_HP_Etoilee.jpg"
    },
    {
        link: "",
        title: "anklets",
        img: "https://www.buccellati.com/media/.renditions/wysiwyg/2_8_HP_Ghirlanda.jpg"
    },
    {
        link: "",
        title: "Necklace",
        img: "https://www.buccellati.com/media/.renditions/wysiwyg/2_2_HP_Opera.jpg"
    },
]
const Category = () => {
    return (
        <>
            <div className="padding">
                <div className="category_header">
                    <p className='text-xl uppercase'>The Essence of Elegance</p>
                </div>
                <div className="home_category_paren">
                    {categoryData.map((item, index) => (
                        <a key={index} href="/products">
                            <div className="category_box">
                                <div className="category_box_img_paren">
                                    <img src={item.img} alt={item.title} />
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