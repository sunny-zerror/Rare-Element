import React from 'react'

const LookBook = () => {
    return (
        <>
            <div className="lookbook_section">
                <div className="lookbook_content">
                    <p className="lookbook_tagline uppercase text-xl">The Essence of Elegance</p>
                    <h2 className="lookbook_title uppercase text-4xl">
                        Aurora Drop <br /> Earrings
                    </h2>
                    <button className="lookbook_button">
                        <h3 className="lookbook_btn_text">Shop Now</h3>
                    </button>
                </div>
                <img
                    className="lookbook_bg_img"
                    src="https://www.graff.com/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw74903a04/images/megamenu/Navigation_MM_High_Jewellery_Festive-2025-1890x1059px.jpg"
                    alt="Aurora Drop Earrings"
                />
            </div>

            <div className="lookbookCard_container">

                <div className="lookbookCard_box">
                    <div className="lookbookCard_image">
                        <img className='cover' src="https://www.graff.com/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwa1bb7ece/images/LG_carouselv2.jpg" alt="" />
                    </div>
                    <div className="lookbookCard_text">
                        <h2 className="lookbookCard_title text-2xl uppercase">Iconic Gifts</h2>
                        <p className="lookbookCard_link text-base">Shop Now</p>
                    </div>
                </div>

                <div className="lookbookCard_box">
                    <div className="lookbookCard_image">
                        <img className='cover' src="https://www.graff.com/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwc2695dfa/images/Icon_carouselv2.jpg" alt="" />
                    </div>
                    <div className="lookbookCard_text">
                        <h2 className="lookbookCard_title text-2xl uppercase">Iconic Gifts</h2>
                        <p className="lookbookCard_link text-base">Shop Now</p>
                    </div>
                </div>

            </div>


            <div className="lookbookSlider_section">
                <div className="lookbookSlider_left">
                    <img className='cover' src="https://minas-designs.com/wp-content/uploads/2025/06/5-min-6.jpg" alt="" />
                </div>

                <div className="lookbookSlider_right">
                    <div className="lookbookSlider_heading_wrapper">
                        <p className="lookbookSlider_heading uppercase text-xl">The Looks</p>
                    </div>

                    <div className="lookbookSlider_card_wrapper">
                        <div className="lookbookSlider_card">
                            <div className="lookbookSlider_card_image">
                                <img className='cover' src="https://www.buccellati.com/media/.renditions/wysiwyg/1_HP_Fall_Edit_Cover_video_Mobile.jpg?width=1200" alt="" />
                            </div>
                            <p className="lookbookSlider_card_description text-base">
                                A delicate gold band crowned with a moonlit diamond, symbolizing elegance and calm.
                            </p>
                            <button className="lookbook_button">
                                <h3 className="lookbook_btn_text text-base">Shop Now</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default LookBook