import { HeaderWrapper, HeaderInnerWrapper, HeaderLink } from './styles';
import { CenterWrapper } from '@/shared';

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
          <h1>Header</h1>
          {headerItems.map((item, index) => (
            <HeaderLink href='/' key={index}>
              {item.name}
            </HeaderLink>
          ))}
        </HeaderInnerWrapper>
      </CenterWrapper>
    </HeaderWrapper>
  );
};

export default Header;
