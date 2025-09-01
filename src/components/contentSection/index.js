import { useState } from "react"
import "./index.css"

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


const COntentSection = () => {

    const [quantity, setQuantity] = useState(1);

    const certificationsImgs = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662876/samples/c1_l7bthw.png"
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662876/samples/c2_ywevn1.png"
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662899/samples/c3_vvc2pa.png"
        },
        {
            id: 4,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662899/samples/c4_hxfocg.png"
        },
        {
            id: 5,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662900/samples/c5_ypaoti.png"
        },
        {
            id: 6,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662902/samples/c6_uszhmu.png"
        }
    ]

    const variantsImgs = [
            {
                id: 1,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656860/samples/v1_uxhckg.png"
            },
            {
                id: 2,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656860/samples/v2_zlhdml.png"
            },
            {
                id: 3,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656860/samples/v3_g8evmt.png"
            },
            {
                id: 4,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656860/samples/v4_lmaxwl.png"
            },
            {
                id: 5,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656860/samples/v5_uogm8p.png"
            },
            {
                id: 6,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656860/samples/v6_mj0ljs.png"
            },
            {
                id: 7,
                url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656861/samples/v7_n5zlmw.png"
            }
        ]

    const quantityIncreament = () => {
        setQuantity(quantity+1);
    }

    const quantityDecreament = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="content_sec">
            <div className="heading_container">
                <h1>
                    Manuka Honey
                </h1>
                <p>
                    UMF<sup>TM</sup> 24+
                </p>
                <p>
                    MGO  1122+
                </p>
            </div>
            <button className="info_popup_btn">
                <img
                src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756661714/samples/info_rimsum.png"
                alt="info-icon"
                />
                <p>
                    What is UMF and MGO?
                </p>
            </button>
            <div className="product_type">
                <p>
                    The Optimizer
                </p>
                <div className="ratings_container">
                {[...Array(5)].map((_, i) => (
                    <img 
                    key={i} 
                    src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756662098/samples/love_icon_ou5ksy.png" 
                    alt={`rating_img_${i}`}
                    />
                ))}
                <p>
                    825 REVIEWS
                </p>
            </div>
            </div>
            <p className="description">
                For those times in life when quality comes first. This pure UMFtm 24+ Manuka Honey is powerfully active, source from wild and rugged location around Aoteaaroa 
                New Zealand great for almost all uses. It has a full, delicious flavour and your body will love you for it.
            </p>
            <div className="certificatioins_container">
                {
                    certificationsImgs.map((img, index) => (
                        <img
                        key={img.id}
                        src = {img.url}
                        alt= {`certification-${index+1}`}
                        />
                    ))
                }
            </div>

            <div className="variants_container">
                <p>
                    {"SIZE (SELECT ONE)"}
                </p>
                <p>
                    Varient: {"125g"} | {"4.4oz"}
                </p>

                <div className="variant_btns_container">
                    {
                        variantsImgs.map((variant, index) => (
                            <button 
                                key={index}>
                                <img
                                src={variant.url}
                                alt={`variant-${index+1}`}
                                />
                            </button>
                        ))
                    }
                </div>

            </div>

            <div className="payment_container">
                <p>
                    PAYMENT OPTIONS{" (SELECT ONE)"}
                </p>
                <div>
                    <button>
                        <span>
                            One-Time<br/>
                            Purchase
                        </span>
                        <span>
                            ${55.88}USD
                        </span>
                    </button>
                    <button>
                        <span>
                            Subscribe & save <br/>
                            20%
                        </span>
                        <span>
                            ${44.70}USD
                        </span>
                    </button>
                </div>
                <button>
                    <img
                    src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756697242/samples/reload_icon_bdfr9n.png"
                    alt="retry"
                    />
                    <span>
                        What is a Subcription
                    </span>
                </button>
            </div>
            <div className="quantity_main_container">
                <p>
                    SELECT QUANTITY
                </p>
                <div className="quantity_sub_container">
                    <div className="quantity_container">
                        <button onClick={quantityDecreament} className="decreament_btn" >
                            -
                        </button>
                        <p>
                            {quantity}
                        </p>
                        <button onClick={quantityIncreament} className="increament_btn">
                            +
                        </button>
                    </div>
                    <button className="add_cart_btn">
                        <span>
                            Add to Cart
                        </span>
                    </button>
                </div>
            </div>

            <div className="bundle_container">
                <div>
                    <button>
                        <MdOutlineArrowBackIos/>
                    </button>
                    <p>
                        Beauty Bundle
                    </p>
                    <button>
                        <MdOutlineArrowForwardIos/>
                    </button>
                </div>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default COntentSection;