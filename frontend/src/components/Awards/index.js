import styles from './awards.module.css';
import classNames from 'classnames';
const Awards = ({ awardsBackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ awardsBackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <h3 className='text-center'>
                    Awards
                </h3>
                <div className={classNames(styles.awards_cards)}>
                    <div className={classNames("text-center", styles.awards_cards_flex)}>
                        <div>
                            <a className={classNames("paragraph text-center", styles.awards_cards_btn, styles.awards_cards_btn_margin)} href="#" >
                                Space for Logo
                            </a>
                            <h4 className={classNames(styles.awards_cards_heading)}>
                                Title or name of award
                                goes here!
                            </h4>
                            <p className={classNames("paragraph", styles.awards_cards_paragraph)}>
                                Vestibulum <span className={classNames()}> pharetra, nunc ut </span>facilisis eleifend, nunc ex finibus risus, nec auctor augue dui eu odio. Aenean a nulla leo. Vestibulum in sollicitudin dui
                            </p>
                        </div>
                        <div>
                            <a className={classNames("text-semibold paragraph_p2", styles.awards_cards_date)} href='#'>
                                November 2022
                            </a>
                        </div>
                    </div>

                    <div className={classNames("text-center", styles.awards_cards_flex)}>
                        <div>
                            <a className={classNames("paragraph", styles.awards_cards_btn, styles.awards_cards_btn_margin)} href="#" >
                                Space for Logo
                            </a>
                            <h4 className={classNames(styles.awards_cards_heading)}>
                                Title or name of award
                                goes here!
                            </h4>
                            <p className={classNames("paragraph", styles.awards_cards_paragraph)}>
                                Vestibulum <span className={classNames(styles.awards_cards_active)}> pharetra, nunc ut </span>facilisis eleifend, nunc ex finibus risus, nec auctor augue dui eu odio. Aenean a nulla leo. Vestibulum in sollicitudin dui
                            </p>
                        </div>
                        <div>
                            <a className={classNames("text-semibold paragraph_p2", styles.awards_cards_active, styles.awards_cards_date)} href='#'>
                                November 2022
                            </a>
                        </div>
                    </div>

                    <div className={classNames("text-center", styles.awards_cards_flex)}>
                        <div>
                            <a className={classNames("paragraph", styles.awards_cards_btn, styles.awards_cards_btn_margin)} href="#" >
                                Space for Logo
                            </a>
                            <h4 className={classNames(styles.awards_cards_heading)}>
                                Title or name of award
                                goes here!
                            </h4>
                            <p className={classNames("paragraph", styles.awards_cards_paragraph)}>
                                Vestibulum <span className={classNames()}> pharetra, nunc ut </span>facilisis eleifend, nunc ex finibus risus, nec auctor augue dui eu odio. Aenean a nulla leo. Vestibulum in sollicitudin dui
                            </p>
                        </div>
                        <div>
                            <a className={classNames("text-semibold paragraph_p2", styles.awards_cards_date)} href='#'>
                                November 2022
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Awards;