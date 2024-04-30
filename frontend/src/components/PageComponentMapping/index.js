import Banner from '../Banner';
import CompareView from '../CompareView';
import HomeTabs from '../HomeTabs';
import IntegrationShowcase from '../IntegrationShowcase';
import SecurityCompliances from '../SecurityCompliances';
import Testimonial from '../Testimonial';
import BookDemo from '../BookDemo';
import ResourcesListing from '../ResourcesListing';
import Subscribe from '../Subscribe';
import VideoCard from '../VideoCard';
import Seo from '../Seo';
import Article from '../Article';
import Roadmap from '../Roadmap';
import Paragraph from '../Paragraph';
import NextPreviousFeature from '../NextPreviousFeature';
import IntegrationsListing from '../IntegrationsListing';
import SecuritiesListing from '../SecuritiesListing';
import CardListing from '../CardListing';
import Cubcast from '../Cubcast';
import EmbeddedScript from '../EmbeddedScript';
import FAQs from '../FAQs';
import TableOfContentPanel from '../TableOfContentPanel';
import Pricing from '../Pricing';
import Iframe from '../Iframe';
import CTAComponent from '../CTAComponent';
import MeetTeam from '../MeetATeam';
import ContactForm from '../ContactForm';
import Share from '../Share';

const PageComponentMapping = ({ attributes }) => {
    const MAP_PAGE_COMPONENTS = {
        ComponentContainersBanners: Banner,
        ComponentContainersVideoCard: VideoCard,
        ComponentContainersCompareView: CompareView,
        ComponentContainersIntegrationsShowcase: IntegrationShowcase,
        ComponentHomeSecurityCompliances: SecurityCompliances,
        ComponentHomeTestimonials: Testimonial,
        ComponentContainersBookDemo: BookDemo,
        ComponentContainersResources: ResourcesListing,
        ComponentSharedSeo: Seo,
        ComponentContainersSubscribe: Subscribe,
        ComponentContainersTabsList: HomeTabs,
        ComponentContainersArticleList: Article,
        ComponentContainersRoadmap: Roadmap,
        ComponentContainersParagraph: Paragraph,
        ComponentContainersNextPreviousFeature: NextPreviousFeature,
        ComponentContainersIntegrationList: IntegrationsListing,
        ComponentContainersSecurityList: SecuritiesListing,
        ComponentContainersCardListing: CardListing,
        ComponentContainersCubcast: Cubcast,
        ComponentContainersEmbeddedScripts: EmbeddedScript,
        ComponentContainersFaQs: FAQs,
        ComponentContainersTableOfContentPanel: TableOfContentPanel,
        ComponentPricingPricingPlansList: Pricing,
        ComponentSharedIframe: Iframe,
        ComponentContainersCta: CTAComponent,
        ComponentContainersTeams: MeetTeam,
        ComponentContainersContactForm: ContactForm,
        ComponentContainersShare: Share
    }
    return (
        <>
            {
                attributes?.sections?.map((section, index) => {
                    const Component = MAP_PAGE_COMPONENTS[section?.__typename]
                    if (Component)
                        return (
                            <Component key={index} {...section} />
                        )
                })
            }
        </>
    )
}
export default PageComponentMapping;