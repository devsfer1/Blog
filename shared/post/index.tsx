import Link from 'next/link';
import Image from 'next/image';
import { PostWrapper, PostImage } from './styles';

const Post = ({ post }) => {
  console.log({ post });

  return (
    <PostWrapper>
      <PostImage
        alt='teste'
        src={post.frontmatter.cover_image}
        width={200}
        height={200}
      />
      {/* <img src={post.frontmatter.cover_image} alt='' /> */}

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </PostWrapper>
  );
};

export default Post;
