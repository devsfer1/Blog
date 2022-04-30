import {
  Wrapper,
  InnerWrapper,
  LinksWrapper,
  SocialWrapper,
  FooterLink,
  GithubLink,
  LinkedinLink,
  EmailLink,
  CopyRight,
} from './styles';
import Link from 'next/link';
import { CenterWrapper } from '@/shared';

const footerItems = [
  { id: 1, name: 'Terms of Use' },
  { id: 2, name: 'Privacy Policy' },
  { id: 3, name: 'Contact' },
  { id: 4, name: 'About' },
];

const Footer = () => {
  return (
    <Wrapper>
      <CenterWrapper>
        <InnerWrapper>
          <SocialWrapper>
            <GithubLink />
            <LinkedinLink />
            <EmailLink />
          </SocialWrapper>
          <LinksWrapper>
            {footerItems.map((item, index) => (
              <Link key={index} href={'/'} passHref>
                <FooterLink>{item.name}</FooterLink>
              </Link>
            ))}
          </LinksWrapper>
          <CopyRight>
            © {new Date().getFullYear()} Bear Code Blog. All rights reserved.
          </CopyRight>
        </InnerWrapper>
      </CenterWrapper>
    </Wrapper>
  );
};

export default Footer;
