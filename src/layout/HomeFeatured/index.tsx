import { Container, FeaturedItem, Item, PostImageWrapper, PostTitle } from './styles'
import Image from 'next/image';
import { Post } from '../../components/Post'


const HomeFeatured = () => {
  return (
    <Container>
      <Post date={new Date()} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} isLarge={true} />
      <Post date={new Date()} title={'Stern alarums changed to merry meetings'} />
      <Post date={new Date()} title={'Instead of mounting barded steeds'} />
      <Post date={new Date()} title={'Brows bound with victorious wreaths'} />
    </Container>
  )
}

export default HomeFeatured