import React, { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  HeaderInnerWrapper,
  HeaderLink,
  HeaderRelative,
  LogoWrapper,
  Bar,
  SearchButton,
  View,
} from '../utils/styles/Header';
import { CenterWrapper } from './CenterWrapper';
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { toggleOverlay } from '../redux/searchSlice';

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

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <HeaderWrapper>
        <HeaderRelative>
          <CenterWrapper>
            <HeaderInnerWrapper>
              <Link href={`/`} passHref>
                <LogoWrapper>
                  <Image
                    src={'/logo-text.png'}
                    layout='fill'
                    alt={'logo'}
                    objectFit='contain'
                  />
                </LogoWrapper>
              </Link>
              {headerItems.map((item, index) => (
                <Link key={index} href={'/'} passHref>
                  <HeaderLink>{item.name}</HeaderLink>
                </Link>
              ))}
            </HeaderInnerWrapper>
          </CenterWrapper>
          <ReadingBar />
        </HeaderRelative>
      </HeaderWrapper>
    </>
  );
};

export default Header;
