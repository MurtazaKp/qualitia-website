import Layout from "@/components/Layout";
import PageNotFound from "@/components/PageNotFound";
import ResourcesArticle from "@/components/ResourcesArticle";
import { useRouter } from "next/router";
export { getServerSideProps } from "../../../../../client/api/page-inner-slug.ssr"
const InnerPages = ({ dataSource, websiteDetails, preview }) => {
    const router = useRouter();
    const MAP_INNER_PAGE_COMPONENTS = {
        blog: ResourcesArticle,
        webinar: ResourcesArticle,
        podcast: ResourcesArticle,
        best_practices: ResourcesArticle,

    }
    if (dataSource?.error || !dataSource?.data || !preview) {
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

    const Component = MAP_INNER_PAGE_COMPONENTS[`${router?.query?.slug}`.toLocaleLowerCase()] || ResourcesArticle

    return (
        <Layout {...websiteDetails} preview={preview} seo={dataSource?.data?.length ? dataSource.data[0]?.attributes?.seo : {}}>
            <Component data={dataSource?.data?.length ? dataSource?.data[0] : {}} />
        </Layout>
    )
}

export default InnerPages;
