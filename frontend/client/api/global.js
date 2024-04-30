import { gql } from "@apollo/client";
import client from "../apollo-client";
export async function getWebsiteDetails() {
    try {
        const { data } = await client.query({
            query: gql`
            query {
                header {
                    data {
                    attributes {
                        signUpButton {
                        href
                        label
                        target
                        icon
                        layout
                        size
                        }
                        signInButton {
                        href
                        label
                        target
                        icon
                        layout
                        size
                        }
                        menuAction
                        navigations {
                        data {
                            attributes {
                            menuResources {
                                resources {
                                data {
                                    attributes {
                                    title
                                    slug
                                    category
                                    media {
                                        media {
                                        data {
                                            attributes {
                                            url
                                            }
                                        }
                                        }
                                    }
                                    }
                                }
                                }
                                link {
                                label
                                href
                                target
                                icon
                                layout
                                size
                                }
                                heading
                            }
                            label
                            href
                            target
                            subMenu {
                                label
                                columnLayout
                                links(pagination: { limit: 100 }) {
                                href
                                label
                                target
                                description
                                icon
                                }
                            }
                            }
                        }
                        }
                        announcement {
                        message
                        color
                        linkLabel
                        linkHref
                        linkTarget
                        layout
                        }
                        appearanceTimeoutInSeconds
                        slideSpeedInSeconds
                        announcementVisibility
                    }
                    }
                }
                footer {
                    data {
                    attributes {
                        footerMenus {
                        label
                        columnLayout
                        links(pagination: { limit: 100 }) {
                            href
                            label
                            target
                        }
                        }
                    }
                    }
                }
                global {
                    data {
                    attributes {
                        cookieBanner {
                        cookieDescription
                        denyCookie {
                            label
                            href
                            target
                            icon
                            layout
                            size
                        }
                        acceptCookie {
                            label
                            href
                            target
                            icon
                            layout
                            size
                        }
                        cookies {
                            key
                            value
                        }
                        }
                        companyName
                        copyRight
                        addresses {
                        country
                        details
                        }
                        logo {
                        data {
                            attributes {
                            url
                            }
                        }
                        }
                        favicon {
                        data {
                            attributes {
                            url
                            }
                        }
                        }
                        defaultSeo {
                        metaTitle
                        metaDescription
                        metaImage {
                            data {
                            attributes {
                                url
                            }
                            }
                        }
                        }
                        headerScripts {
                        title
                        script
                        }
                        bodyScripts {
                        title
                        script
                        }
                        socialLinks {
                        image {
                            data {
                            attributes {
                                url
                            }
                            }
                        }
                        imageAlt
                        href
                        target
                        }
                    }
                    }
                }
            }
          `,
        });
        return data

    } catch (err) {
        return {
            props: {
                homePageData: { error: JSON.stringify(err) },
            },
        };
    }
}
