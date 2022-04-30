import styled from 'styled-components';
import { LinkedinSquare, Github } from 'styled-icons/boxicons-logos';
import { Envelope } from '@styled-icons/boxicons-regular';

export const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 120px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`

export const SocialWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const FooterLink = styled.a`
  color: #943434;
  font-weight: 600;
  font-size: 16px;
`

export const LinkedinLink = styled(LinkedinSquare)`
  width: 30px;
  height: 30px;
  color: #c4c4c4;
`

export const GithubLink = styled(Github)`
  width: 30px;
  height: 30px;
  color: #c4c4c4;
`

export const EmailLink = styled(Envelope)`
  width: 30px;
  height: 30px;
  color: #c4c4c4;
`

export const CopyRight = styled.p`
  color: #943434;
`