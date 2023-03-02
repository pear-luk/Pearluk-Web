import styled from 'styled-components';
import { CheckBox } from '../../elements/CheckBox';
import { InputLabel } from '../../foundations/InputLabel';

type Status = Record<string, { title: string; number: number }>;

interface Props {
  status: Status;
}
export const ArchiveProductSearchCard = ({ status = {} }: Props) => {
  return (
    <Container>
      <Box>
        <p>검색</p>
        <div>
          <InputLabel label="상품명" mode="white" label_type="left" input_width="medium" />
        </div>
      </Box>
      <BoxCheck>
        <p>판매상태</p>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
      </BoxCheck>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 3.2rem 2.4rem;
  border: 1px solid black;
  min-width: 50.4rem;

  justify-content: space-around;
  justify-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-items: left;
  text-align: center;
  font-size: 1.6rem;
  align-items: center;
  justify-content: space-between;
`;

const BoxCheck = styled(Box)`
  margin: 0.8rem 0;
  text-align: center;

  align-items: start;
`;

const CheckItem = styled.div`
  display: flex;
  justify-content: center;
`;
