import { gql } from "@apollo/client";
import client from "../apollo-client";
import { ComponentContainersBanner, ComponentContainersCompareView, ComponentContainersResources, ComponentContainersTabsList, ComponentContainersVideoCard, ComponentContainersBookDemo, ComponentContainersIntegrationsShowcase, ComponentHomeSecurityCompliances, ComponentHomeTestimonials, SEO, ComponentContainersCardListing, ComponentContainersSecurityList, ComponentContainersArticleList, ComponentContainersRoadmap, ComponentContainersSubscribe, ComponentContainersIntegrationList, ComponentContainersParagraph, ComponentContainersNextPreviousFeature, ComponentContainersCubcast, ComponentContainersEmbeddedScripts, ComponentContainersTableOfContentPanel, ComponentContainersFaQs, ComponentContainersCta } from "./fragment.containers";
export async function getStaticProps() {

    const query = `
    query homeSSG {
            home {
                data {
                id
                    attributes {
                        ${SEO}
                        sections {
                        ... on ${ComponentContainersBanner}
                        ... on ${ComponentContainersVideoCard}
                        ... on ${ComponentContainersCompareView}
                        ... on ${ComponentContainersIntegrationsShowcase}
                        ... on ${ComponentHomeSecurityCompliances}
                        ... on ${ComponentHomeTestimonials}
                        ... on ${ComponentContainersBookDemo}
                        ... on ${ComponentContainersResources}
                        ... on ${ComponentContainersTabsList}
                        ... on ${ComponentContainersSecurityList}
                        ... on ${ComponentContainersCardListing}
                        ... on ${ComponentContainersArticleList}
                        ... on ${ComponentContainersRoadmap}
                        ... on ${ComponentContainersSubscribe}
                        ... on ${ComponentContainersIntegrationList}
                        ... on ${ComponentContainersParagraph}
                        ... on ${ComponentContainersNextPreviousFeature}
                        ... on ${ComponentContainersCubcast}
                        ... on ${ComponentContainersEmbeddedScripts}
                        ... on ${ComponentContainersFaQs}
                        ... on ${ComponentContainersTableOfContentPanel}
                        ... on ${ComponentContainersCta}
                        ... on ${ComponentContainersBookDemo}
                        }
                    }
                }
            }
    }
    `
    try {
        const { data } = await client.query({
            query: gql`${query}`,
        });
        return {
            props: {
                homePageData: data.home.data,
            },
        };
    } catch (err) {
        return {
            props: {
                homePageData: { error: JSON.stringify(err) },
            },
        };
    }
}

export async function getServerSideProps({ preview = false }) {
    const query = `
    query homeSSR {
            home(publicationState:PREVIEW) {
                data {
                id
                    attributes {
                        ${SEO}
                        sections {
                        ... on ${ComponentContainersBanner}
                        ... on ${ComponentContainersVideoCard}
                        ... on ${ComponentContainersCompareView}
                        ... on ${ComponentContainersIntegrationsShowcase}
                        ... on ${ComponentHomeSecurityCompliances}
                        ... on ${ComponentHomeTestimonials}
                        ... on ${ComponentContainersBookDemo}
                        ... on ${ComponentContainersResources}
                        ... on ${ComponentContainersTabsList}
                        ... on ${ComponentContainersSecurityList}
                        ... on ${ComponentContainersCardListing}
                        ... on ${ComponentContainersArticleList}
                        ... on ${ComponentContainersRoadmap}
                        ... on ${ComponentContainersSubscribe}
                        ... on ${ComponentContainersIntegrationList}
                        ... on ${ComponentContainersParagraph}
                        ... on ${ComponentContainersNextPreviousFeature}
                        ... on ${ComponentContainersCubcast}
                        ... on ${ComponentContainersEmbeddedScripts}
                        ... on ${ComponentContainersFaQs}
                        ... on ${ComponentContainersTableOfContentPanel}
                        ... on ${ComponentContainersCta}
                        ... on ${ComponentContainersBookDemo}
                        }
                    }
                }
            }
    }
    `
    try {
        const { data } = await client.query({
            query: gql`${query}`,
        });
        return {
            props: {
                homePageData: data.home.data,
                preview
            },
        };
    } catch (err) {
        return {
            props: {
                homePageData: { error: JSON.stringify(err) },
            },
        };
    }
}