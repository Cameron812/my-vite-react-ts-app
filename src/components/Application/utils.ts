import { RGBColorType } from '../../typings/index';

export const toRGB = ({ red, green, blue }: RGBColorType): string => {
  return `rgb(${red}, ${green}, ${blue})`;
};
