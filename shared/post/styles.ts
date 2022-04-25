import styled from 'styled-components';
import Image from 'next/image';

export const PostWrapper = styled.div`
  
  
  display: flex;
  flex-direction: column;
`;

export const PostImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const PostImage = styled(Image)`

`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  padding: 15px;
  background-color: white;
  flex: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const PostTitle = styled.h3`

`;

export const PostDescription = styled.p`

`;