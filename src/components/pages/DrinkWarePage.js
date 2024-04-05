import { Fragment } from 'react'
import React from 'react'
import { NavigationBar } from '../NavigationBar'
import { ProductPageBanner } from '../ProductPageBanner'
import image1 from '../../images/drinkware-section-image.jpeg'

export const DrinkWarePage = () => {
    return (
        <Fragment>
            <header>
                <NavigationBar />
            </header>
            <main>
                <ProductPageBanner
                backgroundImage={image1}
                title='Sip Sustainably with Green Cups'
                description='Eco-friendly cups and bottles for guilt-free hydration.'
                backgroundColor='primary'
                textColor='white'
            />
            </main>

        </Fragment>
    )
}
