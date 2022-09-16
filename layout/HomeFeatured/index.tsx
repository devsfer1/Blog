import { Container, FeaturedItem, Item, PostImageWrapper } from './styles'
import Image from 'next/image';


const HomeFeatured = () => {
  return (
    <Container>
      <Item isLarge>
        <PostImageWrapper isLarge>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </Item>
      <Item>
        <PostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </Item>
      <Item>
        <PostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </Item>
      <Item>
        <PostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </Item>
     
    </Container>
  )
}

export default HomeFeatured