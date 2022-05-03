import React from 'react';
import Header from './header';
import Footer from './footer';
import SearchOverlay from './searchOverlay';
import CenterWrapper from './centerWrapper';
import Head from 'next/head';

type PageProps = {
  title: string;
  children: React.ReactNode;
  posts: any;
};

export const Page = ({ title, posts, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header />
      <CenterWrapper>{children}</CenterWrapper>
      <Footer />
      <SearchOverlay posts={posts} />
    </>
  );
};
