import BannerResources from "./BannerResources";
import GridHighlightResources from "./GridHighlightResources";
import GridResources from "./GridResources";
import PodcastGrid from "./PodcastGridResources";
import PodcastGridHighlightResources from "./PodcastGridHighlightResources";
import GridResourcesWithoutImage from "./GridResourcesWithoutImage";

const MAP_CARD_LIST_VARIATIONS = {
    grid: GridResources,
    grid_without_image: GridResourcesWithoutImage,
    grid_highlight: GridHighlightResources,
    banner: BannerResources,
    podcast_grid: PodcastGrid,
    podcast_grid_highlight: PodcastGridHighlightResources,
}

const ResourcesListing = (props) => {
    const layout = `${props.resourcesListingLayout}`.toLocaleLowerCase();
    const Component = MAP_CARD_LIST_VARIATIONS[layout] || GridResources
    return <Component {...props} />
}
export default ResourcesListing;