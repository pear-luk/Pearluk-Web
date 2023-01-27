import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;

  display: block;
  width: 29.6rem;
  height: 100%;
  background-color: ${({ theme }) => theme.color.yellow.yellow};
`;

const LogoBox = styled.div`
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
`;
const LoginBox = styled.div`
  position: absolute;

  top: 4.8rem;
  right: 3rem;
`;

const MenuBox = styled.div`
  margin: 17.2rem 0;
`;
const MenuItemBox = styled.div`
  /* height: 10rem; */
  padding: 4rem 3rem;
`;
const MenuItem = styled.div`
  font-size: 2rem;
`;

const MenuSubItem = styled.div`
  font-size: 1.4rem;
  margin: 2rem auto;
`;
export const Menu = ({ ...props }) => {
  return (
    <Container {...props}>
      <LogoBox>
        <Image src="./logo/black/home.svg" width={30} height={30} alt="home logo" />
      </LogoBox>
      <LoginBox>LOG IN</LoginBox>
      <MenuBox>
        <MenuItemBox>
          <MenuItem>ABOUT</MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem>
            ARCHIVE
            {/* 아카이브 모아보기 map 돌려야함. */}
            <MenuSubItem>ALL</MenuSubItem>
            <MenuSubItem>22 F/W</MenuSubItem>
            <MenuSubItem>22 S/S</MenuSubItem>
            <MenuSubItem>OFF</MenuSubItem>
          </MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem>QA</MenuItem>
        </MenuItemBox>
      </MenuBox>
    </Container>
  );
};
