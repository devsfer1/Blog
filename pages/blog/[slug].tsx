import { Page, CenterWrapper } from '@/shared';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Image from 'next/image';
import { PostWrapper, PostImageCover } from '@/layout';

const PostPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
  posts,
}) => {

  return (
    <Page title={title} posts={posts}>
      <PostWrapper>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <PostImageCover>
          <Image src={cover_image} layout='fill' objectFit='cover' />
        </PostImageCover>
        {/* <img src={cover_image} alt='' /> */}
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </PostWrapper>
    </Page>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  };

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
      frontmatter,
      slug,
      content,
      posts,
    },
  };
}
