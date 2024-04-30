import parse from 'html-react-parser';
import styles from './videoCard.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
import { useEffect } from 'react';

const VideoCard = ({ videoHeading, url, videoCardBackground, link, videoCardVerticalSpacing = "vertical_spacing_3" }) => {
    useEffect(() => {
        setTimeout(() => document.getElementById('videoId')?.click(), 2000)
    }, [])

    return (
        <div className='container_padding' style={{ background: videoCardBackground }}>
            <div className={classNames('section-spacing', `${videoCardVerticalSpacing}`.toLowerCase())} >
                <div className="row">
                    <div className={classNames("col-12", styles.margin_auto)}>
                        {
                            videoHeading && <div className={classNames("text-center")} dangerouslySetInnerHTML={{ __html: videoHeading }} />

                        }
                        <div className={classNames(styles.banner_video_center)}>
                            <div className={styles.banner_video} id="videoId">
                                {
                                    url.includes("<iframe") ? parse(url) :
                                        <video className={styles.banner_video} autoPlay={'autoplay'} muted loop controls playsInline poster="/video-svgrepo-com.svg" >
                                            <source src={url} type="video/mp4" />
                                            <source src={url} type="video/ogg" />
                                        </video>
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-center'>
                    {link?.label && <ClickToAction {...link} />}
                </div>
            </div>
        </div>
    )
}
export default VideoCard;