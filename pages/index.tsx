import React from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CenterWrapper, Page, Post } from '@/shared';
import { Wrapper } from './styles';

const Home: NextPage = ({ posts }) => {
  return (
    <>
      <Page title={'Home | Blog'}>
        <Wrapper>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </Wrapper>
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
