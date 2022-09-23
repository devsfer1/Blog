import styled from 'styled-components';

export const Wrapper = styled.a`
   display: flex;
   width: 100%;
   border: 1px solid #D7D7D7;
   border-radius: 6px;
   overflow: hidden;
   height: 210px;
`

export const ImageWrapper = styled.div`
  width: 70%;
  position: relative;
`

export const Title = styled.h3`
  font-size: 28px;
`
export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
`

export const PostDate = styled.p`
  font-size: 13px;
  color: #7A7A7A;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
`