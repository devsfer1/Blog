import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3,200px);
  gap: 20px;
  width: 100%;
`

export const FeaturedItem = styled.div`
  background-color: red;
  width: 200px;
  height: 300px;
`

export const ItemOne = styled.div`
  grid-column: 1 / 5;
  background-color: black;
`
export const ItemTwo = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  background-color: black;
`
export const ItemThree = styled.div`
  grid-column: 3 / 5;
  background-color: black;
`
export const ItemFour = styled.div`
  background-color: black;

`