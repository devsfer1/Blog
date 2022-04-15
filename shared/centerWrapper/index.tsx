import { Wrapper, InnerWrapper } from './styles'

const CenterWrapper = (props) => {
  const { children } = props

  return (
    <Wrapper>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </Wrapper>
  );
};

export default CenterWrapper;
