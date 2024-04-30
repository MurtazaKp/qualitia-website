import Link from '@/components/Link';
import classNames from 'classnames';
import styles from './megaMenu.module.css';
import ClickToAction from '@/components/CTA';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
const MegaMenu = ({
    megaMenu,
    handleMegamenuClose,
    handleMegamenuOpen,
    menuAction,
    menuLabel
}) => {
    return (
        <>
            <div className={classNames(styles.nav_padding,
                styles.custom_nav, 'scrollbar')}
                onMouseLeave={() => menuAction !== "click" && handleMegamenuClose()}
                onMouseEnter={() => menuAction !== "click" && handleMegamenuOpen(megaMenu)}>
                <div className={classNames('', styles[`megamenu_row_${megaMenu?.attributes?.subMenu?.length}`], styles.megamenu_col_span_2)}>
                    {
                        megaMenu?.attributes?.subMenu?.map((menuItem, index) => {
                            return (
                                <div key={index} className={classNames(menuItem.columnLayout === 'col_2' ? styles.megamenu_col_2 : styles.megamenu_col , menuItem?.label ? styles.padding_bottom: '')}>
                                    {menuLabel !== menuItem?.label &&  menuItem?.label && <h6 className={classNames(styles.nav_title)}>
                                        {menuItem?.label}
                                    </h6>
                                    }
                                    <ul className={menuItem.columnLayout === 'col_2' ? classNames(styles.megamenu_flex) : ''}>
                                        {menuItem?.links?.map((linkItem, index) => {
                                            return (
                                                <li key={index} className={styles.list_unstyled}>
                                                    <Link href={linkItem?.href} target={linkItem?.target} onClick={handleMegamenuClose} >
                                                        <div className={styles.nav_item}>
                                                            <div className={styles.nav_icon}>
                                                                <span className={classNames(styles.icon_color, linkItem?.icon)}></span>
                                                            </div>
                                                            <div>
                                                                <div className={styles.badge_flex}>
                                                                    <h6 className={classNames(styles.sub_heading)}>
                                                                        {linkItem.label}
                                                                    </h6>

                                                                </div>
                                                                <p className={styles.nav_info}>
                                                                    {
                                                                        linkItem.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                    {megaMenu?.attributes?.subMenu?.length < 4 && <div>
                        <h6 className={classNames(styles.nav_title , styles.nav_heading_lg_screen)}>
                            {megaMenu?.attributes?.menuResources?.heading}
                        </h6>
                        <div className={styles.blogcard_wrapper}>
                            {
                                megaMenu?.attributes?.menuResources?.resources?.data?.map((item, index) => {
                                    return (
                                        <Link key={index} href={`resources/${getResourcesSlug(`${item?.attributes?.category}`)}/${item?.attributes?.slug}`} target={'self'} className={styles.blogcard}>
                                            <div className={styles.blogcard__thumb}>
                                                <img src={item?.attributes?.media?.media?.data?.attributes?.url} />
                                            </div>
                                            <div className={styles.blogcard__content}>
                                                <h5 className={styles.blogcard__title}>
                                                    {item?.attributes?.title}
                                                </h5>
                                            </div>
                                        </Link>
                                    )
                                })

                            }
                            <div className={styles.blogcard_all}>
                                <ClickToAction {...megaMenu?.attributes?.menuResources?.link} />
                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        </>
    )
}
export default MegaMenu;