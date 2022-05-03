import { Wrapper, TextInput, CloseButton } from './styles';
import { useSelector } from 'react-redux';
import { searchOverlay, toggleOverlay } from '../../redux/searchSlice';
import { useDispatch } from 'react-redux';

type SearchOverlayProps = {
  posts: any;
};

const SearchOverlay = ({ posts }: SearchOverlayProps) => {
  const active = useSelector(searchOverlay);
  const dispatch = useDispatch();

  console.log({ posts });

  return (
    <Wrapper active={active}>
      <CloseButton onClick={() => dispatch(toggleOverlay())} />
      <TextInput placeholder={'Search for posts...'} />
    </Wrapper>
  );
};

export default SearchOverlay;
