import { StaticImageData } from "next/image";

export interface ICategoryItemProps {
  categoryTitle: string;
  categoryModels: string;
  banner: StaticImageData;
  href: string;
}
