import React, { Fragment } from 'react'
import { NavigationBar } from '../NavigationBar'
import { Hero } from '../Hero'
import { HomePageSections } from '../HomePageSections'
import { Footer } from '../Footer'

export default function Home() {
    return (
        <Fragment>
            <header>
                <NavigationBar />
            </header>
            <main>
                <Hero />
                <HomePageSections />
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}

