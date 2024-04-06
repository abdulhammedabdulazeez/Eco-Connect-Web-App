import { Fragment } from 'react'
import React from 'react'
import { NavigationBar } from '../NavigationBar'
import { ProductPageBanner } from '../ProductPageBanner'
import { ProductsBox } from '../ProductsBox'
import image1 from '../../images/drinkware-section-image.jpeg'
import { products } from '../data/DrinkWareData'
import { Footer } from '../Footer'

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
                
                <ProductsBox products={products}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}
