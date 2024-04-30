import classNames from 'classnames';
import CookieBanner from '../CookieBanner';
import EmbeddedScript from '../EmbeddedScript';
import Footer from '../Footer';
import Header from '../Header';
import Seo from '../Seo';
const Layout = ({ children, header, footer, global, preview, seo }) => {
    return (
        <>
            <EmbeddedScript headerScripts={global?.data?.attributes?.headerScripts} bodyScripts={global?.data?.attributes?.bodyScripts} />
            <Seo seo={seo} />
            <Header header={header} global={global} preview={preview} />
            <section className={classNames("container", "container_top_space")}>
                {
                    children
                }
            </section>
            <Footer footer={footer} global={global} />
            {global?.data?.attributes?.cookieBanner && <CookieBanner cookieData={global?.data?.attributes?.cookieBanner} />}
        </>
    )
}
export default Layout;