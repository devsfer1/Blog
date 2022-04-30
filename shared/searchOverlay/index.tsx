import { Wrapper, CloseButton } from './styles';

const SearchOverlay = ({ active }) => {
  return (
    <Wrapper active={active}>
      <CloseButton  />
    </Wrapper>
  )
}

export default SearchOverlay