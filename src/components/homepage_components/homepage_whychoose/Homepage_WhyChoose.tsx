import img1 from '../../../assets/aquaa_images/image_9.jpg';
import img2 from '../../../assets/aquaa_images/image_3.jpg';
import { MdOutlineDone } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface FeatureData {
    images: string[]; // Array of image paths (strings)
    title: string;
    description: string;
    features: string[]; // Array of feature descriptions (strings)
}

const Homepage_WhyChoose = () => {
    const featureData: FeatureData = {
        images: [img1, img2],
        title: "Why Choose Aquaa Homes?",
        description: "Discover comfort and tranquility at Aquaa Homes, your ideal retreat located at L2,3, Jabo Majra Road, near PKR Jain Vatika School. Perfect for relaxation, gatherings, or simply escaping the city bustle.",
        features: [
            "Peaceful villa stay in a serene neighborhood.",
            "Modern design blending comfort and style.",
            "Close to local amenities and schools.",
            "Ideal for families, couples, and small groups.",
            "Personalized hospitality for a memorable stay.",
            "Your home away from home with privacy and warmth."
        ]
    };


    return (
        <section className="py-10 lg:py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-10 lg:px-20 tracking-widest">
                {/* Left side - Images */}
                <div className="flex-1 flex justify-center items-center relative">
                    <img
                        src={img1}
                        alt="Pool view with people"
                        className="w-4/5 sm:w-2/3 rounded-lg shadow-lg object-cover"
                    />
                    <img
                        src={img2}
                        alt="Garden swing area"
                        className="w-56 sm:w-72 absolute -bottom-8 right-8 sm:-bottom-10 sm:right-10 rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                    {featureData?.title && (
                        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                            {featureData.title}
                        </h1>
                    )}

                    {featureData?.description && (
                        <p className="text-gray-700 mb-6 text-sm sm:text-base">
                            {featureData.description}
                        </p>
                    )}

                    <ul className="space-y-4 mb-8">
                        {featureData?.features?.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="text-primary text-xl sm:text-2xl"><MdOutlineDone /></span>
                                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center lg:justify-start">
                        <Link
                            to={'/contact'}
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors hover:bg-primary-dark"
                        >
                            <span>Contact</span>
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage_WhyChoose;
