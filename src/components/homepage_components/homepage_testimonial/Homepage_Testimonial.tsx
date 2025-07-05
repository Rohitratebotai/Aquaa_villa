import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import { SiReactivex } from "react-icons/si";


// import img1 from '../../../assets/HomePage_banner1.jpg'
// import img2 from '../../../assets/HomePage_banner2.jpg'
// import img3 from '../../../assets/HomePage_banner3.jpg'
import Heading from '../../commonComponents/heading/Heading';

interface reviews {
    // icon: any,
    review: string,
    clientName: string,
    // thumbnail: string
}


const Homepage_Testimonial = () => {

    const data: reviews[] = [
        {
            review: "Aquaa Homes offers a peaceful and calm environment, perfect for those seeking a quiet retreat. Conveniently located near Jabo Majra Road, it’s an ideal spot for exploring the local area.",
            clientName: 'Shreya Ashtekar',
        },
        {
            review: "The villa is clean, comfortable, and well-maintained. The host was extremely helpful and ensured our stay was smooth and enjoyable. The location is great, close to local schools and shops.",
            clientName: 'Raja PSV',
        },
        {
            review: "A lovely stay with pleasant weather and a tranquil atmosphere. The staff and owner were cooperative and attentive, making the experience even better.",
            clientName: 'Dhara M',
        },
        {
            review: "Best value stay in the area with a friendly host who helped arrange everything we needed. Highly recommended for budget-conscious travelers seeking comfort.",
            clientName: 'Vaibhav Marathe',
        },
        {
            review: "The villa was cozy and charming, equipped with all essentials for a relaxing getaway. A perfect place to unwind and recharge. Highly recommended!",
            clientName: 'Nihal Thale',
        }
    ];


    return (
        <div className=''>
            <span className='text-center'>
                <Heading title='Hear What Our Happy Guests Are Saying' />
            </span>
            {/* <div className='capitalize flex justify-center  px-4 sm:px-6 lg:px-10 '>
                <p className='slide-title  border-b-2 border-primary text-center w-max py-2 text-2xl sm:text-3xl md:text-4xl text-primary'>
                    Hear What Our Happy Guests Are Saying
                </p>
            </div> */}
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-10 pb-10 ">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1} // Start with 1 slide for mobile
                    // pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.NextElement',
                        prevEl: '.PrevElement'
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        468: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                    className="w-full"
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[35vh] lg:h-[50vh] w-full border-2 bg-[#fafafa] border-[#949494] flex flex-col justify-center items-start gap-2 lg:gap-5 px-2 lg:px-5 rounded-sm lg:rounded-md">
                                {/* <span className='text-3xl lg:text-5xl'>{item.icon}</span> */}
                                <p className='text-sm text-gray-600 lg:text-lg'>{item.review}</p>
                                <div className='flex w-full justify-between items-center'>
                                    <p className='font-normal lg:font-semibold text-sm lg:text-base'>{item.clientName}</p>
                                    {/* <img className='w-8 h-8 lg:w-16 lg:h-16  rounded-full' src={item.thumbnail} alt="CLientImage" /> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='absolute top-1/2 left-0 right-0 z-20 flex justify-between items-center px-1 md:px-5 transform -translate-y-1/2'>
                    <div className='PrevElement flex text-xl md:text-2xl border justify-center items-center bg-white cursor-pointer h-10 w-10 md:h-14 md:w-14 rounded-full text-black'>
                        <GrFormPrevious />
                    </div>
                    <div className='NextElement flex text-xl md:text-2xl border justify-center items-center bg-white cursor-pointer h-10 w-10 md:h-14 md:w-14 rounded-full text-black'>
                        <MdOutlineNavigateNext />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage_Testimonial