import {
  Wrapper,
  InnerWrapper,
  TextInput,
  CloseButton,
  PostWrapper,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { searchOverlay, toggleOverlay } from '../../redux/searchSlice';
import { CenterWrapper, Page, Post, Pagination } from '../../components';

type SearchOverlayProps = {
  posts: any;
};

const SearchOverlay = ({ posts }: SearchOverlayProps) => {
  const active = useSelector(searchOverlay);
  const dispatch = useDispatch();

  console.log({ posts });

  return (
    <Wrapper active={active}>
      <InnerWrapper active={active}>
        <CloseButton onClick={() => dispatch(toggleOverlay())} />
        <TextInput placeholder={'Search for posts...'} />
        <PostWrapper>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </PostWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SearchOverlay;
