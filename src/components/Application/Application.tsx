import React from 'react';

import './index.scss';
import { ColorSwatch } from './ColorSwatch';
import { toRGB } from './utils';
import { RGBContext } from './context';
import ColorAdjustment from './ColorAdjustment';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';

const ApplicationWithContext = () => {
  const { ...rgb } = React.useContext(RGBContext);
  return (
    <main
      style={{
        borderColor: toRGB(rgb)
      }}
    >
      <ColorSwatch />
      <ColorAdjustment Adjustment={ColorInput} />
      <ColorAdjustment Adjustment={ColorSlider} />
    </main>
  );
};

export default ApplicationWithContext;
