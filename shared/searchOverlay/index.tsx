import { Wrapper, CloseButton } from './styles';
import { useSelector } from 'react-redux';
import { searchOverlay, toggleOverlay } from '../../redux/searchSlice';
import { useDispatch } from 'react-redux';


const SearchOverlay = () => {
  const active = useSelector(searchOverlay);
  const dispatch = useDispatch();

  return (
    <Wrapper active={active}>
      <CloseButton onClick={() => dispatch(toggleOverlay())}/>
    </Wrapper>
  );
};

export default SearchOverlay;
