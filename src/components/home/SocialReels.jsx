import React from 'react'


export const SocialCardData = [
  {
    id: 1,
    img: "https://www.buccellati.com/media/.renditions/wysiwyg/1_HP_Mobile_Cover.jpg",
    title: "Bespoke Jewellery Design",
    description: "Exclusively to reflect your personality and timeless elegance.",
  },
  {
    id: 2,
    img: "https://www.buccellati.com/media/.renditions/wysiwyg/1_HP_Cover_Mobile_ADV23.jpg",
    title: "Luxury Handcrafted Rings",
    description: "Artistry meets precision in every detail.",
  },
  {
    id: 3,
    img: "https://www.buccellati.com/media/.renditions/wysiwyg/7_HP_Cover_video_Mobile.jpg",
    title: "Modern Elegance",
    description: "Sophisticated designs for every occasion.",
  },
  {
    id: 4,
    img: "https://www.buccellati.com/media/wysiwyg/SOA_HP.jpg",
    title: "Heritage Craftsmanship",
    description: "A timeless fusion of tradition and innovation.",
  },
]
const SocialReels = () => {
    return (
        <>
            <div className="social_header">
                <p className="social_subtitle text-xl uppercase">Follow us on</p>
                <h2 className="social_title text-4xl">Instagram</h2>
                <p className='text-base underline '>@rareelement</p>
            </div>
            <div className="socialCard_section padding">
                {SocialCardData?.map((item, i) => (
                    <div key={i} className="socialCard_box">
                        <div className="socialCard_image_wrapper">
                            <img
                                className="socialCard_image"
                                src={item.img}
                                alt="Bespoke Jewellery Design"
                            />
                        </div>

                        <h2 className="socialCard_title text-xl uppercase">{item.title}</h2>
                        <h3 className="socialCard_description text-lg">
                            {item.description}
                        </h3>
                    </div>
                ))}
            </div>

        </>
    )
}

export default SocialReels