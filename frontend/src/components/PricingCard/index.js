import PricingCardSimple from './simple';
import PricingCardStandard from './standard';

const MAP_PRICIND_CARD_VARIATIONS = {
    simple: PricingCardSimple,
    standard: PricingCardStandard,
}
const PricingCard = ({ pricingCardVariation, ...rest }) => {
    const Component = MAP_PRICIND_CARD_VARIATIONS[pricingCardVariation?.toLocaleLowerCase()] || PricingCardSimple

    return (
        <Component {...rest} />
    )
}
export default PricingCard;