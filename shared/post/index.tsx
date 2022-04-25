import Link from 'next/link';
import Image from 'next/image';
import {
  PostWrapper,
  PostContentWrapper,
  PostImageWrapper,
  PostImage,
  PostTitle,
  PostDescription,
} from './styles';

const Post = ({ post }) => {
  console.log({ post });

  return (
    <PostWrapper>
      <PostImageWrapper>
        <PostImage
          alt='teste'
          src={post.frontmatter.cover_image}
          layout='fill'
          objectFit='cover'
        />
      </PostImageWrapper>
      <PostContentWrapper>
        {/* <div className='post-date'>Posted on {post.frontmatter.date}</div> */}

        <h3>{post.frontmatter.title}</h3>

        <p>{post.frontmatter.excerpt}</p>

        
      </PostContentWrapper>
    </PostWrapper>
  );
};

export default Post;
