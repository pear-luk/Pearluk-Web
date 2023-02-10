import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useCallback } from 'react';
import styled from 'styled-components';

import { ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { MenuToggle } from '../Menu';

export interface INavProps {
  mode: ModeType;
  // icon: INavIconType;
  archiveList: Archive[];
  menuState: boolean;
  setMenuState: Dispatch<SetStateAction<boolean>>;
  menu?: boolean; //menu표시일건지 뒤로가기 일건지
  centerLogo?: boolean; //
}

export const Nav = ({ mode, menuState, setMenuState, menu = true, centerLogo = true, archiveList }: INavProps) => {
  // mode 다크모드인지. 아닌지
  // const [mode, setMode] = useRecoilState(modeAtom);

  // nav 아이콘

  // 메뉴

  const menuClickHandler = useCallback(() => {
    setMenuState(!menuState);
  }, [setMenuState, menuState]);

  return (
    <>
      <NavContainer mode={mode}>
        <SideBox>
          <ItemBox>
            {menu === true ? (
              mode === 'dark' ? (
                <Image
                  alt="다크모드 메뉴버튼"
                  src={'/logo/white/menu.svg'}
                  onClick={menuClickHandler}
                  width={24}
                  height={24}
                  priority></Image>
              ) : (
                <Image
                  alt="화이트모드 메뉴버튼"
                  src={'/logo/black/menu.svg'}
                  onClick={menuClickHandler}
                  width={24}
                  height={24}
                  priority></Image>
              )
            ) : mode === 'dark' ? (
              <Image alt="다크모드 뒤로가기버튼" src={'/logo/white/back.svg'} width={24} height={24} priority></Image>
            ) : (
              <Image alt="화이트모드 뒤로가기버튼" src={'/logo/black/back.svg'} width={24} height={24} priority></Image>
            )}
          </ItemBox>
        </SideBox>
        <LogoBox>
          <Logo>
            {centerLogo ? (
              <Link href={'/'}>
                <Image
                  alt="홈 버튼"
                  src={mode === 'dark' ? `/logo/white/home.svg` : `/logo/black/home.svg`}
                  width={30}
                  height={30}
                  priority></Image>
              </Link>
            ) : (
              'LUK'
            )}
          </Logo>
        </LogoBox>
        <SideBox>
          <ItemBox>
            <Link href={'/my'}>
              {mode === 'dark' ? (
                <Image
                  alt="다크모드 마이페이지 버튼"
                  src={'/logo/white/my.svg'}
                  width={24}
                  height={24}
                  priority></Image>
              ) : (
                <Image
                  alt="화이트모드 마이페이지 버튼"
                  src={'/logo/black/my.svg'}
                  width={24}
                  height={24}
                  priority></Image>
              )}
            </Link>
          </ItemBox>
          <ItemBox>
            <Link href={'/cart'}>
              {mode === 'dark' ? (
                <Image
                  alt="다크모드 장바구니 버튼"
                  src={'/logo/white/cart.svg'}
                  width={24}
                  height={24}
                  priority></Image>
              ) : (
                <Image
                  alt="다크모드 장바구니 버튼"
                  src={'/logo/black/cart.svg'}
                  width={24}
                  height={24}
                  priority></Image>
              )}
            </Link>
          </ItemBox>
        </SideBox>
      </NavContainer>
      <MenuToggle menuState={menuState} setMenuState={setMenuState} archiveList={archiveList}></MenuToggle>
    </>
  );
};
const NavContainer = styled.nav<{ mode: ModeType }>`
  position: fixed;
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
  cursor: pointer;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.font.xlarge};
  color: ${({ theme }) => theme.color.yellow.yellow};
  line-height: ${({ theme }) => theme.size.font.xlarge};
`;
