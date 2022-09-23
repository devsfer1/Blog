import styled from 'styled-components';

interface HomeFeaturedProps {
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

export const FeaturedItem = styled.a`
  width: 200px;
  height: 300px;
  border: 1px solid black;
`

export const Item = styled.div<HomeFeaturedProps>`
  grid-column: ${props => props.isLarge ? '1/3' : '3/5'};
  grid-row: ${props => props.isLarge && '1/4'};
  display: flex;
  flex-direction: ${props => props.isLarge && 'column'};
  gap: 20px;
`


export const PostImageWrapper = styled.div<HomeFeaturedProps>`
  width: ${props => props.isLarge ? "100%" : "40%"};
  height: ${props => props.isLarge ? "65%" : "100%"};
  position: relative;
`

export const PostTitle = styled.h3`
  font-size: 28px;
`
export const PostSubtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
`

export const PostDate = styled.p`
  font-size: 13px;
  color: #7A7A7A;
`

export const PostInnerWrapper = styled.div<HomeFeaturedProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${props => props.isLarge ? '100%' : '60%'};
`