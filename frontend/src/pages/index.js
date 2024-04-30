import PageComponentMapping from "@/components/PageComponentMapping";
import Layout from "@/components/Layout";
import PageNotFound from "@/components/PageNotFound";
export { getStaticProps } from "../../client/api/home.ssr"

const Home = ({ homePageData, websiteDetails }) => {
    if (homePageData?.error) {
        if (websiteDetails) {
            return (
                <Layout {...websiteDetails}>
                    <PageNotFound />
                </Layout>
            )
        } else {
            return <PageNotFound />
        }
    }
    return (
        <Layout {...websiteDetails} seo={homePageData?.attributes?.seo}>
            <PageComponentMapping {...homePageData} />
        </Layout>
    )
}
export default Home;
