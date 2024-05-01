export interface MenuLinks {
  linkId: number;
  title: string;
  href: string;
}

export type TypeMenuLinks = MenuLinks[];

export const MENU__LINKS: TypeMenuLinks = [
  {
    linkId: 1,
    title: 'HOME',
    href: '/',
  },
  {
    linkId: 2,
    title: 'PHONES',
    href: 'phones',
  },
  {
    linkId: 3,
    title: 'TABLETS',
    href: 'tablets',
  },
  {
    linkId: 4,
    title: 'ACCESSORIES',
    href: 'accessories',
  },
];
