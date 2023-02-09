import React, { RefObject, useCallback, useEffect, useState } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { UserAddress } from '../../../types/model/user';
import { Button } from '../../elements/Button';

interface Props {
  mode: ModeType;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  address?: Partial<UserAddress>;
  userAddress: Partial<UserAddress> | undefined;
  setUserAddress: React.Dispatch<React.SetStateAction<Partial<UserAddress>>>;
  setAddress?: () => void;
  ref?: RefObject<HTMLInputElement>;

  // setPhoneNumber?: Dispatch<SetStateAction<string>>;
}
export const InputAddress = ({
  mode,

  input_width = 'medium',
  input_height = 'base',
  // address,
  userAddress,
  setUserAddress,
  label_size = 'medium',
  label_weight = 'bold',
}: Props) => {
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false);
  const onCompletePost = ({ address, zonecode }: Address) => {
    const full_address = `${address}`;
    const post_code = zonecode;
    setUserAddress({ ...userAddress, address, full_address, post_code });
    setIsOpenPost(false);
  };
  const onChangeOpenPost = useCallback(() => {
    setIsOpenPost(!isOpenPost);
  }, [isOpenPost]);
  useEffect(() => {

  }, [userAddress]);

  const detailOnChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target) {
        setUserAddress({
          ...userAddress,
          full_address: `${userAddress?.address}, ${e.target.value}`,
          detail_address: e.target.value,
        });
      }
    },
    [userAddress, setUserAddress],
  );
  return (
    <Container
      mode={mode}
      label_size={label_size}
      label_weight={label_weight}
      input_width={input_width}
      input_height={input_height}>
      {isOpenPost ? (
        <div>
          <DaumPostcodeEmbed autoClose onComplete={onCompletePost} />
        </div>
      ) : (
        <>
          <Label>POSTCODE</Label>
          <PostCodeBox>
            <PostCodeInput value={(userAddress && userAddress.post_code) || ''} disabled></PostCodeInput>
            <ButtonBox>
              <Button
                color={mode === 'dark' ? 'yellow' : 'black'}
                label="SEARCH"
                size="large"
                onClick={onChangeOpenPost}></Button>
            </ButtonBox>
          </PostCodeBox>
          <Label>ADDRESS</Label>
          <AddressInput
            rows={2}
            cols={20}
            value={(userAddress && userAddress.address) || ''}
            readOnly
            disabled></AddressInput>
          <DetailAddressInput
            onChange={detailOnChangeHandler}
            value={userAddress && userAddress.detail_address}
            disabled={!userAddress}></DetailAddressInput>
        </>
      )}
      {/* <DaumPostcodeEmbed autoClose onComplete={onCompletePost} />

      <Label>POSTCODE</Label>
      <PostCodeBox>
        <PostCodeInput disabled></PostCodeInput>
        <ButtonBox>
          <Button
            color={mode === 'dark' ? 'yellow' : 'black'}
            label="SEARCH"
            size="large"
            onClick={onChangeOpenPost}></Button>
        </ButtonBox>
      </PostCodeBox>
      <Label>ADDRESS</Label>
      <AddressInput rows={2} cols={20} readOnly disabled></AddressInput>
      <DetailAddressInput></DetailAddressInput> */}
    </Container>
  );
};
const PostCodeInput = styled.input`
  width: auto;
  width: 100%;
  flex-basis: auto;
`;
const AddressInput = styled.textarea`
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;

  width: 100%;

  resize: none;
`;

const Container = styled.div<Pick<Props, 'mode' | 'label_size' | 'label_weight' | 'input_width' | 'input_height'>>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ label_size, theme }) => label_size && theme.size.font[label_size]};

  width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
  label {
    margin-top: 0.8rem;
    font-weight: ${({ theme, label_weight }) => label_weight && theme.fontWeight[label_weight]};
    display: block;
  }
  input {
    outline: none;
    display: block;
    /* margin: ${({ theme }) => theme.size.space.xxsmall} 0; */

    background-color: transparent;
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
    font-size: 1.4rem;
    width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
    height: ${({ theme, input_height }) => input_height && theme.size.space[input_height]};
  }
  ${AddressInput} {
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

    outline: none;
    height: ${({ theme, input_height }) => input_height && `calc(${theme.size.space[input_height]} * 2)`};
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
`;

const Label = styled.label``;

const ButtonBox = styled.div`
  margin-left: 0.6rem;
  flex: 1 0 auto;
`;

const DetailAddressInput = styled.input``;

const PostCodeBox = styled.div`
  display: flex;
  align-items: center;
`;
