import styled from 'styled-components';
import { ArrowRightShort, ArrowLeftShort } from '@styled-icons/bootstrap';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 20px;
`;

export const PrevPage = styled(ArrowLeftShort)`
  color: #D72323;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const NextPage = styled(ArrowRightShort)`
  color: #D72323;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const Text = styled.p`
`
