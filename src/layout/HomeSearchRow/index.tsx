import { FC } from 'react'
import { Wrapper, TextInput, TagTitle, TagItem, Separator } from './styles'

type HomeSearchRow = {

}

const HomeSearchRow: FC<HomeSearchRow> = () => {
  return (
    <Wrapper>
      <TextInput />
      <TagTitle>Blog tags</TagTitle>
      <TagItem href={'/'}>Javascript</TagItem>
      <Separator />
      <TagItem href={'/'}>Vue.JS</TagItem>
      <Separator />
      <TagItem href={'/'}>Tutorials</TagItem>
      <Separator />
      <TagItem href={'/'}>News</TagItem>
      <Separator />
      <TagItem href={'/'}>Node</TagItem>
      <Separator />
      <TagItem href={'/'}>Articles</TagItem>
    </Wrapper>
  )
}

export default HomeSearchRow