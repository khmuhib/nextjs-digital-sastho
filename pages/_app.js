import React from 'react'
import '../styles/globals.css'
import store from '../store'
import { Provider } from 'react-redux'
import Layouts from './../src/components/Layouts'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  )
}

export default MyApp
