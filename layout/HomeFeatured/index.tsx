import { Container, FeaturedItem, ItemOne, ItemTwo, ItemThree, ItemFour, LargePostImageWrapper, MediumPostImageWrapper } from './styles'
import Image from 'next/image';


const HomeFeatured = () => {
  return (
    <Container>
      <ItemOne>
        <LargePostImageWrapper>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </LargePostImageWrapper>
      </ItemOne>
      <ItemTwo>
        <MediumPostImageWrapper>
            <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </MediumPostImageWrapper>
      </ItemTwo>
      <ItemThree>
        <MediumPostImageWrapper>
            <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </MediumPostImageWrapper>
      </ItemThree>
      <ItemFour>
        <MediumPostImageWrapper>
            <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </MediumPostImageWrapper>
      </ItemFour>
     
    </Container>
  )
}

export default HomeFeatured