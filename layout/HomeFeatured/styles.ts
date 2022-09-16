import styled from 'styled-components';

interface PostImageWrapperProps {
  isLarge?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3,210px);
  gap: 60px;
  width: 100%;
  margin-top: 120px;
`

export const FeaturedItem = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
`

export const ItemOne = styled.div`
  border: 1px solid black;
  grid-column: 1 / 3;
  grid-row: 1 / 4;
  
`
export const ItemTwo = styled.div`
  grid-column: 3 / 5;
  border: 1px solid black;
`
export const ItemThree = styled.div`
  grid-column: 3 / 5;
  border: 1px solid black;
`
export const ItemFour = styled.div`
  border: 1px solid black;
  grid-column: 3 / 5;
`

export const LargePostImageWrapper = styled.div`
  width: 100%;
  height: 55%;
  position: relative;
`

export const MediumPostImageWrapper = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
`

export const PostImageWrapper = styled.div<PostImageWrapperProps>`
  width: ${props => props.isLarge ? "100%" : "40%"};
  height: ${props => props.isLarge ? "55%" : "100%"};
  position: relative;
`