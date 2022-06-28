import React, { ChangeEvent } from 'react';
import { RGBContext } from './context';

type AdjustmentType = {
  id: string;
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
type ColorAdjustmentType = {
  Adjustment: React.ComponentType<AdjustmentType>;
};

export default function ColorAdjustment({ Adjustment }: ColorAdjustmentType) {
  const { red, green, blue, dispatch } = React.useContext(RGBContext);
  const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +event.target.value });
  };

  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +event.target.value });
  };

  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +event.target.value });
  };
  return (
    <section className="color-inputs">
      <Adjustment id="red-input" label="Red" value={red} onChange={adjustRed} />
      <Adjustment
        id="green-input"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <Adjustment
        id="blue-input"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
}
