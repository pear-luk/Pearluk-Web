import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// export interface MenuProps {}

export const MenuToggle = ({ menuStatus, ...props }) => {
  const [menuFocus, setMenuFocus] = useState<string | null>(null);
  const { menuClickHandler } = props;
  console.log(menuClickHandler);
  useEffect(() => {
    console.log(menuStatus);
  }, [menuStatus]);

  const itemClickHandler = (e) => {
    if (e.target.title === menuFocus || !e.target.title) {
      return setMenuFocus(null);
    }
    setMenuFocus(e.target.title);
  };
  return (
    <Wrapper
      menuStatus={menuStatus}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        menuClickHandler();
      }}>
      <Container {...props}>
        <LogoBox>
          <Image src="./logo/black/home.svg" width={30} height={30} alt="home logo" />
        </LogoBox>
        <LoginBox>LOG IN</LoginBox>
        <MenuBox>
          <MenuItemBox>
            <MenuItem menuFocus={menuFocus} menuStatus={menuStatus} title={'ABOUT'}>
              <Item onClick={itemClickHandler} menuFocus={menuFocus} title={'ABOUT'}>
                ABOUT
              </Item>
            </MenuItem>
          </MenuItemBox>
          <MenuItemBox>
            <MenuItem menuFocus={menuFocus} menuStatus={menuStatus} title={'ARCHIVE'}>
              <Item onClick={itemClickHandler} menuFocus={menuFocus} menuStatus={menuStatus} title={'ARCHIVE'}>
                ARCHIVE
              </Item>
              {/* 아카이브 모아보기 map 돌려야함. */}
              <ArchiveItem onClick={menuClickHandler} menuFocus={menuFocus} title={'ALL'}>
                ALL
              </ArchiveItem>
              <ArchiveItem onClick={menuClickHandler} menuFocus={menuFocus} title={'22 F/W'}>
                22 F/W
              </ArchiveItem>
              <ArchiveItem onClick={menuClickHandler} menuFocus={menuFocus} title={'22 S/S'}>
                22 S/S
              </ArchiveItem>
              <ArchiveItem onClick={menuClickHandler} menuFocus={menuFocus} title={'OFF'}>
                OFF
              </ArchiveItem>
            </MenuItem>
          </MenuItemBox>
          <MenuItemBox>
            <MenuItem menuFocus={menuFocus} menuStatus={menuStatus} title={'QA'}>
              <Item onClick={itemClickHandler} menuFocus={menuFocus} title={'QA'}>
                QA
              </Item>
            </MenuItem>
          </MenuItemBox>
        </MenuBox>
      </Container>
    </Wrapper>
  );
};
const Other = styled.div``;
const Wrapper = styled.div`
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  ${({ menuStatus }) => {
    return menuStatus ? 'left:0;' : null;
  }}/* background-color: red; */
`;
const Container = styled.div`
  position: fixed;

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
  /* background-color: green; */
`;
const MenuItemBox = styled.div`
  width: 100%;
  /* background-color: blue; */
`;

const ArchiveItem = styled.div`
  overflow: hidden;
  font-size: 1.4rem;
  align-content: center;
  color: ${({ theme }) => theme.color.yellow.yellow};
  height: 0;
  padding: 0 3rem;
  width: 29.6rem;
  transition: all 0.3s;
  ${({ title, menuFocus, theme }) => {
    if (menuFocus === 'ARCHIVE') {
      return ` 
      height: 3.2rem;
      display: block;
      padding: 1rem 3rem;
      color:${theme.color.yellow.yellow};
      `;
    }
  }}
`;

const MenuItem = styled.div`
  padding: 3rem 0;
  transition: all 0.3s;

  background-color: ${({ theme }) => theme.color.yellow.yellow};
  ${({ title, menuFocus, theme, menuStatus }) =>
    title === menuFocus && menuStatus
      ? `
      background-color:${theme.color.grey.grey070};
      color : ${theme.color.yellow.yellow};
      `
      : `
      `}

  font-size: 2rem;
`;
const Item = styled.div<{ title: string; menuFocus: string | null }>`
  margin: 1rem 0;
  padding: 0 3rem;
`;
