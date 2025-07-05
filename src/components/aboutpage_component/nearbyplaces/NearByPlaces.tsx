import img1 from '../../../assets/about_images/PAU.png'
import img2 from '../../../assets/about_images/leisure_park.avif'
import img3 from '../../../assets/about_images/sarangpur.jpg'
import img4 from '../../../assets/about_images/gurudwara_fatehgarh.jfif'

interface Room {
    title: string,
    thumbnail: string,
}

const NearByPlaces = () => {
    const data: Room[] = [
        {
            title: "Sarangpur Gurudwara",
            thumbnail: img3,
        },
        {
            title: "Gurdwara Fatehgarh Sahib",
            thumbnail: img4,
        },
        {
            title: "Punjab Agricultural University (PAU)",
            thumbnail: img1,
        },
        {
            title: "Leisure Valley Park, Ludhiana",
            thumbnail: img2,
        }
    ];

    return (
        <section className='py-10 md:py-20'>
            <div className='h-full w-full py-10'>
                <div className='capitalize flex justify-center pb-16 px-4 sm:px-6 lg:px-10'>
                    <p className='slide-title border-b-2 border-primary text-center w-max py-2 text-2xl sm:text-3xl md:text-4xl text-primary'>
                        Nearby Places
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-9'>
                    {data.map((item) => (
                        <div key={item.title} className='relative h-[50vh] md:h-[60vh] w-full mb-3 border border-gray-300 rounded-lg overflow-hidden'>
                            <img className='object-cover h-4/5 w-full' src={item.thumbnail} alt={item.title} />
                            <div className='h-1/5 flex flex-col justify-center gap-4 items-start text-start px-5 py-4'>
                                <p className='text-xl capitalize lg:text-2xl font-medium'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearByPlaces;
