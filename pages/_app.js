import { appWithTranslation } from 'next-i18next'
import GlobalStyles from "../src/Config/GlobalStyles"

const MyApp = ({ Component, pageProps }) => 
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>

export default appWithTranslation(MyApp)