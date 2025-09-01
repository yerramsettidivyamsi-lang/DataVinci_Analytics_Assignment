
import "./index.css"
import GallerrySection from './../gallerySection/index';
import COntentSection from "../contentSection";

const MainSection = () => {
    const s = 234;

    return (
        <div className="main_section_container">
            <GallerrySection/>
            <COntentSection/>
        </div>
    )
}

export default MainSection;