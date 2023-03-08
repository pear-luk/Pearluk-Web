import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

// export interface MenuProps {}

export interface Props {
  //메뉴는 노란색으로 고정
  // mode: ModeType;

  menuState?: boolean;
}

export const AdminMenu = ({ menuState = true, ...props }: Props) => {
  const [menuSelect, setMenuSelect] = useState<string | null>(null);

  const itemClickHandler = useCallback(
    (e: React.MouseEvent): void => {
      const { target } = e;
      if (target instanceof HTMLDivElement) {
        const { title } = target;
        if (title === menuSelect || !title) {
          setMenuSelect(null);
        } else setMenuSelect(title as string);
      }
    },
    [menuSelect],
  );

  return (
    <Container {...props}>
      <LogoBox>
        <Image src="/logo/black/home.svg" width={30} height={30} alt="home logo" priority />
      </LogoBox>
      <MenuBox>
        <MenuItemBox>
          <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'ARCHIVE'}>
            <Item menuSelect={menuSelect} title={'ARCHIVE'}>
              <Link href={'/archives'}>ARCHIVE</Link>
            </Item>
          </MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'USER'}>
            <Item menuSelect={menuSelect} title={'USER'}>
              <Link href={'/users'}>USER</Link>
            </Item>
          </MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'ORDER'}>
            <Item menuSelect={menuSelect} title={'ORDER'}>
              <Link href={'/orders'}>ORDER</Link>
            </Item>
          </MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'SHIPPING'}>
            <Item menuSelect={menuSelect} title={'SHIPPING'}>
              <Link href={'/shippings'}>SHIPPING</Link>
            </Item>
          </MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'REFUND/RETURN'}>
            <Item menuSelect={menuSelect} title={'SHIPPING'}>
              <Link href={'/refunds'}>REFUND/RETURN</Link>
            </Item>
          </MenuItem>
        </MenuItemBox>
        <MenuItemBox>
          <MenuItem onClick={itemClickHandler} menuSelect={menuSelect} menuState={menuState} title={'NOTICE'}>
            <Item menuSelect={menuSelect} title={'NOTICE'}>
              <Link href={'/notice'}>NOTICE</Link>
            </Item>
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
  );
};

const Container = styled.div`
  /* width: 29.6rem; */
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.yellow.yellow};
  position: relative;
  min-width: 20rem;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
`;
// const LoginBox = styled.div`
//   position: absolute;

//   top: 4.8rem;
//   right: 3rem;
//   cursor: pointer;
// `;

const MenuBox = styled.div`
  position: absolute;

  margin: 17.2rem 0;
`;
const MenuItemBox = styled.div`
  width: 100%;
  /* background-color: blue; */
`;

const MenuItem = styled.div<{ menuSelect: string | null; menuState: boolean }>`
  padding: 1rem 0;
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
`;
const Item = styled.div<{ title: string; menuSelect: string | null }>`
  margin: 1rem 0;
  padding: 0 3rem;
`;
