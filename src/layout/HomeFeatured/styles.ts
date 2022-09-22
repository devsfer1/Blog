import styled from 'styled-components';

interface HomeFeaturedProps {
  isLarge?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3,210px);
  gap: 40px;
  width: 100%;
  margin-top: 120px;
  
`

export const FeaturedItem = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
`

export const Item = styled.div<HomeFeaturedProps>`
  border: 1px solid black;
  grid-column: ${props => props.isLarge ? '1/3' : '3/5'};
  grid-row: ${props => props.isLarge && '1/4'};
`

export const PostImageWrapper = styled.div<HomeFeaturedProps>`
  width: ${props => props.isLarge ? "100%" : "40%"};
  height: ${props => props.isLarge ? "55%" : "100%"};
  position: relative;
`

export const PostTitle = styled.h3`
  font-size: 24px;
`