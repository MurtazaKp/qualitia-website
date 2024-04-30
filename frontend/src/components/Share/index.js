import { useEffect, useState } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, WhatsappIcon, LineShareButton, OKShareCount } from 'react-share';
import styles from './share.module.css';
const Share = ({
    shareTo = ['linkedIn', 'twitter', 'facebook', 'link']
}) => {
    const [url, setUrl] = useState('')
    useEffect(() => {
        setUrl(window?.location?.href);
    }, [])
    const MAP_SHARES = {
        linkedIn: (<LineShareButton
            url={url}
        >
            <img src="https://cubyts-website-assets.s3.amazonaws.com/Blog_Linkedin_109eaf86a2.svg" alt='linkedin-icon' style={{ width: 35, height: 35 }} />
        </LineShareButton>),
        twitter: (<TwitterShareButton
            url={url}
        >
            <img src="https://cubyts-website-assets.s3.amazonaws.com/Blog_Twitter_64e6275bc3.svg" alt='twitter-icon' style={{ width: 35, height: 35 }} />

        </TwitterShareButton>),
        facebook: (<FacebookShareButton
            url={url}
        >
            <img src="https://cubyts-website-assets.s3.amazonaws.com/Blog_Facebook_48ac8efa69.svg" alt='linkedin-icon' style={{ width: 35, height: 35 }} />
        </FacebookShareButton>),
        whatsapp: (<WhatsappShareButton
            url={url}
        >
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>),
        copyLink: (<div className={styles.copy_link} onClick={() => navigator.clipboard.writeText(window.location.href)}>
            <img src="https://cubyts-website-assets.s3.amazonaws.com/Blog_Link_c6815be382.svg" alt='copy-link-icon' style={{ width: 35, height: 35 }} />
        </div>)
    }
    return (
        <div className={styles.share_wrapper}>
            {
                shareTo?.map((shareItem) => {
                    return (
                        <div key={shareItem}>
                            {MAP_SHARES[shareItem]}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Share;