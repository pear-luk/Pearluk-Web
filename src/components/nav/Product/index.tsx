import styled from 'styled-components';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;

  display: flexbox;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  height: ${({ theme }) => theme.size.space.xlarge};
  width: 100%;

  padding: 0 ${({ theme }) => theme.size.space.xxsmall};

  background-color: ${({ theme }) => theme.color.grey.black};
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

export const NavMain = ({ ...props }) => {
  return (
    <NavContainer>
      <SideBox>
        <ItemBox>
          <img src={'./logo/menu.png'}></img>
        </ItemBox>
      </SideBox>
      <LogoBox>
        <Logo>LUK</Logo>
      </LogoBox>
      <SideBox>
        <ItemBox>
          <img src={'./logo/my.png'}></img>
        </ItemBox>
        <ItemBox>
          <img src={'./logo/cart.png'}></img>
        </ItemBox>
      </SideBox>
    </NavContainer>
  );
};
