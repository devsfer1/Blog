import React, { useState } from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CenterWrapper, Page, Pagination } from '../components';
import { HomeWrapper, HomeFeatured } from '../layout';

const Home: NextPage = () => {

  return (
    <>
      <Page title={'Home | Blog'} >
        <HomeWrapper>
          <HomeFeatured />
        </HomeWrapper>
      </Page>
    </>
  );
};

export default Home;


