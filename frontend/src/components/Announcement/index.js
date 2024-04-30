import { useEffect, useState } from 'react';
import Slider from "react-slick";
import Link from '@/components/Link';
import styles from './announcement.module.css';
import classNames from 'classnames';
const Announcement = ({ announcement, appearanceTimeoutInSeconds, slideSpeedInSeconds, announcementVisibility }) => {
    const [isAnnoucement, setIsAnnoucement] = useState(announcementVisibility);

    useEffect(() => {
        if (appearanceTimeoutInSeconds) {
            const timeInstance = setTimeout(() => {
                setIsAnnoucement(false);
            }, appearanceTimeoutInSeconds * 1000);
            return () => clearTimeout(timeInstance);
        }
    }, [])
    if (!isAnnoucement) {
        return <></>
    }
    const settings = {
        infinite: true,
        speed: slideSpeedInSeconds * 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <Slider {...settings} >
                {
                    announcement.map(({ message, color, linkLabel, linkHref, linkTarget, layout }, index) => {
                        return (
                            <div key={index} className={classNames(styles.announcement_bar_wrapper)}>
                                <div className={classNames("paragraph", styles.announcement_bar)} style={{ background: color }}>
                                    {
                                        layout !== "Link_After" &&
                                        <>
                                            <Link href={linkHref} target={linkTarget}>{linkLabel}</Link>
                                            &nbsp;
                                        </>
                                    }
                                    {message}
                                    {
                                        layout === "Link_After" &&
                                        <>
                                            &nbsp;
                                            <Link href={linkHref} target={linkTarget}>{linkLabel}</Link>
                                        </>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>


    )
}
export default Announcement;