import React, { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  HeaderInnerWrapper,
  HeaderLink,
  LogoWrapper,
  Bar,
  SearchButton,
} from './styles';
import { CenterWrapper } from '@/shared';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';

const headerItems = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Topics' },
  { id: 3, name: 'About' },
  { id: 4, name: 'Contact' },
];

const ReadingBar = () => {
  const [width, setWidth] = useState(0);
  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  });

  return <Bar style={{ width: width + '%' }}></Bar>;
};

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <CenterWrapper>
          <HeaderInnerWrapper>
            <Link href={`/`} passHref>
              <LogoWrapper>
                <Image
                  src={'/logo-text.png'}
                  layout='fill'
                  alt={'logo'}
                  objectFit='cover'
                />
              </LogoWrapper>
            </Link>

            {headerItems.map((item, index) => (
              <Link key={index} href={'/'} passHref>
                <HeaderLink>{item.name}</HeaderLink>
              </Link>
            ))}
            <SearchButton onClick={() => {console.log('olá mundo')}} />
          </HeaderInnerWrapper>
        </CenterWrapper>
      </HeaderWrapper>
      <ReadingBar />
    </>
  );
};

export default Header;
