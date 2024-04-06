import React from 'react'
import { Fragment } from 'react'
import { NavigationBar } from '../NavigationBar'
import { ProductPageBanner } from '../ProductPageBanner'
import { ProductsBox } from '../ProductsBox'
import image2 from '../../images/kitchenware-section-image.png'
import { products } from '../data/KitchenWareData'
import { Footer } from '../Footer'



export const KitchenWarePage = () => {
    return (
        <Fragment>
            <header>
                <NavigationBar />
            </header>
            <main>
                <ProductPageBanner
                backgroundImage={image2}
                title='Cook Green, Cook Clean'
                description='Sustainable kitchen essentials for a greener home'
                backgroundColor='light'
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
