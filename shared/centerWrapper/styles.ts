import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  margin: auto;

  @media ${device.mobileS} {
    
    padding-left: 10px;
    padding-right: 10px;
  }
  @media ${device.mobileM} {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media ${device.mobileL} {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${device.laptop} {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media ${device.laptopL} { 
    padding-left: 190px;
    padding-right: 190px;
  }
  @media ${device.desktop} {
    padding-left: 280px;
    padding-right: 280px;
  }
  @media ${device.desktopL} {
    padding-left: 660px;
    padding-right: 660px;
  }
`;

