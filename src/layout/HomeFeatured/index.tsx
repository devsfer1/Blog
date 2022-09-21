import { Container, FeaturedItem, Item, PostImageWrapper, PostTitle } from './styles'
import Image from 'next/image';
import { Post } from '../../components/Post'


const HomeFeatured = () => {
  return (
    <Container>
      <Post date={'02/04/2001'} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} isLarge={true} />
      <Post date={'02/04/2001'} title={'Olá mundo'} />
      <Post date={'02/04/2001'} title={'Olá mundo'} />
      <Post date={'02/04/2001'} title={'Olá mundo'} />
      {/* <Item isLarge>
        <PostImageWrapper isLarge>
          <Image src={'/post_1.jpg'} layout='fill' objectFit='cover' />
        </PostImageWrapper>
        <PostTitle>Olá mundo</PostTitle>
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
      </Item> */}
    </Container>
  )
}

export default HomeFeatured