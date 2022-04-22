import React from 'react';
import Header from './header';
import Head from 'next/head';

type PageProps = {
  title: string;
};

export const Page = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
    </>
  );
};
