import Parallax from "../../components/commonComponents/parallax/Parallax"
import Amenities from "../../components/homepage_components/amenities/Amenities"
import Homepage_ExclusiveService from "../../components/homepage_components/homepage_exclusiveservice/Homepage_ExclusiveService"
import Homepage_LetUsGuide from "../../components/homepage_components/homepage_letusguide/Homepage_LetUsGuide"
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties"
import Homepage_Testimonial from "../../components/homepage_components/homepage_testimonial/Homepage_Testimonial"
import Homepage_WhyChoose from "../../components/homepage_components/homepage_whychoose/Homepage_WhyChoose"
import Slider from "../../components/homepage_components/slider/Slider"
import img from '../../assets/aquaa_images/image_14.jpg'

const Home = () => {
    // Slider Images 
    return (
        <section className="relative font-roboto">
            <div className="w-full h-screen">
                <Slider />
            </div>
            <div>
                <Homepage_Properties />
            </div>
            <div>
                <Parallax image={img} title={'Discover Unmatched Elegance in Our Exclusive Property'} 
                description = {'Imagine stepping away from the chaos of daily life into a calm, thoughtfully designed space where comfort meets quiet. At Aquaa Homes, we bring you a refreshing getaway experience in the heart of nature.'} />
            </div>
            <div className=" px-4 lg:px-20 ">
                <Amenities />
            </div>
            <div className="">
                <Homepage_LetUsGuide />
            </div>
            <div className="">
                <Homepage_ExclusiveService />
            </div>
            <div className="">
                <Homepage_WhyChoose />
            </div>
            <div className="">
                <Homepage_Testimonial />
            </div>
        </section>
    )
}

export default Home