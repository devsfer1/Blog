import React, { useState } from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CenterWrapper, Page, Post, SearchOverlay, Pagination } from '@/shared';
import { HomeWrapper, HomeInnerWrapper, HomeDescription } from '@/layout';

const Home: NextPage = ({ posts }) => {

  return (
    <>
      <Page posts={posts} title={'Home | Blog'} >
        <HomeWrapper>
          
          
          <Pagination />
        </HomeWrapper>
      </Page>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  };

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
