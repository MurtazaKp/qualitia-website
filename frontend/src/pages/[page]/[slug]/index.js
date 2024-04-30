import PageComponentMapping from "@/components/PageComponentMapping";
import Layout from "@/components/Layout";
import classNames from "classnames";
import PageNotFound from "@/components/PageNotFound";
export { getStaticProps } from "../../../../client/api/page-slug.ssr"
export { getStaticPaths } from "../../../../client/api/page-slug.ssr"

const SubPages = ({ dataSource, websiteDetails }) => {
    if (dataSource?.error || !dataSource?.data?.length) {
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
        <Layout {...websiteDetails} seo={dataSource.data[0]?.attributes?.seo}>
            {
                dataSource.data[0]?.attributes.title &&
                <p className={classNames("text-center banner_sub_heading heading-5")}>
                    {dataSource.data[0]?.attributes.title}
                </p>
            }
            <PageComponentMapping {...dataSource.data[0]} />
        </Layout>
    )
}

export default SubPages;
