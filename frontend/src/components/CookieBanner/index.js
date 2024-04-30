import { getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import ClickToAction from '../CTA';
import styles from './cookieBanner.module.css';

const CookieBanner = ({ cookieData }) => {
    const [cookieModal, setCookieModal] = useState(false);

    useEffect(() => {
        const isCookiesAccepted = getCookie('isCookiesAccepted');
        if (!isCookiesAccepted) {
            setTimeout(() => {
                setCookieModal(true)
            }, 1000);
        }
    }, [])


    const acceptAllCookies = () => {
        cookieData?.cookies?.map(({ key, value }) => {
            setCookie(key, value);
        })
        setCookie('isCookiesAccepted', true);
        setCookieModal(false)
    }

    const handleClose = () => {
        setCookieModal(false)
        setCookie('isCookiesAccepted', true);

    }

    return (
        cookieModal && (
            <div className={styles.cookie_wrapper}>
                <div dangerouslySetInnerHTML={{
                    __html: cookieData.cookieDescription
                }} />
                <div className={styles.button_wrapper}>
                    <ClickToAction onClick={handleClose} {...cookieData.denyCookie} />
                    <ClickToAction onClick={acceptAllCookies} {...cookieData.acceptCookie} />

                </div>
                <button onClick={handleClose} className={styles.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill='black' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>

            </div>
        )
    )
}

export default CookieBanner