import "reflect-metadata"

import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app"

import { Favicon } from "ui"
import { AppLayout } from "../components"

import "../styles/index.css"

type Props = {} & AppProps

const App: NextComponentType<AppContext, AppInitialProps, Props> = (props: Props) => {
  const { Component, pageProps } = props

  return (
    <>
      <Favicon />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default App
