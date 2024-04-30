
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { ComponentContainersArticleList, ComponentContainersBanner, ComponentContainersBookDemo, ComponentContainersCardListing, ComponentContainersCompareView, ComponentContainersContactForm, ComponentContainersCta, ComponentContainersCubcast, ComponentContainersEmbeddedScripts, ComponentContainersFaQs, ComponentContainersIntegrationList, ComponentContainersIntegrationsShowcase, ComponentContainersNextPreviousFeature, ComponentContainersParagraph, ComponentContainersResources, ComponentContainersRoadmap, ComponentContainersSecurityList, ComponentContainersSubscribe, ComponentContainersTableOfContentPanel, ComponentContainersTabsList, ComponentContainersTeams, ComponentContainersVideoCard, ComponentPricingBanner, ComponentPricingPricingCard, ComponentPricingPricingPlansList, ComponentSharedIframe, SEO } from "./fragment.containers";
export async function getStaticProps({ params }) {
    const query = `
    query parentPagesSSG ($slug: String) {
                 parentPages (filters: { slug: { eq: $slug } }) {
                    data {
                        attributes {
                            ${SEO}
                            title
                            sections {
                            ... on ${ComponentContainersArticleList}
                            ... on ${ComponentContainersRoadmap}
                            ... on ${ComponentContainersVideoCard}
                            ... on ${ComponentContainersCompareView}
                            ... on ${ComponentContainersResources}
                            ... on ${ComponentContainersBanner}
                            ... on ${ComponentContainersTabsList}
                            ... on ${ComponentContainersSubscribe}
                            ... on ${ComponentContainersIntegrationList}
                            ... on ${ComponentContainersParagraph}
                            ... on ${ComponentContainersNextPreviousFeature}
                            ... on ${ComponentContainersIntegrationsShowcase}
                            ... on ${ComponentContainersSecurityList}
                            ... on ${ComponentContainersCardListing}
                            ... on ${ComponentContainersCubcast}
                            ... on ${ComponentContainersEmbeddedScripts}
                            ... on ${ComponentContainersFaQs}
                            ... on ${ComponentContainersTableOfContentPanel}
                           ... on ${ComponentPricingPricingPlansList}
                           ... on ${ComponentSharedIframe}
                           ... on ${ComponentContainersCta}
                           ... on ${ComponentContainersBookDemo}
                           ... on ${ComponentContainersTeams}
                           ... on ${ComponentContainersContactForm}
                            }
                        }
                    }
                }
            }       
    `
    try {
        const { data } = await client.query({
            query: gql`${query}`,
            variables: { slug: params?.page }

        });
        return {
            props: {
                dataSource: data.parentPages,
            },
        };
    } catch (err) {
        return {
            props: {
                dataSource: { error: JSON.stringify(err) },
            },
        };
    }
}

export async function getServerSideProps({ params, preview = false }) {
    const query = `
    query parentPagesSSR ($slug: String) {
                 parentPages (filters: { slug: { eq: $slug } }, publicationState:PREVIEW) {
                    data {
                        attributes {
                            ${SEO}
                            title
                            sections {
                            ... on ${ComponentContainersArticleList}
                            ... on ${ComponentContainersRoadmap}
                            ... on ${ComponentContainersVideoCard}
                            ... on ${ComponentContainersCompareView}
                            ... on ${ComponentContainersResources}
                            ... on ${ComponentContainersBanner}
                            ... on ${ComponentContainersTabsList}
                            ... on ${ComponentContainersSubscribe}
                            ... on ${ComponentContainersIntegrationList}
                            ... on ${ComponentContainersParagraph}
                            ... on ${ComponentContainersNextPreviousFeature}
                            ... on ${ComponentContainersIntegrationsShowcase}
                            ... on ${ComponentContainersSecurityList}
                            ... on ${ComponentContainersCardListing}
                            ... on ${ComponentContainersCubcast}
                            ... on ${ComponentContainersEmbeddedScripts}
                            ... on ${ComponentContainersFaQs}
                            ... on ${ComponentContainersTableOfContentPanel}
                           ... on ${ComponentPricingPricingPlansList}
                           ... on ${ComponentSharedIframe}
                           ... on ${ComponentContainersCta}
                           ... on ${ComponentContainersBookDemo}
                           ... on ${ComponentContainersTeams}
                           ... on ${ComponentContainersContactForm}
                            }
                        }
                    }
                }
            }     
    `
    try {
        const { data } = await client.query({
            query: gql`${query}`,
            variables: { slug: params?.page }

        });
        return {
            props: {
                dataSource: data.parentPages,
                preview
            },
        };
    } catch (err) {
        return {
            props: {
                dataSource: { error: JSON.stringify(err) },
                preview
            },
        };
    }
}
export async function getStaticPaths(context) {
    try {
        const { data } = await client.query({
            query: gql`
            query {
                parentPages(pagination: { limit: 1000 }) {
                    data {
                    attributes {
                        slug
                    }
                    }
                }
            }
          `,
        });

        const paths = [];
        data.parentPages.data.map((navItem) => {
            paths.push({ params: { page: navItem.attributes.slug } })
        })

        return {
            paths,
            fallback: false,
        }
    } catch (err) {
        return {
            paths: [],
            fallback: false,
        }
    }



}