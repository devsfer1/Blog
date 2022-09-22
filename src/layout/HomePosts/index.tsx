import { FC } from 'react'
import { Wrapper, PostsWrapper } from './styles'
import { PostCard } from '../../components/PostCard'
import { HomeSearchRow }  from '../../layout'

type HomePostsProps = {

}

const HomePosts: FC<HomePostsProps> = () => {
  return (
    <Wrapper>
      <HomeSearchRow />
      <PostsWrapper>
        <PostCard  date={new Date()} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
        <PostCard  date={new Date()} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
        <PostCard  date={new Date()} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
        <PostCard  date={new Date()} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
        <PostCard  date={new Date()} title={'Olá mundo'} subtitle={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"} />
      </PostsWrapper>
    </Wrapper>
  )
}

export default HomePosts