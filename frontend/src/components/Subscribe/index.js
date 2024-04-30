import { groupBy } from '@/utils/groupBy';
import { gql } from '@apollo/client';
import classNames from 'classnames';
import { resourcesDetails } from 'client/api/fragment.containers';
import client from 'client/apollo-client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hubspot';
import styles from './subscribe.module.css';

const Subscribe = ({ subscribeBackground, showResourcesDetails, placeholder, subscribeSuccessMessage, subscribeHeading, subscribeLayout, buttonName, subscribeVerticalSpacing = "vertical_spacing_3" }) => {
    const [resources, setResources] = useState({});
    const [email, setEmail] = useState('');
    const { data, isLoading, isError, handleSubmit } = useForm({
        region: "na1",
        portalId: "22100441",
        formId: "29129fcf-17e5-4534-9722-c88d6f529936"
    })

    useEffect(() => {
        if (data?.status === 200) {
            setEmail('');
        }
    }, [data])

    useEffect(() => {
        showResourcesDetails && client.query({
            query: gql`query { ${resourcesDetails} }`
        }).then((result) => {
            const dataSource = [];
            result?.data?.resources?.data?.map((item) => {
                dataSource.push(item.attributes);
            })
            setResources(groupBy(dataSource, 'category'))
        });
    }, [])

    return (
        <div className='container_padding' style={{ background: subscribeBackground }}>
            <div className={classNames('section-spacing', `${subscribeVerticalSpacing}`.toLowerCase())}  >
                <div className="row">
                    <div className={classNames("col-12", `${subscribeLayout}`.toLocaleLowerCase() === "inline" ? styles.inline_layout : styles.block_layout)} >
                        <div className={styles.text_width}>
                            <div className={classNames("newsletter_heading ")} dangerouslySetInnerHTML={{ __html: subscribeHeading }} />
                            {showResourcesDetails && <div className={"paragraph text-center"}>
                                {
                                    resources?.Blog?.length && `${resources?.Blog?.length} Blogs`
                                }
                                {
                                    resources?.Webinar?.length && ` | ${resources?.Webinar?.length} Webinars`
                                }
                                {
                                    resources?.Podcast?.length && ` | ${resources?.Podcast?.length} Podcasts`
                                }
                            </div>}
                        </div>
                        <form className={"newsletter_input"} onSubmit={handleSubmit} >
                            <input className={classNames("input_width", styles.input_width_border)} type="email" placeholder={placeholder} name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <div className={classNames("newsletter_btn")}>
                                <button className={classNames("btn-primary btn_lg btn_border_radius", styles.newsletter_button)} type="submit">
                                    {buttonName}{isLoading && !isError && <span className={styles.button_loading}></span>}
                                </button>
                            </div>

                        </form>
                        {data?.status === 200 && <div className={classNames('small', styles.success_text)} dangerouslySetInnerHTML={{ __html: subscribeSuccessMessage }} />}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Subscribe;