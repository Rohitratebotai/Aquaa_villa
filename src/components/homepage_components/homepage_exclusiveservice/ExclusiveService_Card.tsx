import img1 from '../../../assets/aquaa_images/image_14.jpg'
import img4 from '../../../assets/aquaa_images/image_19.jpg'
import img2 from '../../../assets/aquaa_images/image_5.jpg'
import img3 from '../../../assets/aquaa_images/image_34.jpg'

interface Room {
    title: string,
    thumbnail: string,
    description: string,
}

const ExclusiveService_Card = () => {
    //  Card Data 
    const data: Room[] = [
        {
            title: "Your Peaceful Escape",
            thumbnail: img1,
            description: "Retreat to a serene sanctuary where comfort and calm come together — the perfect getaway from the everyday."
        },
        {
            title: "Where Every Stay Feels Like Home",
            thumbnail: img2,
            description: "Thoughtfully designed to reflect warmth and personality, our space welcomes every story, style, and soul."
        },
        {
            title: "Brew. Unwind. Repeat.",
            thumbnail: img3,
            description: "Begin your mornings with a fresh brew in hand and peace in the air — because great days start with great coffee."
        },
        {
            title: "Celebrate Moments That Matter",
            thumbnail: img4,
            description: "From intimate gatherings to special milestones, create lasting memories in a setting made for joy and togetherness."
        },
    ];

    return (
        <section>
            <div className='h-full w-full'>
                {/* mapping Card  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 '>
                    {data?.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="group relative h-[50vh] md:h-[72vh] w-full mb-3  rounded-lg overflow-hidden"
                            >
                                <img
                                    className="object-cover h-4/6 w-full  rounded-lg "
                                    src={item.thumbnail}
                                    alt="BackgroundImage"
                                />
                                <div className="h-2/6 flex flex-col justify-start items-center gap-1 text-center px-5 py-4">
                                    <p className="text-base font-light lg:text-xl ">{item.description}</p>
                                </div>
                                <span className="cursor-pointer text-xl md:text-2xl font-bold absolute inset-0 flex justify-center items-center text-white  text-center group-hover:-top-20 transform duration-200 px-4 py-[6px]">
                                    {item.title}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExclusiveService_Card;
