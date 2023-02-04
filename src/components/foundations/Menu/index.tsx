import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useLogout } from '../../../hooks/services/mutation/logout';
import { loginState } from '../../../recoil/auth/stats';

import { MenuSelectType } from '../../../recoil/Nav/navState';

// export interface MenuProps {}
type SetType<T> = (t: T) => void;
export interface Props {
  //메뉴는 노란색으로 고정
  // mode: ModeType;

  menuState: boolean;
  setMenuState: SetType<boolean>;
}
export const MenuToggle = ({ menuState, setMenuState, ...props }: Props) => {
  const [menuSelect, setMenuSelect] = useState<MenuSelectType>(null);
  const isLogin = useRecoilValue(loginState);
  const itemClickHandler = useCallback(
    (e: React.MouseEvent): void => {
      const { target } = e;
      if (target instanceof HTMLDivElement) {
        const { title } = target;
        if (title === menuSelect || !title) {
          setMenuSelect(null);
        } else setMenuSelect(title as MenuSelectType);
      }
    },
    [menuSelect],
  );
  const menuClickHandler = useCallback(() => {
    setMenuState(!menuState);
  }, [setMenuState, menuState]);

  const { mutate: logoutMutate } = useLogout();
  const logoutClickHandler = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      logoutMutate();
    },
    [logoutMutate],
  );

  return (
    <Wrapper
      menuState={menuState}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setMenuState(!menuState);
        setMenuSelect(null);
      }}>
      <Container {...props}>
        <LogoBox>
          <Image src="./logo/black/home.svg" width={30} height={30} alt="home logo" />
        </LogoBox>
        <LoginBox>
          {isLogin ? <div onClick={logoutClickHandler}>LOG OUT</div> : <Link href={'/login'}>LOG IN</Link>}
        </LoginBox>
        <MenuBox>
          <MenuItemBox>
            <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'ABOUT'}>
              <Item menuSelect={menuSelect} title={'ABOUT'}>
                <Link href={'/about'}>ABOUT</Link>
              </Item>
            </MenuItem>
          </MenuItemBox>
          <MenuItemBox>
            <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'ARCHIVE'}>
              <Item menuSelect={menuSelect} title={'ARCHIVE'}>
                ARCHIVE
              </Item>
              {/* 아카이브 모아보기 map 돌려야함. */}
              <ArchiveItem menuSelect={menuSelect} onClick={menuClickHandler} title={'ALL'}>
                ALL
              </ArchiveItem>
              <ArchiveItem menuSelect={menuSelect} onClick={menuClickHandler} title={'22 F/W'}>
                22 F/W
              </ArchiveItem>
              <ArchiveItem menuSelect={menuSelect} onClick={menuClickHandler} title={'22 S/S'}>
                22 S/S
              </ArchiveItem>
              <ArchiveItem menuSelect={menuSelect} onClick={menuClickHandler} title={'OFF'}>
                OFF
              </ArchiveItem>
            </MenuItem>
          </MenuItemBox>
          <MenuItemBox>
            <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'QA'}>
              <Item menuSelect={menuSelect} title={'QA'}>
                <Link href={'/qa'}>QA</Link>
              </Item>
            </MenuItem>
          </MenuItemBox>
        </MenuBox>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ menuState: boolean }>`
  z-index: 9999;
  transition: all 0.5s;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  ${({ menuState }) => {
    return menuState ? 'left:0;' : null;
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
  cursor: pointer;
`;

const MenuBox = styled.div`
  margin: 17.2rem 0;
  /* background-color: green; */
`;
const MenuItemBox = styled.div`
  width: 100%;
  /* background-color: blue; */
`;

const ArchiveItem = styled.div<{ menuSelect: MenuSelectType }>`
  overflow: hidden;
  font-size: 1.4rem;
  align-content: center;

  height: 0;
  padding: 0 3rem;
  width: 29.6rem;
  transition: all 0.3s;

  ${({ menuSelect, theme }) => {
    if (menuSelect === 'ARCHIVE') {
      return ` 
      height: 3.2rem;
      display: block;
      padding: 1rem 3rem;

      color:${theme.color.yellow.yellow};
      `;
    }
  }}
`;

const MenuItem = styled.div<{ menuSelect: MenuSelectType; menuState: boolean }>`
  padding: 3rem 0;
  transition: all 0.3s;
  a {
    color: ${({ theme }) => theme.color.grey.black};
  }
  a:visited {
    color: ${({ theme }) => theme.color.grey.black};
  }
  background-color: ${({ theme }) => theme.color.yellow.yellow};
  ${({ title, menuSelect, theme, menuState }) =>
    title === menuSelect && menuState
      ? `
      background-color:${theme.color.grey.grey070};
      color : ${theme.color.yellow.yellow};
      a {
        color : ${theme.color.yellow.yellow};
      }
      a:visited {
        color : ${theme.color.yellow.yellow};
      }
      `
      : `
      `}

  font-size: 2rem;
  /* :hover {
    background-color: ${({ theme }) => theme.color.grey.grey070};
    color: ${({ theme }) => theme.color.yellow.yellow};
    a {
      color: ${({ theme }) => theme.color.yellow.yellow};
    }
    a:visited {
      color: ${({ theme }) => theme.color.yellow.yellow};
    }
  } */
`;
const Item = styled.div<{ title: string; menuSelect: string | null }>`
  margin: 1rem 0;
  padding: 0 3rem;
`;
