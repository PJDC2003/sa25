import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Carousel settings
const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 1 },
        },
    ],
};

const CarouselSponsors = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const loadSponsors = async () => {
            const response = await fetch('/data/data_json/companies.json');
            const data = await response.json();

            const selectedSponsors = data.filter((sponsor) => sponsor.class === 'gold' || sponsor.class === 'premium');

            const formattedSponsors = selectedSponsors.map((sponsor) => ({
                ...sponsor,
                src: sponsor.url_img,
                alt: sponsor.name,
            }));

            setSponsors(formattedSponsors);
        };

        loadSponsors();
    }, []);

    return (
        <section className="py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">Main Sponsors</h2>
                <Slider {...settings}>
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.slug} className="flex items-center justify-center p-4">
                            <img src={sponsor.src} alt={sponsor.alt} className="max-w-xs h-auto" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CarouselSponsors;
