
import Link from '@/components/Link';
import classNames from 'classnames';
import styles from './menu.module.css';
const Menu = ({ navigations, handleMegamenuOpen, handleMegamenuClose, menuAction, megaMenu }) => {
    const isMenuOnClick = menuAction === 'click';

    return (
        <ul type="none" className={styles.nav_list}>
            {
                navigations.map((navItem, index) => {
                    const isMegaMenu = Boolean(navItem?.attributes?.subMenu?.length);

                    return (
                        <li key={index}
                            onMouseEnter={() => !isMenuOnClick && handleMegamenuOpen(navItem)}
                            className={classNames(styles.nav_item, megaMenu === navItem ? styles.nav_item_active : '')}
                            onMouseLeave={() => !isMenuOnClick && handleMegamenuClose()}
                            onClick={() => isMenuOnClick && handleMegamenuOpen(navItem)}
                        >
                            {
                                isMegaMenu ?
                                    <button type='button' className={classNames(styles.link_btn, styles.cursor_pointer)}>
                                        {navItem.attributes?.label}
                                        <span className={classNames('icon-New-Icons_Arrow-Bottom', styles.nav_icon_width)}></span>
                                    </button>
                                    :

                                    <Link href={navItem?.attributes?.href} target={navItem?.attributes?.target}>
                                        {navItem.attributes?.label}
                                    </Link>
                            }
                        </li>
                    )
                })
            }

        </ul>
    )
}
export default Menu;