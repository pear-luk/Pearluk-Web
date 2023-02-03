import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { ModeType } from '@types/common/mode.ts';
import { INavIconType } from '../../recoil/Nav/navState';
import { MenuToggle } from '../Menu';

type SetType<T> = (t: T) => void;
export interface INavProps {
  mode: ModeType;
  icon: INavIconType;
  menuState: boolean;
  setMenuState: SetType<any>;
}

export const Nav = ({ mode, icon, menuState, setMenuState, ...props }: INavProps) => {
  // mode 다크모드인지. 아닌지
  // const [mode, setMode] = useRecoilState(modeAtom);

  // nav 아이콘
  const { menu, logo } = icon;

  // 메뉴

  const menuClickHandler = () => {
    setMenuState(!menuState);
  };

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
                  height={24}></Image>
              ) : (
                <Image
                  alt="화이트모드 메뉴버튼"
                  src={'/logo/black/menu.svg'}
                  onClick={menuClickHandler}
                  width={24}
                  height={24}></Image>
              )
            ) : mode === 'dark' ? (
              <Image alt="다크모드 뒤로가기버튼" src={'/logo/white/back.svg'} width={24} height={24}></Image>
            ) : (
              <Image alt="화이트모드 뒤로가기버튼" src={'/logo/black/back.svg'} width={24} height={24}></Image>
            )}
          </ItemBox>
        </SideBox>
        <LogoBox>
          <Logo>
            {logo ? (
              <Link href={'/'}>
                <Image
                  alt="홈 버튼"
                  src={mode === 'dark' ? `/logo/white/home.svg` : `/logo/black/home.svg`}
                  width={30}
                  height={30}></Image>
              </Link>
            ) : (
              'LUK'
            )}
          </Logo>
        </LogoBox>
        <SideBox>
          <ItemBox>
            {mode === 'dark' ? (
              <Image alt="다크모드 마이페이지 버튼" src={'/logo/white/my.svg'} width={24} height={24}></Image>
            ) : (
              <Image alt="화이트모드 마이페이지 버튼" src={'/logo/black/my.svg'} width={24} height={24}></Image>
            )}
          </ItemBox>
          <ItemBox>
            {mode === 'dark' ? (
              <Image alt="다크모드 장바구니 버튼" src={'/logo/white/cart.svg'} width={24} height={24}></Image>
            ) : (
              <Image alt="다크모드 장바구니 버튼" src={'/logo/black/cart.svg'} width={24} height={24}></Image>
            )}
          </ItemBox>
        </SideBox>
      </NavContainer>
      <MenuToggle mode={mode} menuState={menuState} setMenuState={setMenuState}></MenuToggle>
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
