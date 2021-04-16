import { appWithTranslation } from 'next-i18next'
import GlobalStyles from "../src/config/GlobalStyles"

const MyApp = ({ Component, pageProps }) => 
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>

export default appWithTranslation(MyApp)