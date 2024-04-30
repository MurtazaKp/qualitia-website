export const ComponentContainersArticleList = `
ComponentContainersArticleList {
    articleListVerticalSpacing: verticalSpacing
    articleHeading: heading
    trackingId
    articleBackgroundColor: backgroundColor
    articles {
    heading
    sectionHeading
    content
    layout
    media {
        data {
        attributes {
            url
        }
        }
    }
    }
}
`
export const ComponentContainersRoadmap = `
ComponentContainersRoadmap {
    roadmapVerticalSpacing: verticalSpacing
    roadmapHeading:heading
    subHeading
    trackingId
    roadmap {
    heading
    content
    }
}
`
export const ComponentContainersVideoCard = `
ComponentContainersVideoCard {
    videoCardVerticalSpacing: verticalSpacing
    videoHeading: heading
    trackingId
    videoCardBackground: backgroundColor
    url
    link {
        href
        target
        label
        icon
        layout
        size
    }
}
`
export const ComponentContainersCompareView = `
ComponentContainersCompareView {
    compareViewVerticalSpacing: verticalSpacing
    compareViewHeading: heading
    compareViewBackground: backgroundColor
    trackingId
    compares {
    heading
    content
    href
    target
    linkText
    backgroundColor
    image {
        data {
        attributes {
            url
        }
        }
    }
    }
}
`
export const ComponentContainersResources = `
ComponentContainersResources {
    resourcesVerticalSpacing: verticalSpacing
    resourcesHeading: heading
    resourcesListingLayout:layout
    resourcesListingSortBy:sortBy
    trackingId
    resourcesListingBackground: backgroundColor
    resourcesCardBackgroundColor: cardBackgroundColor
    resourcesCardHoverColor: cardHoverColor
    isFilterTabs
    isSearchBox
    isPagination
    resources(pagination: { limit: 1000 }) {
    data {
        attributes {
        title
        tag
        slug
        category
        createdDate
        description
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
        }
    }
    }
}
`
export const ComponentContainersBanner = `
ComponentContainersBanners {
bannerVerticalSpacing: verticalSpacing
trackingId
bannerHeading:heading
bannerBackground: backgroundColor
banners {
    title
    layout
    description
    descriptionTextColor
    imageAlt
    image {
    data {
        attributes {
        url
        }
    }
    }
    mobImage {
    data {
        attributes {
        url
        }
    }
    }
    link {
        href
        target
        label
        icon
        layout
        size
    }

}
}
`
export const ComponentContainersTabsList = `
ComponentContainersTabsList {
    tabsListVerticalSpacing: verticalSpacing
    trackingId
    tabHeading: heading
    homeTabsBackground: backgroundColor
    homeTabsTextColor: textColor
    tabs {
    title
    image {
        data {
        attributes {
            url
        }
        }
    }
    alt
    description
    icon
    link {
    label
    target
    icon
    href
    layout 
    size
    }
    }
}
`
export const ComponentContainersSubscribe = `
ComponentContainersSubscribe {
    subscribeVerticalSpacing: verticalSpacing
    trackingId
    buttonName
    placeholder
    subscribeHeading: heading
    subscribeBackground: backgroundColor
    showResourcesDetails
    subscribeLayout: layout
    subscribeSuccessMessage
}
`

export const ComponentContainersIntegrationsShowcase = `
ComponentContainersIntegrationsShowcase {
integrationsShowcaseVerticalSpacing: verticalSpacing
integrationShowcaseHeading: heading
integrationShowcaseSubHeading: subHeading
integrationShowcaseBackgroundColor: backgroundColor
primary {
    alt
    media {
    data {
        attributes {
        url
        }
    }
    }
}
link {
        href
        target
        label
        icon
        layout
        size
    }
integrations {
    data {
    attributes {
        slug
        title
        description
        backgroundColor
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
        link {
        href
        label
        target
        }
    }
    }
}
}
`
export const ComponentHomeSecurityCompliances = `
ComponentHomeSecurityCompliances {
securityCompliancesVerticalSpacing: verticalSpacing
securityCompliancesHeading: heading
securityCompliancesSubHeading: subHeading
securityCompliancesBackground: backgroundColor
media {
    media {
    data {
        attributes {
        url
        }
    }
    }
    alt
}
securityCompliancesLink: link {
        href
        target
        label
        icon
        layout
        size
    }
}
`

export const ComponentHomeTestimonials = `
ComponentHomeTestimonials {
testimonialsVerticalSpacing: verticalSpacing
testimonialHeading: heading
testimonialBackground: backgroundColor
testimonials(pagination: { limit: 1000 }) {
    data {
    attributes {
        content
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
    }
    }
}
}
`

export const ComponentContainersBookDemo = `
ComponentContainersBookDemo {
bookDemoVerticalSpacing: verticalSpacing
bookDemoTitle: title
bookDemoBackground: backgroundColor
link {
        href
        target
        label
        icon
        layout
        size
    }
}
`

export const SEO = `
seo {
    metaTitle
    metaDescription
    metaImage {
    data {
        attributes {
        url
        }
    }
    }
    metaSocial {
    socialNetwork
    title
    description
    image {
        data {
        attributes {
            url
        }
        }
    }
    }
    keywords
    metaRobots
    structuredData
    metaViewport
    canonicalURL
    preventIndexing
}
`

export const ComponentContainersIntegrationList = `
ComponentContainersIntegrationList {
integrationListVerticalSpacing: verticalSpacing
integrationsListBackground:backgroundColor
integrationCardBackgroundColor: cardBackgroundColor
integrationHeading:heading
integrations {
    data {
    attributes {
        slug
        title
        name
        description
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
        link {
        href
        label
        target
        layout
        size
        }
    }
    }
}
}
`
export const ComponentContainersParagraph = `
 ComponentContainersParagraph {
   paragraphVerticalSpacing: verticalSpacing
   paragraph
   paragraphBackground: backgroundColor
 }
`

export const ComponentContainersNextPreviousFeature = `
ComponentContainersNextPreviousFeature {
    nextPreviousFeatureVerticalSpacing: verticalSpacing
    next {
        href
        label
        target
    }
    previous {
        href
        label
        target
    }
    label
}
`

export const ComponentContainersSecurityList = `
ComponentContainersSecurityList {
securityListVerticalSpacing: verticalSpacing
securitiesHeading: heading
trackingId
securitiesBackgroundColor: backgroundColor
securitiesCardBackgroundColor: securityCardColor

securities {
    data {
    attributes {
        title
        slug
        description
        content

        link {
        href
        label
        target
        }
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
}
`

export const ComponentContainersCardListing = `
ComponentContainersCardListing {
cardListingVerticalSpacing: verticalSpacing
cardHeading: heading
cardListBackgroundColor: backgroundColor
cardBackgroundColor
link {
        href
        target
        label
        icon
        layout
        size
    }
cards {
    title
    description
    image {
    data {
        attributes {
        url
        }
    }
    }
    description
}
}
`
export const ComponentContainersCubcast = `
ComponentContainersCubcast {
    cubcastVerticalSpacing: verticalSpacing
    trackingId
    cubcastTitle: title 
    cubcastDescription: description
    cubcastBackgroundColor: backgroundColor
    socialApps {
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
    members {
        alt
        media {
        data {
            attributes {
            url
            }
        }
        }
    }
}
`

export const ComponentContainersEmbeddedScripts = `
ComponentContainersEmbeddedScripts {
    # title
    script
}
`

export const ComponentContainersFaQs = `
ComponentContainersFaQs {
    faqsVerticalSpacing: verticalSpacing
    fagsHeading: heading
    trackingId
    description
    faqsBackgroundColor:backgroundColor
    faqs {
        question
        answer
    }
}
`
export const ComponentSharedSuggestedToolsList = `
ComponentSharedSuggestedToolsList {
    heading
    toolsList {
        heading
        trackingId
        backgroundColor
        tools {
        name
        image {
            data {
            attributes {
                url
            }
            }
        }
        imageAlt
        }
    }
}
`

export const ComponentContainersTableOfContentPanel = `
ComponentContainersTableOfContentPanel {
    tableOfContentPanelVerticalSpacing: verticalSpacing
    tableOfContents {
        title
        content
        trackingId
        target
        href
        canonicalURL
    }
}
`
export const ComponentPricingBanner = `
ComponentPricingBanner {
    title
    description
    annualButtonLabel
    annualButtonTrackingId
    monthButtonLabel
    monthButtonTrackingId
}
`
export const ComponentPricingPricingCard = `
ComponentPricingPricingCard {
    name
    description
    annualActualPrice
    annualSalePrice
    monthActualPrice
    monthSalePrice
    image {
        data {
        attributes {
            url
        }
        }
    }
    imageAlt
}
`
export const ComponentPricingPricingPlansList = `
ComponentPricingPricingPlansList {
    showPricingTable
    pricingCardVariation: layout
     pricingBanner {
              title
              description
              annualButtonLabel
              annualButtonTrackingId
              monthButtonLabel
              monthButtonTrackingId
            }
    pricing_plans {
        data {
        attributes {
            name
            description
            pricingCardBackground: backgroundColor
            trackingId
            annualActualPrice
            annualSalePrice
            monthActualPrice
            monthSalePrice
            priceTextMonthly
            priceTextAnnually
            priceTooltip
            link {
            label
            href
            target
            icon
            layout
            size
            }
            features {
            title
            description
            value
            bulletStyle
            }
            tableFeatures {
            heading
            tagName
            tableFeaturesList {
                title
                description
                value
                tagName
                bulletStyle
            }
            }
        }
        }
    }
}
`

export const ComponentContainersCta = `
ComponentContainersCta {
            ctaVerticalSpacing: verticalSpacing
            cta {
              label
              href
              target
              icon
              layout
              size
            }
          }
`
export const ComponentSharedIframe = `
ComponentSharedIframe {
    iframeSrc
    layout
}
`
export const ComponentContainersTeams = `
ComponentContainersTeams {
meetTeamHeading: heading
meetTeamVerticalSpacing: verticalSpacing
meetTeamBackground: backgroundColor
teams(pagination: { limit: 1000 }) {
    data {
    attributes {
        name
        designation
        image {
        data {
            attributes {
            url
            }
        }
        }
        description
        socialLinks {
        imageAlt
        href
        target
        image {
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
}
`
export const ComponentContainersContactForm = `
ComponentContainersContactForm {
    contactFormHeading: heading
    contactFormScript: script
    contactFormBackgroundColor: backgroundColor
    contactFormTrackingId: trackingId
    contactFormVerticalSpacing: verticalSpacing
}
`


export const resourcesDetails = `
  resources(pagination: { limit: 1000 }) {
    data {
      attributes {
        category
      }
    }
  }
`;