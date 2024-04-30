import classNames from "classnames";
import React, { useState } from "react";
import Slider from "react-slick";
import ClickToAction from "../CTA";
import styles from './homeTabs.module.css';
import Image from "next/image";

export default function HomeTabs({ tabs, tabHeading, homeTabsBackground, homeTabsTextColor = "#000000", tabsListVerticalSpacing = "vertical_spacing_3" }) {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [current, setCurrent] = useState(0);
    const settingsTabs = {
        slidesToShow: tabs?.length < 6 ? tabs?.length : 6,
        slidesToScroll: 6,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const settingsSlides = {
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: true,

    }

    return (
        <section>
            <div className={classNames("text-center", styles.tab_section_bg)} style={{ background: homeTabsBackground, color: homeTabsTextColor }}>
                <div>
                    <div className="container_padding">
                        <div className="row">
                            <div className="col-12">
                                <div className={classNames(`${tabsListVerticalSpacing}`.toLowerCase(), styles.tab_text_white)}>
                                    <h3 className={classNames(styles.home_tab)}>
                                        {tabHeading}
                                    </h3>
                                    <div className={styles.icon_flex}>
                                        <Slider
                                            asNavFor={nav1}
                                            ref={(slider2) => setNav2(slider2)}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                            className={styles.slick_slider}
                                            {...settingsTabs}
                                        >
                                            {
                                                tabs?.map((tab, index) => (
                                                    <button type="button" key={index} className={classNames(styles.home_tabs_link_btn, styles.tab_wrapper, index === current ? styles.btn_tertiary_active : styles.btn_tertiary_inactive)}>
                                                        <i className={classNames(`${tab?.icon?.replaceAll("_", "-")}`, styles.icon_font)}>
                                                        </i>
                                                        <p className={styles.tab_btn_title} style={index === current ? { borderBottomColor: homeTabsTextColor } : { borderBottomColor: "transparent" }}>
                                                            {tab.title}
                                                        </p>
                                                    </button>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settingsSlides}
                beforeChange={(oldIndex, newIndex) => setCurrent(newIndex)}
                className={"overflow-hidden tab_slides"} style={{ background: `${homeTabsBackground}0D` }}>
                {
                    tabs.map((tab, index) => (
                        <div key={index}>
                            <div className={classNames("container_padding", `${tabsListVerticalSpacing}`.toLowerCase(), styles.tab_section_light_bg)} style={{ background: `${homeTabsBackground}0D` }}>
                                <div className="row ">
                                    <div className="col-12 text-center">
                                        <div className={classNames(styles.tab_img_margin)}>
                                            <Image
                                                className={classNames(styles.tab_img_section)}
                                                src={tab?.image?.data?.attributes?.url}
                                                alt={tab.alt}
                                                fill
                                                loading='lazy'
                                            />                                        </div>
                                        {tab.description && <p className={classNames("paragraph paragraph_width", styles.tab_paragraph)}>
                                            {tab.description}
                                        </p>}
                                        {
                                            tab?.link?.label &&
                                            <div className={styles.home_tabs_link}>
                                                <ClickToAction {...tab?.link} />
                                            </div>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
}