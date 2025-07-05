import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
// import img from '../../assets/HomePage_banner1.jpg'
import img1 from '../../assets/aquaa_images/image_23.jpg'
import img2 from '../../assets/aquaa_images/image_27.jpg'
import Parallax from "../../components/commonComponents/parallax/Parallax"
import NearByPlaces from "../../components/aboutpage_component/nearbyplaces/NearByPlaces"

const About = () => {
    return (
        <section>
            <div>
                <CommonBanner image={img1} PageName={'About Us'} />
            </div>
            <div className="tracking-wide py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* title  */}
                <div>
                    <span className="text-4xl font-medium">
                        Welcome to Aquaa Homes
                    </span>
                </div>
                {/* description  */}
                <div className="text-base font-thin flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 max-w-7xl mx-auto">
                    <p className="text-lg sm:text-xl font-semibold text-gray-900 text-center md:text-left">
                        Experience Comfort and Calm at Aquaa Homes, Your Private Retreat!
                    </p>

                    <p className="text-gray-700 text-justify">
                        Nestled in the peaceful neighborhood of <strong>L2,3, Jabo Majra Road, near PKR Jain Vatika School</strong>, <strong>Aquaa Homes</strong> offers a cozy and elegant villa experience. Surrounded by greenery and convenience, our property is the perfect sanctuary for relaxation, family gatherings, or a refreshing break from city life.
                    </p>

                    <p className="text-gray-700 text-justify">
                        Enjoy spacious, well-appointed accommodations with modern amenities and warm hospitality. Whether you're spending quality time with loved ones or simply unwinding in a serene setting, <strong>Aquaa Homes</strong> provides a memorable and comfortable stay.
                    </p>

                    <p className="font-medium text-gray-800 text-center md:text-left mt-6">
                        Book your stay at <strong>Aquaa Homes</strong> today and discover the perfect blend of tranquility, convenience, and homely warmth in Alibaug!
                    </p>
                </div>
            </div>

            {/* Parallax  */}
            <div>
                <Parallax
                    image={img2}
                    title={'Discover the Charm of Aquaa Homes'}
                    description={
                        'Escape the daily grind to a tranquil retreat at Aquaa Homes, nestled at L2,3, Jabo Majra Road near PKR Jain Vatika School. Experience unmatched comfort, modern living, and a serene environment that feels just like home.'
                    }
                />
            </div>

            {/* Near by places  */}
            <div>
                <NearByPlaces />
            </div>
        </section>
    )
}

export default About