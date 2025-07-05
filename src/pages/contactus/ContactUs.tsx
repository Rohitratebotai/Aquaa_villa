import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties";
import img from '../../assets/iIra_images/image_29.jpg';

const contactInfo = [
    {
        icon: "📍",
        text: "L2,3, Jabo Majra Road, Near PKR Jain Vatika School sarangpur,  India",
    },
    { icon: "📞", text: "+91-8199996777" },
    { icon: "📞", text: "+91-9813061164" },
    { icon: "✉️", text: "aqaavilla@gmail.com" },
];

const ContactUs = () => {
    return (
        <section className=''>
            {/* Banner  */}
            <div>
                <CommonBanner image={img} PageName={'Contact Us'} />
            </div>
            {/* Contact Info Section  */}
            <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-20 py-8">
                {/* Left Section */}
                <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
                    <span>
                        Discover the perfect blend of comfort and elegance at <strong>Aquaa Homes</strong>, located on <strong>L2,3, Jabo Majra Road, near PKR Jain Vatika School</strong>. Whether you're seeking a quiet getaway or a relaxing stay with your loved ones, our peaceful retreat offers a welcoming ambiance and modern amenities to make your experience truly memorable.

                        Enjoy spacious accommodations, seamless Wi-Fi connectivity, 24/7 security, and personalized hospitality designed to elevate your stay. Escape the ordinary and book your experience at <strong>Aquaa Homes</strong> — where comfort meets care.
                    </span>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-4">{info.icon}</span>
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Homepage Property section  */}
            <div>
                <Homepage_Properties />
            </div>
        </section>
    )
}

export default ContactUs