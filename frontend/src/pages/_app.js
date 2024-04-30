import App from 'next/app';
// import { hotjar } from 'react-hotjar'
import { getWebsiteDetails } from 'client/api/global';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../assets/geexu-css/geexu.css'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
    const gtmId = "GTM-NBBRJ5X";
    const tagManagerArgs = {
        gtmId
    }
    useEffect(() => {
        TagManager.initialize(tagManagerArgs);
        // hotjar.initialize(process.env.NEXT_PUBLIC_HJID || 3409267, process.env.NEXT_PUBLIC_HJSV || 6)
    }, [])
    return <Component {...pageProps} />
}
MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    try {
        const res = await getWebsiteDetails();
        return { ...appProps, pageProps: { websiteDetails: res } };
    } catch (error) {
        return { ...appProps };
    }
};