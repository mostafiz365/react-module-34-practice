import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, billing, features} = pricing;
    return (
        <div className='bg-amber-300 border-2 border-amber-600 flex flex-col rounded-2xl p-5 space-y-4'>
            {/* Card header */}
            <div className='space-y-4'>
                <h3 className='text-4xl font-bold'>{name}</h3>
                <h4 className='text-3xl font-semibold'>{price}</h4>
            </div>
            {/* Card body */}
            <div className='bg-amber-500 rounded-2xl p-4 space-y-4 flex-1'>
                <p className='text-2xl font-medium'>{billing}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>

            <button className="btn w-full">Wide</button>
        </div>
    );
};

export default PricingCard;