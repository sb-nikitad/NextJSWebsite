type Props = {
  width?: number;
  height?: number;
};

export const Separator = ({ width = 0, height = 0 }: Props) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }}></div>;
};
