import Link from 'next/link';
import Image from 'next/image';
import {
  PostWrapper,
  PostContentWrapper,
  PostImageWrapper,
  PostImage,
  PostTag,
  PostTagWrapper,
  PostTitle,
  PostDescription,
  PostRead,
  PostFooter,
  PostTime,
} from './styles';

const Post = ({ post }) => {
  console.log({ post });

  return (
    <Link href={`/blog/${post.slug}`} passHref>
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
          <PostTagWrapper>
            <PostTag>{post.frontmatter.tag}</PostTag>
          </PostTagWrapper>

          <PostTitle>{post.frontmatter.title}</PostTitle>

          <PostDescription>{post.frontmatter.excerpt}</PostDescription>
          <PostFooter>
            <PostRead>{`${post.frontmatter.time} read`}</PostRead>
            <PostTime>{post.frontmatter.date}</PostTime>
          </PostFooter>
        </PostContentWrapper>
      </PostWrapper>
    </Link>
  );
};

export default Post;
