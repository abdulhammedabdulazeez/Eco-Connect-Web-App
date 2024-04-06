import React from 'react'
import { Fragment } from 'react'
import { NavigationBar } from '../NavigationBar'
import { ProductPageBanner } from '../ProductPageBanner'
import { ProductsBox } from '../ProductsBox'
import image3 from '../../images/bag-section-image.jpeg'
import { products } from '../data/BagWareData'
import { Footer } from '../Footer'

export const BagsPage = () => {


    return (
        <Fragment>
            <header>
                <NavigationBar />
            </header>
            <main>
                <ProductPageBanner
                    backgroundImage={image3}
                    title='Carry Consciously with Eco Bags'
                    description='Environmentally-friendly bags for mindful living'
                    backgroundColor='info'
                    textColor=''
                />

                <ProductsBox products={products}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}
