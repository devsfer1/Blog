import react from 'react';
import { Container, FeaturedItem, Item, PostImageWrapper, PostTitle, PostSubtitle, PostDate, PostInnerWrapper } from '../utils/styles/Post'
import Image from 'next/image';

export type PostProps = {
  title: string;
  date: Date;
  subtitle?: string
  isLarge?: boolean;
}

export const Post: React.FC<PostProps> = (props) => {

  const { title, date, subtitle, isLarge = false } = props

  return (
    <Item isLarge={isLarge}>
        <PostImageWrapper isLarge={isLarge}>
          <Image alt={'any'} src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
        <PostInnerWrapper>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          {subtitle && <PostSubtitle>{subtitle}</PostSubtitle>}
        </PostInnerWrapper>
    </Item>
  )
}