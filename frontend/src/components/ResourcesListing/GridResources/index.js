import { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import styles from './gridResources.module.css';
import classNames from 'classnames';
import { groupBy } from '@/utils/groupBy';
import Link from '@/components/Link';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
import { getDisplayDate } from '@/utils/getDisplayDate';
import Image from 'next/image';
const GridResources = ({ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, isFilterTabs, isSearchBox, resourcesVerticalSpacing = "vertical_spacing_3", isPagination, resourcesListingLayout, resourcesListingSortBy = "default_adding" }) => {
    const grid = resources?.data?.length < 4 ? resources?.data?.length : 3;
    const [resourcesData, setResourcesData] = useState({});
    const [selectedTab, setSelectedTab] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [searchedResult, setSearchedResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(isPagination ? 9 : 1000);
    const isGridWithoutImage = resourcesListingLayout.toLocaleLowerCase() === 'grid_without_image';
    useEffect(() => {
        const data = [];
        if (`${resourcesListingSortBy}`.toLocaleLowerCase() === 'created_date') {
            resources.data.sort(function (a, b) {
                return new Date(b.attributes.createdDate) - new Date(a.attributes.createdDate);
            });
        }
        resources.data.map((resource) => {
            data.push(resource.attributes);
        })
        const filteredData = groupBy(data, 'tag');
        setResourcesData({ All: data, ...filteredData })
    }, [])

    const getFilterTabs = () => {
        let tabs = [];
        for (let key in resourcesData) {
            tabs.push(<span key={key}
                onClick={() => {
                    setSelectedTab(key);
                    setCurrentPage(1)
                }}
                className={classNames(styles.filter_tab, key === selectedTab ? styles.active : '')}>{key}</span>);
        }
        return tabs;
    }
    const onSearch = (searchText) => {
        setSearchText(searchText)
        const result = [];
        resourcesData[selectedTab].map((resourceItem) => {
            if (resourceItem?.title?.toLowerCase().includes(searchText)) {
                result.push(resourceItem);
            }
        })
        setSearchedResult(result);
    }
    const filteredResources = !searchText ? resourcesData[selectedTab] : searchedResult
    return (
        <div className={classNames("container_padding")} style={{ background: resourcesListingBackground }}>
            <section className={classNames('section-spacing', `${resourcesVerticalSpacing}`.toLowerCase())} >
                {(isSearchBox || isFilterTabs) && <div className={styles.filter_search_wrapper}>
                    {isFilterTabs && <div className={styles.resources_tabs}>
                        {getFilterTabs()}
                    </div>}
                    {isSearchBox && <div className={classNames(styles.search_box_position)}>

                        <div className={classNames(styles.search_box_position)}>
                            <input className={classNames("search_input", styles.search_box)} placeholder='Search' type="search" value={searchText} onChange={(e) => onSearch(e.target.value.toLowerCase())} />
                        </div>
                        <div className={classNames(styles.search_box_position_absolute)}>
                            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17L21 21" stroke="#6B768B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#6B768B" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>}
                </div>}
                {resourcesHeading &&
                    <h2 className={classNames("text-center heading-3", styles.insights_card_heading)}>
                        {resourcesHeading}
                    </h2>
                }
                <div className="row row-double-gutter row-extra-spacing double_gutter">
                    {
                        Boolean(filteredResources?.length) &&
                        filteredResources?.slice((currentPage - 1) * pageSize, currentPage * pageSize)?.map((resourceItem, index) => (
                            <div key={index} className={classNames(`col-${12 / grid}`, styles[`item_${grid}`], styles.resource_card, isGridWithoutImage ? styles.grid_without_image : '')} style={{ background: resourcesCardBackgroundColor }}>
                                <Link href={`resources/${getResourcesSlug(`${resourceItem.category}`)}/${resourceItem.slug}`} target={'self'} className={classNames(styles.title_link)}>
                                    {!isGridWithoutImage && resourceItem?.media?.media?.data?.attributes?.url && <Image className={styles.insights_card_img} src={resourceItem?.media?.media?.data?.attributes?.url} alt={resourceItem.media?.alt || resourceItem.slug} height={200} width={200} />}
                                    <div className={classNames(styles.resource_card_inner_item)}>
                                        <div>
                                            {
                                                resourceItem.tag &&
                                                <span className={classNames("small", styles.insights_card_highlight_text, styles.insights_card_margin)}>
                                                    {resourceItem.tag}
                                                </span>
                                            }
                                            <h2 className={classNames("paragraph_p2", styles.insights_card_paragraph)}>
                                                {resourceItem.title}
                                            </h2>
                                        </div>
                                        <span className={classNames("small", styles.insights_card_highlight_text)}>{resourceItem?.createdDate ? getDisplayDate(resourceItem?.createdDate) : ''}</span>
                                    </div>
                                </Link>
                            </div>

                        ))
                    }
                    {
                        filteredResources?.slice((currentPage - 1) * pageSize, currentPage * pageSize)?.length === 0 && isSearchBox &&
                        <div className={classNames(styles.no_result_found)}>
                            &quot;<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17L21 21" stroke="#9DA4B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#9DA4B1" strokeWidth="2" />
                            </svg>&nbsp;Result Not Found&quot;
                        </div>
                    }

                </div>
                {
                    Boolean(filteredResources?.length) && Boolean(isPagination && filteredResources?.slice((currentPage - 1) * pageSize, currentPage * pageSize)?.length) &&
                    <Pagination
                        className={classNames('text-center', styles.pagination)}
                        current={currentPage}
                        total={filteredResources?.length || 0}
                        pageSize={pageSize}
                        onChange={(page) => setCurrentPage(page)}
                    />
                }
            </section>
        </div>
    )
}
export default GridResources;