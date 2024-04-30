import ClickToAction from "@/components/CTA";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from '../../header.module.css'
import MegaMenu from "../MegaMenu";
import Link from "@/components/Link";
import Image from "next/image";

const Sidebar = ({ navigations, global, signInButton, signUpButton, megaMenu, isMegaMenu, handleMegamenuOpen, handleMegamenuClose }) => {
    const [isOpen, setIsopen] = useState(false);
    const { logo, companyName } = global?.data?.attributes;
    const router = useRouter();
    const ToggleSidebar = () => {
        if (isOpen === true) {
            handleNavigation();
        } else {
            setIsopen(true);
        }
    }
    const handleMegamenu = (navItem) => {
        if (navItem?.attributes?.label === megaMenu?.attributes?.label) {
            handleMegamenuClose();
        } else {
            if (!Boolean(navItem?.attributes?.subMenu?.length)) {
                ToggleSidebar();
                navItem?.attributes?.href && router.push(`/${navItem?.attributes?.href}`);
            };
            handleMegamenuOpen(navItem);
        }
    }
    const handleNavigation = () => {
        handleMegamenuClose();
        setIsopen(false);
    }

    return (
        <>
            <div className="container-fluid mt-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <div className={classNames('', (styles.hamburger_menu))} onClick={ToggleSidebar} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </div>

                    </div>
                </nav>
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <Link href="" target={'_self'} className={styles.logo_link}>
                            <Image className={styles.logo} src={logo.data.attributes.url} alt={companyName} height={45} width={128} />
                        </Link>
                        <div className={styles.close_menu} onClick={ToggleSidebar}>&times;</div>
                    </div>

                    <div className="sd-body">
                        <ul className={classNames(styles.menu_wrapper)}>
                            {
                                navigations?.map((navigationItem, index) => {
                                    const active = navigationItem.attributes.label === megaMenu?.attributes?.label
                                    return (
                                        <React.Fragment key={index}>
                                            <li className={classNames(styles.nav_item_mobile, active ? styles.active : '')} onClick={() => handleMegamenu(navigationItem)}>
                                                <span href={navigationItem.attributes?.href} target={navigationItem.attributes?.target}>{navigationItem.attributes.label}</span>
                                                {
                                                    Boolean(navigationItem?.attributes?.subMenu?.length) &&
                                                    <Image className={active ? styles.active_icon_mobile : ""} src={'/navIcon.svg'} alt="nav icon" height={10} width={10} />
                                                }
                                            </li>
                                            {
                                                isMegaMenu && active && <MegaMenu
                                                    megaMenu={megaMenu}
                                                    handleMegamenuOpen={handleMegamenuOpen}
                                                    handleMegamenuClose={handleNavigation}
                                                    isMobile={true}
                                                    menuLabel={navigationItem.attributes.label}
                                                />
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }


                        </ul>
                        <div className={styles.login_sign_up_btn_mobile}>
                            <div>
                                {signUpButton?.label && <ClickToAction {...signUpButton} />}
                            </div>
                            <div>
                                {signInButton?.label && <ClickToAction {...signInButton} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}

export default Sidebar;