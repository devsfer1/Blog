import { Link } from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

export const PostWrapper = styled.a`
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);

  }
`;

export const PostImageWrapper = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const PostImage = styled(Image)`

`;

export const PostTagWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  width: 30%;
  border-radius: 8px;
`

export const PostTag = styled.p`
  color: black;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  
`

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  padding: 15px;
  background-color: white;
  flex: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const PostTitle = styled.h3`
  color: #943434;
`;

export const PostDescription = styled.p`

`;

export const PostFooter = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
`

export const PostRead = styled.p`
  font-size: 13px;
  color: #a63737;
 

`;

export const PostTime = styled.p`
  font-size: 13px;
  color: #a63737;
  
`