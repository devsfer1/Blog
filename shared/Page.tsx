import React from 'react';
import Header from './header';
import Footer from './footer';
import CenterWrapper from './centerWrapper';
import Head from 'next/head';

type PageProps = {
  title: string;
  children: React.ReactNode;
  setShowSearchOverlay: (showSearchOverlay: boolean) => void;
};

export const Page = ({ title, children, setShowSearchOverlay }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header setShowSearchOverlay={setShowSearchOverlay} />
      <CenterWrapper>{children}</CenterWrapper>
      <Footer />
    </>
  );
};
