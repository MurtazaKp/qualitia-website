import PageComponentMapping from "@/components/PageComponentMapping";
import Layout from "@/components/Layout";
import PageNotFound from "@/components/PageNotFound";
export { getServerSideProps } from "../../../client/api/home.ssr"

const HomePreview = ({ homePageData, preview, websiteDetails }) => {
    if (homePageData?.error || !preview) {
        if (websiteDetails) {
            return (
                <Layout {...websiteDetails} preview={preview}>
                    <PageNotFound />
                </Layout>
            )
        } else {
            return <PageNotFound />
        }
    }
    return (
        <Layout {...websiteDetails} seo={homePageData?.attributes?.seo} preview={preview}>
            <PageComponentMapping {...homePageData} />
        </Layout>
    )
}
export default HomePreview;
