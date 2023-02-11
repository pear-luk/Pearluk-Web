import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType, PageNationButtonItemType } from '../../../types/common/propsTypes';
import { ImgButton } from '../../elements/ImgButton';

interface Props {
  mode: ModeType;
  items: PageNationButtonItemType[];
  size?: keyof Size['width'];
  width?: string;
  item_count?: number;
  font_size?: keyof Size['font'];
  // 선택한 아이템에따른 쿼리 (상품, QA ....)
  url?: string;
  now_id?: string;
  selectChangeQuery?: (select: string) => void;
}

//렌더링 5번 됨.
export const PageNationBotton = ({
  mode,
  items,
  font_size = 'small',
  size = 'small',
  item_count = 5,
  width,
  url,
  now_id,
}: Props) => {
  const [itemList, setItemList] = useState<PageNationButtonItemType[]>([]);
  const [num, setNum] = useState(0);
  const [select, setSelect] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (itemList.length % item_count !== 0) {
      setItemList([...itemList, ...Array(item_count - (itemList.length % item_count))]);
    }
  }, [itemList, item_count]);

  const nextHandler = useCallback(() => {
    if (itemList.length - item_count > num) {
      const prev_num = num;
      setNum(num + item_count);
      setSelect(items[prev_num + item_count].id);
      router.push(url + items[prev_num + item_count].id);
    }
  }, [itemList.length, item_count, items, num, router, url]);

  const prevHandler = useCallback(() => {
    if (num > 0) {
      const prev_num = num;
      setNum(num - item_count);
      setSelect(items[prev_num - item_count].id);
      router.push(url + items[prev_num - item_count].id);
    }
  }, [item_count, items, num, router, url]);

  const selectHandler = useCallback((e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      setSelect(e.target.id);
    }
  }, []);

  useEffect(() => {
    if (now_id) {
      const now_item = items.find((element, index) => {
        setNum(Math.floor(index / item_count) * item_count);
        return element.id === now_id;
      });
      if (now_item) setSelect(now_item.id);
    } else {
      items[0] && setSelect(items[0].id);
    }
    setItemList(items);
  }, [items, now_id, item_count]);

  return (
    <Container mode={mode} size={size} width={width}>
      <ButtonBox>
        {mode === 'dark' ? (
          <ImgButton img="/item/dark_prev_mode.svg" onClick={prevHandler} />
        ) : (
          <ImgButton img="/item/white_prev_mode.svg" onClick={prevHandler} />
        )}
      </ButtonBox>

      {itemList.slice(num, num + item_count).map((item, i) => {
        if (item)
          return (
            <ItemBox key={item.title + item.id}>
              <Link href={url + item.id}>
                <Item id={item.id} onClick={selectHandler} mode={mode} select={select} font_size={font_size}>
                  {item.title}
                </Item>
              </Link>
            </ItemBox>
          );
        else return <ItemBox key={i}></ItemBox>;
      })}
      <ButtonBox>
        {mode === 'dark' ? (
          <ImgButton img="/item/dark_next_mode.svg" onClick={nextHandler} />
        ) : (
          <ImgButton img="/item/white_next_mode.svg" onClick={nextHandler} />
        )}
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'items'>>`
  display: flex;
  text-align: center;
  width: ${({ theme, size, width }) => (width ? width : size && theme.size.width[size])};

  justify-content: space-between;
  align-items: center;
`;
const ButtonBox = styled.div`
  /* flex: auto; */
`;

const ItemBox = styled.div`
  width: 100%;
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
  text-align: center;

  font-size: ${({ theme, font_size }) => font_size && theme.size.font[font_size]};
  height: 1rem;
  width: fit-content;
  margin: auto;

  cursor: pointer;
`;
