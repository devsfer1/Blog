import styled from 'styled-components';
import Link from 'next/link';

export const HeaderWrapper = styled.header`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
`

export const HeaderLink = styled(Link)`
  color: black;
  background: blue;
  font-weight: 600;
`
