import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  icon?: string;
  textStyles?: string;
  isDisabled?: boolean;
}

export interface Option {
  label: string;
  value: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}

export interface CustomFilterProps {
  title: string;
  options: Option[];
}

export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}
