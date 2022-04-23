import { HeaderWrapper, HeaderInnerWrapper, HeaderLink } from './styles';
import { CenterWrapper } from '@/shared';
import Link from 'next/link';

const headerItems = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Topics' },
  { id: 3, name: 'About' },
  { id: 4, name: 'Contact' },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <CenterWrapper>
        <HeaderInnerWrapper>
          <Link href={'/'}>Header</Link>
          {headerItems.map((item, index) => (
            <Link key={index} href={'/'} passHref>
              <HeaderLink>{item.name}</HeaderLink>
            </Link>
          ))}
        </HeaderInnerWrapper>
      </CenterWrapper>
    </HeaderWrapper>
  );
};

export default Header;
