import PageComponentMapping from "@/components/PageComponentMapping";
import Layout from "@/components/Layout";
import classNames from "classnames";
import PageNotFound from "@/components/PageNotFound";
export { getServerSideProps } from "../../../../../client/api/page-slug.ssr"

const SubPages = ({ dataSource, preview, websiteDetails }) => {
    if (dataSource?.error || !dataSource?.data?.length || !preview) {
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
        <Layout {...websiteDetails} preview={preview} seo={dataSource.data[0]?.attributes?.seo}>
            {
                dataSource.data[0]?.attributes.title &&
                <h5 className={classNames("text-center uppercase_text banner_sub_heading")}>
                    {dataSource.data[0]?.attributes.title}
                </h5>
            }
            <PageComponentMapping {...dataSource.data[0]} />
        </Layout>
    )
}

export default SubPages;
