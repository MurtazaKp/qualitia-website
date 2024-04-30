
import { pagePluralForms } from "@/constants";
import { getResourcesSlug } from "@/utils/getResourcesSlug";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { ComponentSharedSuggestedToolsList, SEO } from "./fragment.containers";
export async function getStaticProps({ params }) {
    const query = `
    query innerPageSlugSSG ($innerSlug: String) {
        resources(filters: { slug: { eq: $innerSlug }}) {
            data {
            attributes {
                ${SEO}
                slug
                writerName
                title
                category
                createdDate
                description
                content
                shareTo
                media {
                alt
                media {
                    data {
                    attributes {
                        url
                    }
                    }
                }
                }
                socialLinks {
                href
                label
                target
                }
                category
                tag
                bestPracticesDetails {
                    duration
                    complexity
                    participants
                }
                sections {
                    ... on ${ComponentSharedSuggestedToolsList}
                }
            }
            }
        }
    }

                
    `
    try {
        const { data } = await client.query({
            query: gql`${query}`,
            variables: { innerSlug: params?.innerSlug }

        });
        const slug = data?.resources?.data[0]?.attributes?.slug;
        const category = `${data?.resources?.data[0]?.attributes?.category}`.toLowerCase();
        if (slug && category && pagePluralForms[category] !== params?.slug) {
            return {
                redirect: {
                    destination: `/resources/${getResourcesSlug(category)}/${slug}`,
                    permanent: true,
                },
            }
        } else {
            return {
                props: {
                    dataSource: data?.resources,
                },
            };
        }

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
    query innerPageSlugSSR ($innerSlug: String) {
        resources(filters: { slug: { eq: $innerSlug }}, publicationState:PREVIEW) {
            data {
            attributes {
                ${SEO}
                slug
                writerName
                title
                category
                createdDate
                description
                content
                shareTo
                media {
                alt
                media {
                    data {
                    attributes {
                        url
                    }
                    }
                }
                }
                socialLinks {
                href
                label
                target
                }
                category
                tag
                bestPracticesDetails {
                    duration
                    complexity
                    participants
                }
                sections {
                    ... on ${ComponentSharedSuggestedToolsList}
                }
            }
            }
        }
    }

                
    `
    try {
        const { data } = await client.query({
            query: gql`${query}`,
            variables: { innerSlug: params?.innerSlug }

        });
        return {
            props: {
                dataSource: data?.resources,
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
export async function getStaticPaths() {
    try {
        const { data } = await client.query({
            query: gql`
            query {
                    resources(pagination:{limit:1000}) {
                        data {
                        attributes {
                            slug
                            category
                        }
                        }
                    }
                
            }
          `,
        });
        const paths = [];
        data.resources.data.map((navItem) => {
            paths.push({ params: { innerSlug: `${navItem.attributes.slug}`, slug: pagePluralForms[`${navItem.attributes.category}`.toLowerCase()] || `${navItem.attributes.category}`, page: "resources" } })
        })
        return {
            paths: paths,
            fallback: true,
        }
    } catch (err) {
        return {
            paths: [],
            fallback: false,
        }
    }
}