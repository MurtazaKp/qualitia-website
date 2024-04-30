import PageComponentMapping from "@/components/PageComponentMapping";
import Layout from "@/components/Layout";
import classNames from "classnames";
import PageNotFound from "@/components/PageNotFound";
import { useEffect, useState } from "react";
export { getStaticProps } from "../../../client/api/page.ssr"
export { getStaticPaths } from "../../../client/api/page.ssr"

const SubPages = ({ dataSource, websiteDetails }) => {
    const [isLayout, setIsLayout] = useState(true);
    useEffect(() => {
        if (dataSource?.data?.length) {
            dataSource.data[0].attributes?.sections?.map((section) => {
                if (section?.__typename === 'ComponentSharedIframe' && `${section?.layout}`.toLowerCase() === 'without_header_footer' && section?.iframeSrc) {
                    setIsLayout(false);
                }
            })
        }
    }, [])
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
        isLayout ?
            <Layout {...websiteDetails} seo={dataSource.data[0]?.attributes?.seo}>
                {
                    dataSource.data[0]?.attributes.title &&
                    <p className={classNames("text-center banner_sub_heading heading-5")}>
                        {dataSource.data[0]?.attributes.title}
                    </p>
                }
                <PageComponentMapping {...dataSource.data[0]} />
            </Layout> :
            <PageComponentMapping {...dataSource.data[0]} />
    )
}

export default SubPages;
