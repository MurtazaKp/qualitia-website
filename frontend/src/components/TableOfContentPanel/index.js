import styles from './tableOfContentPanel.module.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const TableOfContentPanel = ({ tableOfContents, tableOfContentPanelVerticalSpacing = "vertical_spacing_3" }) => {
    const [current, setCurrent] = useState(tableOfContents.length ? tableOfContents[0] : {});
    const router = useRouter();

    useEffect(() => {
        const content = tableOfContents?.find(section => {
            return `${section?.href}`.toLowerCase() === `${router?.query?.path}`.toLowerCase()
        });
        setCurrent(content)
    }, [router.query])

    return (
        <>
            <Head>
                {current?.canonicalURL && <link rel="canonical" href={current.canonicalURL} key="canonical" />}
            </Head>
            <div className='container_padding'>
                <section className={classNames('section-spacing', `${tableOfContentPanelVerticalSpacing}`.toLowerCase(), styles.content_panel_section_margin)}>
                    <div className='row'>
                        <div className={classNames('col-3', styles.sidebar_list_padding)}>
                            {
                                tableOfContents?.map((section, index) => {
                                    return <Link href={`${router.query.page}/${section.href}`} target={section.target} key={index}><div className={classNames(styles.sidebar_list, current === section ? styles.active : '')}>{section.title}</div></Link>
                                })
                            }
                        </div>
                        <div className='col-9'>
                            {current?.title && <h4 className={styles.section_heading}>{current?.title}</h4>}
                            <div dangerouslySetInnerHTML={{ __html: current?.content }} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default TableOfContentPanel;