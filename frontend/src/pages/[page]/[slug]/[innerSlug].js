import Layout from "@/components/Layout";
import PageNotFound from "@/components/PageNotFound";
import ResourcesArticle from "@/components/ResourcesArticle";
import client from "client/apollo-client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export { getStaticProps } from "../../../../client/api/page-inner-slug.ssr"
export { getStaticPaths } from "../../../../client/api/page-inner-slug.ssr"
const InnerPages = ({ dataSource, websiteDetails }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const MAP_INNER_PAGE_COMPONENTS = {
        blog: ResourcesArticle,
        webinar: ResourcesArticle,
        podcast: ResourcesArticle,
        best_practices: ResourcesArticle,

    }

    useEffect(() => {
        const query = `
            query innerPageSlugRedirection ($innerSlug: String) {
                resources(filters: { slug: { eq: $innerSlug }}) {
                    data {
                        attributes {
                            slug
                        }
                    }
                }
            }
                `
        client.query({
            query: gql`${query}`,
            variables: { innerSlug: router?.query?.innerSlug }
        }).then((result) => {
            setLoading(true)
        }).catch(err => {
            console.log(err);
            setLoading(false)
        })
    }, [])

    if (dataSource?.error || !dataSource?.data || !dataSource?.data?.length) {
        if (websiteDetails) {
            return (
                <Layout {...websiteDetails}>
                    {!loading ? <PageNotFound /> : <div className="resources_article_page_loader"></div>}
                </Layout>
            )
        } else {
            return <>{!loading ? <PageNotFound /> : <div className="resources_article_page_loader"></div>}</>
        }
    }

    const Component = MAP_INNER_PAGE_COMPONENTS[`${router?.query?.slug}`.toLocaleLowerCase()] || ResourcesArticle

    return (
        <Layout {...websiteDetails} seo={dataSource?.data[0]?.attributes?.seo}>
            <Component data={dataSource?.data?.length ? dataSource?.data[0] : {}} />
        </Layout>
    )
}

export default InnerPages;
