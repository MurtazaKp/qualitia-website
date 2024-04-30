import classNames from 'classnames';
import MegaMenu from './components/MegaMenu';
import Menu from './components/Menu';
import styles from './header.module.css';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Announcement from '../Announcement';
import Link from '@/components/Link';
import ClickToAction from '../CTA';
import Image from 'next/image';

const Header = ({ header, global, preview = false }) => {
    const { logo, companyName } = global?.data?.attributes;
    const { signUpButton, signInButton, navigations, announcement, appearanceTimeoutInSeconds, slideSpeedInSeconds, announcementVisibility, menuAction = 'click' } = header?.data?.attributes;
    const [isMegaMenu, setIsMegaMenu] = useState(false);
    const [megaMenu, setMegaMenu] = useState({});
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMegamenuOpen = (menu) => {
        if (menu?.attributes?.subMenu?.length) {
            setIsMegaMenu(true);
        } else {
            setIsMegaMenu(false);
        }

        setMegaMenu(menu);
    }
    const handleMegamenuClose = () => {
        setIsMegaMenu(false);
        setMegaMenu({});
    }
    const existPreviewMode = async () => {
        const response = await fetch('/api/exit-preview');
        if (response) {
            window.close();
        }
    }
    useEffect(() => {
        setIsScrolled(window?.pageYOffset);
        function handleNavigation() {
            setIsScrolled(window?.pageYOffset > 20);
        }
        window.addEventListener("scroll", (e) => handleNavigation(e));

        return () => {
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, []);

    return (
        <>
            {preview && <div className={styles.exit_preview} onClick={existPreviewMode}>Click to Exit Preview Mode</div>}
            <Announcement announcement={announcement} slideSpeedInSeconds={slideSpeedInSeconds} appearanceTimeoutInSeconds={appearanceTimeoutInSeconds} announcementVisibility={announcementVisibility} />
            <div className={classNames(styles.header, isScrolled ? styles.header_sticky : '')} >
                <div className="row" onClick={() => isMegaMenu && menuAction === 'click' && handleMegamenuClose()}>
                    <div className={classNames("col-2", styles.logo_flex)}>
                        <Link href="" target={'self'}>
                            <Image
                                src={logo.data.attributes.url}
                                className={styles.logo}
                                alt={companyName}
                                height={45}
                                width={128}
                            />
                        </Link>
                        <Sidebar
                            navigations={navigations.data}
                            isMegaMenu={isMegaMenu}
                            handleMegamenuOpen={handleMegamenuOpen}
                            handleMegamenuClose={handleMegamenuClose}
                            megaMenu={megaMenu}
                            signUpButton={signUpButton}
                            signInButton={signInButton}
                            global={global}
                        />
                    </div>

                    <div className={classNames("col-10", styles.nav_display)}>
                        <Menu
                            navigations={navigations.data}
                            handleMegamenuOpen={handleMegamenuOpen}
                            handleMegamenuClose={handleMegamenuClose}
                            megaMenu={megaMenu}
                            menuAction={`${menuAction}`.toLowerCase()}
                        />

                        <div className={styles.login_sign_up_btn}>
                            <div>
                                {signInButton?.label && <ClickToAction {...signInButton} />}
                            </div>
                            <div>
                                {signUpButton?.label && <ClickToAction {...signUpButton} />}
                            </div>
                        </div>
                    </div>

                </div>
                {
                    isMegaMenu &&
                    <MegaMenu megaMenu={megaMenu}
                        handleMegamenuClose={handleMegamenuClose}
                        handleMegamenuOpen={handleMegamenuOpen}
                        menuAction={`${menuAction}`.toLowerCase()}
                    />
                }
            </div>
        </>
    )
}
export default Header;