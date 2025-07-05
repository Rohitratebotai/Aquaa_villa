import logo from "../src/assets/iIra_images/iira_stay.jpg";

// import img1 from './assets/HomePage_banner1.jpg'
// import img2 from './assets/HomePage_banner1.jpg'
// import img3 from './assets/HomePage_banner1.jpg'

// Property Images iIrastays 
import aquaa1 from './assets/aquaa_images/image_1.jpg';
import aquaa2 from './assets/aquaa_images/image_2.jpg';
import aquaa3 from './assets/aquaa_images/image_3.jpg';
import aquaa4 from './assets/aquaa_images/image_4.jpg';
import aquaa5 from './assets/aquaa_images/image_5.jpg';
import aquaa6 from './assets/aquaa_images/image_6.jpg';
import aquaa7 from './assets/aquaa_images/image_7.jpg';
import aquaa8 from './assets/aquaa_images/image_8.jpg';
import aquaa9 from './assets/aquaa_images/image_9.jpg';
import aquaa10 from './assets/aquaa_images/image_10.jpg';
import aquaa11 from './assets/aquaa_images/image_11.jpg';
import aquaa12 from './assets/aquaa_images/image_12.jpg';
import aquaa13 from './assets/aquaa_images/image_13.jpg';
import aquaa14 from './assets/aquaa_images/image_14.jpg';
import aquaa15 from './assets/aquaa_images/image_15.jpg';
import aquaa16 from './assets/aquaa_images/image_16.jpg';
import aquaa17 from './assets/aquaa_images/image_17.jpg';
import aquaa18 from './assets/aquaa_images/image_18.jpg';
import aquaa19 from './assets/aquaa_images/image_19.jpg';
import aquaa20 from './assets/aquaa_images/image_20.jpg';
import aquaa21 from './assets/aquaa_images/image_21.jpg';
import aquaa22 from './assets/aquaa_images/image_22.jpg';
import aquaa23 from './assets/aquaa_images/image_23.jpg';
import aquaa24 from './assets/aquaa_images/image_24.jpg';
import aquaa25 from './assets/aquaa_images/image_25.jpg';
import aquaa26 from './assets/aquaa_images/image_26.jpg';
import aquaa27 from './assets/aquaa_images/image_27.jpg';
import aquaa28 from './assets/aquaa_images/image_28.jpg';
import aquaa29 from './assets/aquaa_images/image_29.jpg';
import aquaa30 from './assets/aquaa_images/image_30.jpg';
import aquaa31 from './assets/aquaa_images/image_31.jpg';
import aquaa33 from './assets/aquaa_images/image_33.jpg';
import aquaa34 from './assets/aquaa_images/image_34.jpg';


// All Properties Data
export const propertyData = [
    {
        id: 1,
        property_name: "Aquaa Villa",
        property_description: "Welcome to Aquaa Villa – A Private Escape at Jabo Majra Road Tucked away in a peaceful corner at L2,3, Jabo Majra Road, near PKR Jain Vatika School, Aquaa Villa is your serene retreat from the everyday hustle. With its modern design, warm interiors, and tranquil surroundings, this elegant villa is perfect for families, couples, or groups looking to relax and reconnect. Whether you're planning a quiet weekend getaway or a small celebration, Aquaa Villa offers a comfortable, homely atmosphere just minutes away from city conveniences. Surrounded by nature and thoughtfully designed for comfort, it’s an ideal escape for those seeking peace, privacy, and a refreshing change of pace.",
        property_location: "L2,3, Jabo Majra Road, Near PKR Jain Vatika School sarangpur, punjab 140417",
        property_img: [aquaa1, aquaa2, aquaa3, aquaa4, aquaa5, aquaa6, aquaa7, aquaa8, aquaa9, aquaa10, aquaa11, aquaa12, aquaa13, aquaa14, aquaa15, aquaa16, aquaa17, aquaa18, aquaa19, aquaa20, aquaa21, aquaa22, aquaa23, aquaa24, aquaa25, aquaa26, aquaa27, aquaa28, aquaa29, aquaa30, aquaa31,  aquaa33, aquaa34],
        // property_brandId: "194",
        property_amenities: [
            {
                amenities_type: "Rooms",
                amenities_count: 5,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Parking",
                amenities_availablity: 'Available',
                amenities_icon: "car",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'Available',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Internet",
                amenities_availablity: 'available',
                amenities_icon: "wifi",
            },
            {
                amenities_type: "Washrooms",
                amenities_availablity: 'Private',
                amenities_count: 5,
                amenities_icon: "shower",
            },
            {
                amenities_type: "Air condition",
                amenities_availablity: 'available',
                amenities_icon: "ac",
            }
        ],
        property_services: ["Free Parking", "24/7 Check-In", "Full-service laundry", "Housekeeping daily", "Mineral Water"],
        status: "Available",
        property_details: [
            {
                type: "Games room",
                value: "Unavailable"
            },
            {
                type: "Beach Access",
                value: "Available"
            }
        ],
        // property_aditional_details: [
        //     {
        //         type: "smoking",
        //         value: ""
        //     },
        //     {
        //         type: "Pets ",
        //         value: ""
        //     },
        // ],
        property_address: [
            {
                type: "Place",
                value: "L2,3, Jabo Majra Road, Near PKR Jain Vatika School"
            },
            {
                type: "City",
                value: "sarangpur"
            },
            {
                type: "Area",
                value: "sarangpur"
            },
            {
                type: "State",
                value: "punjab"
            },
            {
                type: "Postal Code",
                value: "140417"
            },
            {
                type: "Country",
                value: "India"
            }
        ]

    },

];


export const navbarData = {
    details: [
        {
            id: 1,
            icon: 'IoIosMail',
            data: 'SSGRANDSIRCILLA@gmail.com'
        },
        {
            id: 2,
            icon: 'IoIosCall',
            data: '9394607407'
        },
    ],
    logo: [
        {
            id: 1,
            image: logo, // Replace with the actual logo image path
            alt: "Company Logo"
        }
    ],
    navmenu: [
        {
            id: 1,
            title: "Home",
            link: "/",
            submenu: []
        },
        {
            id: 2,
            title: "About",
            link: "/about",
            submenu: []
        },
        {
            id: 3,
            title: "Villas",
            link: "/",
            // submenu: [propertyData[0].property_name, propertyData[1].property_name, propertyData[2].property_name, propertyData[3].property_name, propertyData[4].property_name]   // Add the property names here
        },
        {
            id: 4,
            title: "Contact",
            link: "/contact",
            submenu: []
        },

    ],
    button: [
        {
            id: 1,
            type: "primary",
            text: "Login"
        }

    ]
};


import {
    FaFacebook, FaTwitter, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { IoIosMail, IoIosCall, IoIosArrowForward } from 'react-icons/io';
// import ExclusiveService_Card from "./components/homepage_components/homepage_exclusiveservice/ExclusiveService_Card";

// Define icon keys as a union type
export type IconKey =
    | 'FaFacebook'
    | 'FaTwitter'
    | 'FaInstagram'
    | 'FaYoutube'
    | 'ImGithub'
    | 'IoIosMail'
    | 'IoIosCall'
    | 'IoIosArrowForward';

// Icon mapping interface
export interface IconMapping {
    [key: string]: React.ComponentType<{ className?: string }>;
}

// Social Links Interface
export interface SocialLink {
    icon: IconKey;
    link: string;
}

// Contact Info Interface
export interface ContactInfo {
    icon: IconKey;
    text: string;
}

// Villa Links Interface
export interface VillaLink {
    icon: IconKey;
    text: string;
    link: string;
}

// Footer Data Interface
export interface FooterDataInterface {
    socialLinks: SocialLink[];
    contactInfo: ContactInfo[];
    villaLinks: VillaLink[];
    mapSrc: string;
}

// Icon Mapping
export const iconMap: IconMapping = {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    ImGithub,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

export const footerData: FooterDataInterface = {
    socialLinks: [
        { icon: 'FaFacebook', link: 'https://facebook.com' },
        { icon: 'FaTwitter', link: 'https://twitter.com' },
        { icon: 'FaInstagram', link: 'https://instagram.com' },
        { icon: 'FaYoutube', link: 'https://youtube.com' },
    ],
    contactInfo: [
        { icon: 'IoIosMail', text: 'aqaavilla@gmail.com' },
        { icon: 'IoIosCall', text: '+91 8199996777' },
        { icon: 'IoIosCall', text: '+91 9813061164' },
    ],
    villaLinks: [
        { icon: 'IoIosArrowForward', text: 'Aquaa Homes', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Casa 3 bhk', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Hotel Lotus', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Panchvati Resort', link: '/' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.641512234004!2d76.74991707751187!3d30.349007236141464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc8e402f51b8b%3A0x6e6ce2fbe80da134!2sP.K.R%20Jain%20Vatika%20Sr.%20Sec.%20School!5e1!3m2!1sen!2sin!4v1751463259350!5m2!1sen!2sin'
};

// const propertyData = [
//     {
//         id: 1,
//         property_name: "Rhythm Villa",
//         property_description: "Rhythm Villa is a beautiful property located in the heart of Lonavala. The property is surrounded by lush greenery and offers a serene environment for a relaxing stay. The property is equipped with modern amenities and offers a comfortable stay for guests. The property is ideal for families, couples, and groups looking for a peaceful getaway in Lonavala. The property is located close to the market area and offers easy access to popular tourist spots in Lonavala. The property is ideal for guests looking for a comfortable stay in Lonavala.",
//         property_location: "Malavali, Lonavala",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 6,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 6,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "6"
//             },
//             {
//                 type: "Property_Size",
//                 value: "5000 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Pawna Lake, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Pawna Lake"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410401"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]
//     },
//     {
//         id: 2,
//         property_name: "Anjum Villa",
//         property_description: "Anjum Villa is a luxurious property located in the scenic Lonavala. The villa offers an intimate retreat with modern amenities and a tranquil atmosphere, making it perfect for families, groups, or couples.",
//         property_location: "Jevrewadi Village, Lonavala .",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 5,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 5,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "4"
//             },
//             {
//                 type: "Property_Size",
//                 value: "4500 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Near Sunset Point, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Malshej Ghat"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410405"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]

//     },
//     {
//         id: 3,
//         property_name: "Serene Escape Villa",
//         property_description: "Serene Escape Villa is a luxurious villa offering the perfect escape from the hustle and bustle of city life. Surrounded by nature, it provides a peaceful and private atmosphere for guests.",
//         property_location: "Malshej Ghat, Lonavala",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 5,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 5,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature X", "Feature Y", "Feature Z", "Feature W", "Feature V"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "6"
//             },
//             {
//                 type: "Property_Size",
//                 value: "6000 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Malshej Ghat, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Sunset Point"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410401"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]

//     },
// ];
