import classNames from 'classnames';
import Link from '@/components/Link';
import styles from './footer.module.css';
import Image from 'next/image';
const Footer = ({ footer, global, footerBackground }) => {
    const { companyName, logo, addresses, copyRight } = global?.data?.attributes;
    return (
        <footer className={classNames("site_footer", styles.footer_color)} style={{ footerBackground }}>
            <section className={'section-spacing'}>
                <div className={classNames(styles.footer)}>
                    <div className={classNames(` mx`)}>
                        <div className={classNames(styles.border_bottom, styles.footer_col_wrapper)}>
                            <div className={classNames(styles.first_item, styles.border_right)}>
                                <div>
                                    <div className={styles.footer_heading}>
                                        <Link href="">
                                            <Image className={styles.footer_logo}
                                                src={logo.data.attributes.url}
                                                alt={companyName}
                                                height={45}
                                                width={128}
                                            />
                                        </Link>
                                    </div>
                                    <p>
                                        {
                                            addresses?.map((addres, index) => {
                                                return `${addres.country} ${index === addresses.length - 1 ? '' : ' | '}`
                                            })
                                        }
                                    </p>
                                    <ul className={classNames(styles.footer_social_media_link)}>
                                        {
                                            global?.data?.attributes?.socialLinks?.map((socialLink, index) => {
                                                return (
                                                    <li key={index} className={classNames(styles.footer_social_media_icons)}>
                                                        <Link href={socialLink?.href} target={socialLink?.target}>
                                                            <Image className={styles.footer_social_media_icon} src={socialLink.image?.data?.attributes?.url} alt={socialLink?.imageAlt} height={50} width={50} />
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            {
                                footer?.data?.attributes?.footerMenus.map((footerItem, index) => {
                                    return (
                                        <div key={index} className={classNames(footerItem?.columnLayout === 'col_2' ? styles.item_two_column : styles.item, styles.border_right)}>
                                            <div className={styles.footer_padding}>
                                                <div className={styles.footer_heading}>
                                                    {footerItem.label}
                                                </div>
                                                <ul className={styles.list_unstyled} type="none">
                                                    {
                                                        footerItem.links.map((linkItem, index) => (
                                                            <li className={styles.footer_item} key={index}>
                                                                <Link href={linkItem?.href} target={linkItem?.target} className={styles.footer_link}>
                                                                    {linkItem.label}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={classNames(styles.footer_copyright_text)}>
                            {copyRight}
                        </div>
                    </div>
                </div>

            </section>
        </footer>
    )
}
export default Footer;