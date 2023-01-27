import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuToggle } from '../Menu';

export const Nav = ({ mode = 'dark', logo = true, menu = true, ...props }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const menuClickHandler = (e) => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    console.log(menuStatus);
  }, [menuStatus]);
  return (
    <>
      <NavContainer mode={mode}>
        <SideBox>
          <ItemBox>
            {menu === true ? (
              mode === 'dark' ? (
                <img src={'./logo/white/menu.svg'} onClick={menuClickHandler}></img>
              ) : (
                <img src={'./logo/black/menu.svg'} onClick={menuClickHandler}></img>
              )
            ) : mode === 'dark' ? (
              <img src={'./logo/white/back.svg'}></img>
            ) : (
              <img src={'./logo/black/back.svg'}></img>
            )}
          </ItemBox>
        </SideBox>
        <LogoBox>
          <Logo>
            {logo ? <img src={mode === 'dark' ? `./logo/white/home.svg` : `./logo/black/home.svg`}></img> : 'LUK'}
          </Logo>
        </LogoBox>
        <SideBox>
          <ItemBox>
            {mode === 'dark' ? <img src={'./logo/white/my.svg'}></img> : <img src={'./logo/black/my.svg'}></img>}
          </ItemBox>
          <ItemBox>
            {mode === 'dark' ? <img src={'./logo/white/cart.svg'}></img> : <img src={'./logo/black/cart.svg'}></img>}
          </ItemBox>
        </SideBox>
      </NavContainer>
      <MenuToggle menuClickHandler={menuClickHandler} menuStatus={menuStatus}></MenuToggle>
    </>
  );
};
const NavContainer = styled.nav<{ mode: string }>`
  position: sticky;
  top: 0;

  display: flexbox;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  height: ${({ theme }) => theme.size.space.xlarge};
  width: 100%;

  padding: 0 ${({ theme }) => theme.size.space.xxsmall};

  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
`;

const Box = styled.div`
  width: ${({ theme }) => theme.size.space.base};
  height: ${({ theme }) => theme.size.space.base};
  display: flex;
`;

const LogoBox = styled(Box)`
  /* background-color: red; // test */

  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 100%;

  color: white;
`;

const SideBox = styled(Box)`
  /* background-color: blue; // test */

  width: ${({ theme }) => theme.size.space.superLarge};
`;

const ItemBox = styled.div`
  /* background-color: red; // test */
  width: 2.4rem;
  height: 100%;

  margin: 0 0.8rem;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.font.xlarge};
  color: ${({ theme }) => theme.color.yellow.yellow};
  line-height: ${({ theme }) => theme.size.font.xlarge};
`;
