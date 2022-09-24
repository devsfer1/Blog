import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CenterWrapper from './CenterWrapper';
import Head from 'next/head';
import { Wrapper } from '../utils/styles/Page'

export type PageProps = {
  title: string;
  children: React.ReactNode;
  center?: boolean;

};

export const Page = ({ title, children, center }: PageProps) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header />
      {center ? <CenterWrapper>{children}</CenterWrapper> : <Wrapper>{children}</Wrapper>}
    
      {/* <Footer /> */}
    </>
  );
};
