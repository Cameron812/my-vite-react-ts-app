import React, { createContext } from 'react';

import { reducer, AdjustmentAction } from './reducer';
import { RGBColorType } from '../../typings';

type RGBContextType = RGBColorType & {
  dispatch: React.Dispatch<AdjustmentAction>;
};
export const RGBContext = createContext<RGBContextType>({} as RGBContextType);

const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0
};
export const RGBContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, initialState);
  return (
    <RGBContext.Provider value={{ ...rgb, dispatch }}>
      {children}
    </RGBContext.Provider>
  );
};
