import { Wrapper, InnerWrapper } from './styles'

type CenterWrapperProps = {
  children: React.ReactNode
}

const CenterWrapper = (props: CenterWrapperProps) => {
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
