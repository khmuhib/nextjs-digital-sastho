import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layouts({children}) {
    return (
        <>
            <Head>
                <title>Digital Sastho</title>
            </Head>

            <NavBar></NavBar>
                <main>{children}</main>
            <Footer></Footer>
        </>
    )
}
