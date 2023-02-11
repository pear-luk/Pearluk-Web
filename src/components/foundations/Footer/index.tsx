import Link from 'next/link';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { BusinessInfoType, ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  business_info: BusinessInfoType;
  font_size?: keyof Size['font'];
}

export const Footer = ({ mode, business_info, font_size = 'small' }: Props) => {
  const { insta, owner, business_email, business_name, business_number, business_tell } = business_info;

  return (
    <Container mode={mode} font_size={font_size}>
      <InfoBox>
        <InstaInfo>
          INSTA <Link href={`https://instagram.com/${insta}`}>@{insta}</Link>
        </InstaInfo>
        <BusinessInfo>{business_name}</BusinessInfo>
        <BusinessInfo>OWNER {owner}</BusinessInfo>
        <BusinessInfo>BUSINESS NO {business_number}</BusinessInfo>
        <BusinessInfo>TELL {business_tell}</BusinessInfo>
        <BusinessInfo>EMAIL {business_email}</BusinessInfo>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'business_info'>>`
  width: 100%;
  /* height: 20rem; */
  display: flex;
  z-index: 0;
  /* transform: translateY(-100%); */
  justify-content: center;
  position: absolute;
  padding: 8rem;

  /* color: #8f8c8c; */
  /* background-color: black; */
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.grey050 : theme.color.grey.black)};
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  padding-bottom: 8rem;

  font-size: ${({ theme, font_size }) => font_size && theme.size.font[font_size]};
  a {
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.grey050 : theme.color.grey.black)};
  }
  a:visited {
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.grey050 : theme.color.grey.black)};
  }
`;
const InfoBox = styled.div`
  height: auto;
`;

const Info = styled.div`
  text-align: center;
`;

const InstaInfo = styled(Info)`
  margin-bottom: 2rem;
`;

const BusinessInfo = styled(Info)`
  margin-bottom: 0.2rem; // 2px이 더 보기 좋은듯?
`;
