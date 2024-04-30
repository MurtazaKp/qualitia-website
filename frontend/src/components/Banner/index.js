import { useRouter } from 'next/router';
import ImageLeft from './imageLeft';
import WithoutImage from './withoutImage';
import ImageBottom from './imageBottom';
import ImageRight from './imageRight';
import Slider from 'react-slick';
import classNames from 'classnames';
import ImageBackgroundTextLeft from './imageBackgroundTextLeft';
import ImageBackgroundTextRight from './imageBackgroundTextRight';
import ImageBackgroundTextCentre from './ImageBackgroundTextCentre';
import { useEffect, useState } from 'react';
const MAP_BANNER_VARIATIONS = {
    without_image: WithoutImage,
    image_left: ImageLeft,
    image_right: ImageRight,
    image_below: ImageBottom,
    image_background_text_left: ImageBackgroundTextLeft,
    image_background_text_right: ImageBackgroundTextRight,
    image_background_text_centre: ImageBackgroundTextCentre
}
const Banner = ({ bannerBackground, banners, bannerHeading, bannerVerticalSpacing = "vertical_spacing_3" }) => {
    const [screenWidth, setScreenWidth] = useState(0);

    const settingsSlides = {
        autoplay: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplaySpeed: 5000,
    }
    const router = useRouter();

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        function callback() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, [])

    return (
        <section style={{ background: bannerBackground }} className={classNames(`${bannerVerticalSpacing}`?.toLowerCase())}>
            {
                bannerHeading && <div className={"main_heading"}>
                    <h1 className='text-center'>{bannerHeading}</h1>
                </div>
            }
            <Slider {...settingsSlides} className={"overflow-hidden"}>
                {
                    banners?.map((banner, index) => {
                        const Component = MAP_BANNER_VARIATIONS[`${banner.layout}`.toLowerCase()] ?? WithoutImage

                        return (
                            <Component {...banner} key={index} screenWidth={screenWidth} />
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default Banner;

