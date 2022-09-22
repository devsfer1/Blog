import { FC } from 'react'
import { Wrapper, TextInput, TagTitle, TagItem } from './styles'

type HomeSearchRow = {

}

const HomeSearchRow: FC<HomeSearchRow> = () => {
  return (
    <Wrapper>
      <TextInput />
      <TagTitle>Blog tags</TagTitle>
      <TagItem>Javascript</TagItem>
      <TagItem>Vue.JS</TagItem>
      <TagItem>Tutorials</TagItem>
      <TagItem>News</TagItem>
      <TagItem>Node</TagItem>
      <TagItem>Articles</TagItem>
    </Wrapper>
  )
}

export default HomeSearchRow