import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchOverlay from './searchOverlay';
import CenterWrapper from './CenterWrapper';
import Head from 'next/head';

export type PageProps = {
  title: string;
  children: React.ReactNode;

};

export const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header />
      <CenterWrapper>{children}</CenterWrapper>
      {/* <Footer /> */}
    </>
  );
};
