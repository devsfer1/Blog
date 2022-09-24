import react from 'react';
import { PostDate, ImageWrapper, InnerWrapper, Subtitle, Title, Wrapper } from '../utils/styles/PostCard'
import Image from 'next/image';
import { intlFormat, format, compareAsc } from 'date-fns'

export type PostCardProps = {
  title: string;
  date: Date;
  subtitle?: string
}

export const PostCard: React.FC<PostCardProps> = (props) => {

  const { title, date, subtitle } = props

  const formatDate = intlFormat(new Date(date), {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }, {
    locale: 'en-US',
  })

  return (
    <Wrapper href={'/'}>
        <ImageWrapper>
          <Image alt={'any'} src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </ImageWrapper>
        <InnerWrapper >
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <PostDate>{formatDate}</PostDate>
        </InnerWrapper>
    </Wrapper>
  )
}