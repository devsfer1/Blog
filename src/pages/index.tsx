import React, { useState } from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CenterWrapper, Page, Pagination, Footer } from '../components';
import { HomeWrapper, HomeFeatured, HomeSearchRow, HomePosts } from '../layout';

const Home: NextPage = () => {

  return (
    <>
      <Page  title={'Home | Blog'} >
        <CenterWrapper>
          <HomeWrapper>
            <HomeFeatured />
          </HomeWrapper>
          <HomePosts />
        </CenterWrapper>
        <Footer />
      </Page>
    </>
  );
};

export default Home;


