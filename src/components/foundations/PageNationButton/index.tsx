import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType, PageNationButtonItemType } from '../../../types/common/propsTypes';
import { ImgButton } from '../../elements/ImgButton';

interface Props {
  mode: ModeType;
  items: PageNationButtonItemType[];
  size?: keyof Size['width'];
  item_count?: number;
  font_size?: keyof Size['font'];
  // 선택한 아이템에따른 쿼리 (상품, QA ....)
  selectChangeQuery?: (select: string) => void;
}

export const PageNationBotton = ({ mode, items, font_size = 'small', size = 'small', item_count = 5 }: Props) => {
  const [itemList, setItemList] = useState(items);
  const [num, setNum] = useState(0);
  const [select, setSelect] = useState<string>(items[0].id);

  const nextHandler = useCallback(() => {
    if (itemList.length - item_count > num) {
      const prev_num = num;
      setNum(num + item_count);
      setSelect(items[prev_num + item_count].id);
    }
  }, [num, item_count, itemList, items]);
  const prevHandler = useCallback(() => {
    if (num > 0) {
      const prev_num = num;
      setNum(num - item_count);
      setSelect(items[prev_num - item_count].id);
    }
  }, [num, item_count, items]);

  const selectHandler = useCallback((e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      setSelect(e.target.id);
    }
  }, []);

  useEffect(() => {
    if (itemList.length % item_count !== 0) {
      setItemList([...itemList, ...Array(item_count - (itemList.length % item_count))]);
    }
  }, [itemList, item_count]);

  return (
    <Container mode={mode} size={size}>
      {mode === 'dark' ? (
        <ImgButton img="/item/dark_prev_mode.svg" onClick={prevHandler} />
      ) : (
        <ImgButton img="/item/white_prev_mode.svg" onClick={prevHandler} />
      )}

      {itemList.slice(num, num + item_count).map((item, i) => {
        if (item)
          return (
            <Item key={i} id={item.id} onClick={selectHandler} mode={mode} select={select} font_size={font_size}>
              {item.title}
            </Item>
          );
        else return <Item></Item>;
      })}
      {mode === 'dark' ? (
        <ImgButton img="/item/dark_next_mode.svg" onClick={nextHandler} />
      ) : (
        <ImgButton img="/item/white_next_mode.svg" onClick={nextHandler} />
      )}
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'items'>>`
  display: flex;
  text-align: center;
  width: ${({ theme, size }) => size && theme.size.width[size]};
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div<{ mode?: ModeType; select?: string | null; font_size?: keyof Size['font'] }>`
  color: ${({ mode, theme, select, id }) => {
    if (mode === 'dark') {
      return id === select ? theme.color.yellow.yellow : theme.color.yellow.darkYellow;
    }
    return id === select ? theme.color.grey.black : theme.color.grey.grey060;

    // return select===id? theme.color.
  }};
  font-weight: ${({ id, select, theme }) => (id === select ? theme.fontWeight.heavy : theme.fontWeight.normal)};

  font-size: ${({ theme, font_size }) => font_size && theme.size.font[font_size]};
  height: 1rem;
  width: 1rem;
  cursor: pointer;
`;
