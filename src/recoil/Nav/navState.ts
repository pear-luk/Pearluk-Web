import { atom } from 'recoil';

/**
 * Nav 아이콘 상태
 *
 * - left
 * menu icon => true
 * back icon => false
 *
 * - center
 * logo icon => true
 * LUK 글자 => false
 *
 */
export interface INavIconType {
  menu: boolean;
  logo: boolean;
}

export const navIconAtom = atom<INavIconType>({
  key: 'navIconState',
  default: {
    menu: true,
    logo: true,
  },
});

/**
 * 메뉴 open close
 *
 * open => true
 * close => false
 */

export const menuAtom = atom<boolean>({
  key: 'menuState',
  default: false,
});

/**
 * 메뉴 중 선택된 것
 *
 */
export type MenuSelectType = 'ABOUT' | 'ARCHIVE' | 'QA' | null;

export const menuSelectAtom = atom<MenuSelectType>({
  key: 'menuSelectState',
  default: null,
});
