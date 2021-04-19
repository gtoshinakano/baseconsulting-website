import { appWithTranslation } from 'next-i18next'
import '../public/css/globals.css'
import GlobalStyles from "@Config/GlobalStyles"

const MyApp = ({ Component, pageProps }) => 
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>

export default appWithTranslation(MyApp)