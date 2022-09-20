import { Wrapper, InnerWrapper } from '../utils/styles/CenterWrapper'

type CenterWrapperProps = {
  children: React.ReactNode
}

export const CenterWrapper = (props: CenterWrapperProps) => {
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
