import React, { Fragment } from 'react'
import { CategorySection } from './CategorySection'
import image1 from '../images/drinkware-section-image.jpeg'
import image2 from '../images/kitchenware-section-image.png'
import image3 from '../images/bag-section-image.jpeg'

export const HomePageSections = () => {
    return (
        <Fragment>
            <CategorySection
                backgroundImage={image1}
                title='Sip Sustainably with Green Cups'
                description='Eco-friendly cups and bottles for guilt-free hydration.'
                btnTag='Shop Now'
                backgroundColor='primary'
                textColor='white'
                pathway='/drinkware'
            />
            <CategorySection
                backgroundImage={image2}
                title='Cook Green, Cook Clean'
                description='Sustainable kitchen essentials for a greener home'
                btnTag='Explore Now'
                backgroundColor='light'
                textColor=''
                pathway='/kitchenware'
            />
            <CategorySection
                backgroundImage={image3}
                title='Carry Consciously with Eco Bags'
                description='Environmentally-friendly bags for mindful living'
                btnTag='Discover More'
                backgroundColor='info'
                textColor=''
                pathway='/ecofriendly-bags'
            />
        </Fragment>
    )
}
