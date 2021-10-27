import { createContext, useContext } from 'react';

export const CanvasContext = createContext<{
  context: CanvasRenderingContext2D | undefined;
}>({
  context: undefined,
});

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
