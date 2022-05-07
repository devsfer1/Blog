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

export const InnerWrapper = styled.div`
  display: none;
  ${({ active }) => active && `
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  `}
`

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 0.32fr));
  gap: 30px;
  overflow-y: scroll;
  height: 100vh;
`

export const CloseButton = styled(CloseOutline)`
  color: #D72323;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
`

export const TextInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border: 1px solid #D72323;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  margin-bottom: 46px;
  width: 40%;
  align-self: center;
`
