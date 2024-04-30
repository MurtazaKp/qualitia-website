import classNames from 'classnames';
import styles from './iframe.module.css'
const Iframe = ({ layout, iframeSrc }) => {
    return (
        <>
            <div>
                <iframe className={classNames(styles.iframe_container)} src={iframeSrc || ""} />   
            </div>
        </>
    )

}
export default Iframe;