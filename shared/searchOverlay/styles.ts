import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline';

export const Wrapper = styled.div`
  height: 0;
  width: 0;
  background-color: white;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;

  ${({ active }) => active && `
    height: 100vh;
    width: 100vw;
    opacity: 1;
    visibility: visible;
    z-index: 999999;
    position: fixed;
    top: 0;
    padding: 40px;
  `}
`

export const CloseButton = styled(CloseOutline)`
  color: #D72323;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
`
