import '@Styles/index.css'
import {
  GraphqlProvider,
  LanguageProvider,
  ThemeProvider,
} from '@Contexts/index'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { Provider } from 'react-redux'
import { storeWrapper } from '@Redux/store'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = storeWrapper.useWrappedStore(rest)
  const { pageProps } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <LanguageProvider>
      <ThemeProvider>
        <GraphqlProvider>
          <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
          </Provider>
        </GraphqlProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
