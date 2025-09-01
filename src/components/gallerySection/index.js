import "./index.css"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const GallerrySection = () =>{
    const galleryImgs = [
        {img_id: 1,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656419/samples/g1_f4blfx.png"
        },
        {img_id: 2,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656416/samples/g2_rh1hcs.png"
        },
        {img_id: 3,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656420/samples/g3_zsgsuq.png"
        },
        {img_id: 4,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656419/samples/g4_sg6jl2.png"
        },
        {img_id: 5,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656417/samples/g5_zwsjp0.png"
        },
        {img_id: 6,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656419/samples/g6_xojzch.png"
        },
        {img_id: 7,
            url: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1756656420/samples/g7_sr8nnl.png"
        }
    ];

    
    
    return (
        <div className="gallery_main_container">
            <div className="carousel_sec">
                <button className="gallerry_btn">
                    <MdOutlineArrowBackIos className="gallerry_btn_icon" />
                </button>
                <img
                    src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756657039/samples/main_pfn5vy.png"
                    className="main_prodct_img"
                    />
                <button className="gallerry_btn">
                    <MdOutlineArrowForwardIos className="gallerry_btn_icon"/>
                </button>
            </div>
            <div className="gallerry_sec">
                {galleryImgs.map((img, index) => (
                    <img 
                    key={index} 
                    src={img.url}  
                    alt={`gallery-img-${index}`}
                    />
                ))}

            </div>
        </div>
    )
}

export default GallerrySection;