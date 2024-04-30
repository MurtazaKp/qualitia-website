import OutlineCTA from './outline';
import PrimaryCTA from './primary';
import RoundedPrimaryCTA from './roundedPrimary';
import SecondaryCTA from './secondary';
import TransparentCTA from './transparent';
const MAP_BUTTONS_VARIATIONS = {
    primary: PrimaryCTA,
    outline: OutlineCTA,
    rounded_primary: RoundedPrimaryCTA,
    transparent: TransparentCTA,
    secondary: SecondaryCTA
}
const ClickToAction = ({ layout, ...rest }) => {
    const Component = MAP_BUTTONS_VARIATIONS[`${layout}`.toLowerCase()] || PrimaryCTA
    return (<Component {...rest} />)
}

export default ClickToAction;

