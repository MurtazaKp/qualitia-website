import { useState } from 'react';
import PricingCard from '../PricingCard';
import PricingBanner from '../PricingCard/pricingBanner';
import PricingTable from '../PricingTable';
const Pricing = ({ pricing_plans, pricingBanner, pricingTableVerticalSpacing = "vertical_spacing_3", showPricingTable, pricingCardVariation }) => {
    const [planType, setPlanType] = useState(pricingBanner?.monthButtonTrackingId);
    const [selected, setSelected] = useState(0);

    return (
        <>
            <PricingBanner data={pricingBanner} setPlanType={setPlanType} planType={planType} />
            <PricingCard setSelected={setSelected} selected={selected} plans={pricing_plans?.data} planType={planType} pricingTableVerticalSpacing={pricingTableVerticalSpacing} pricingCardVariation={pricingCardVariation} />
            {showPricingTable && <PricingTable setSelected={setSelected} selected={selected} plans={pricing_plans?.data} planType={planType} pricingTableVerticalSpacing={pricingTableVerticalSpacing} />}
        </>
    )
}
export default Pricing;