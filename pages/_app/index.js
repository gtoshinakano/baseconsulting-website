import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
   padding: 0;
   margin: 0;
 }
 body{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 }
`;
const Container = styled.div`
  text-align: center;
`;
export default function App({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />;
  </>
}