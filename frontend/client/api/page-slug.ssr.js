
import { pagePluralForms } from "@/constants";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { ComponentContainersArticleList, ComponentContainersBanner, ComponentContainersBookDemo, ComponentContainersCardListing, ComponentContainersCompareView, ComponentContainersContactForm, ComponentContainersCta, ComponentContainersCubcast, ComponentContainersEmbeddedScripts, ComponentContainersFaQs, ComponentContainersIntegrationList, ComponentContainersIntegrationsShowcase, ComponentContainersNextPreviousFeature, ComponentContainersParagraph, ComponentContainersResources, ComponentContainersRoadmap, ComponentContainersSecurityList, ComponentContainersSubscribe, ComponentContainersTableOfContentPanel, ComponentContainersTabsList, ComponentContainersTeams, ComponentContainersVideoCard, SEO } from "./fragment.containers";
export async function getStaticProps({ params }) {
    const query = `
    query pageSlugSSG ($slug: String) {
                 ${pagePluralForms[params.page]} (filters: { slug: { eq: $slug } }) {
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
            variables: { slug: params?.slug }

        });
        return {
            props: {
                dataSource: data[pagePluralForms[params.page]],
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
    query pageSlugSSR ($slug: String) {
                 ${pagePluralForms[params.page]} (filters: { slug: { eq: $slug } }, publicationState:PREVIEW) {
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
            variables: { slug: params?.slug }

        });
        return {
            props: {
                dataSource: data[pagePluralForms[params.page]],
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
                products(pagination:{limit:100}) {
                    data {
                    attributes {
                        slug
                    }
                    }
                }
                securities(pagination:{limit:100}) {
                    data {
                    attributes {
                        slug
                    }
                    }
                }
                    solutions(pagination:{limit:100}) {
                        data {
                        attributes {
                            slug
                        }
                        }
                    }
                 resoucePages(pagination:{limit:100}) {
                    data {
                    attributes {
                        slug
                    }
                    }
                }
                integrations(pagination:{limit:100}) {
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
        data.products.data.map((navItem) => {
            paths.push({ params: { slug: navItem.attributes.slug, page: "product" } })
        })
        data.securities.data.map((navItem) => {
            paths.push({ params: { slug: navItem.attributes.slug, page: "security" } })
        })
        data.solutions.data.map((navItem) => {
            paths.push({ params: { slug: navItem.attributes.slug, page: "solution" } })
        })
        data.resoucePages.data.map((navItem) => {
            paths.push({ params: { slug: navItem.attributes.slug, page: "resources" } })
        })
        data.integrations.data.map((navItem) => {
            paths.push({ params: { slug: navItem.attributes.slug, page: "integration" } })
        })
        return {
            paths: paths,
            fallback: true,
        }
    } catch (err) {
        return {
            paths: [],
            fallback: true,
        }
    }



}