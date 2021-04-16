import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link"
import { Router, useRouter } from 'next/dist/client/router'

//Components Imports
import {TopNav} from '@Commons'

function Home() {

  const router = useRouter()
  const { t } = useTranslation('common')
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <TopNav />
      </nav>

      <main>
        
      </main>

      <footer>

      </footer>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  }
})

export default Home