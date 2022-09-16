import { Container, FeaturedItem, ItemOne, ItemTwo, ItemThree, ItemFour, LargePostImageWrapper, MediumPostImageWrapper, PostImageWrapper } from './styles'
import Image from 'next/image';


const HomeFeatured = () => {
  return (
    <Container>
      <ItemOne>
        <PostImageWrapper isLarge>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </ItemOne>
      <ItemTwo>
        <PostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </ItemTwo>
      <ItemThree>
        <PostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </ItemThree>
      <ItemFour>
        <PostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
      </ItemFour>
     
    </Container>
  )
}

export default HomeFeatured