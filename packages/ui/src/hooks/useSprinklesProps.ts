import { sprinkles, Sprinkles } from "../styles/sprinkles.css";

const useSprinklesProps = (props: Record<string, unknown> = {}) => {
  const sprinklesProps: Record<string, unknown> = {};
  const restProps: Record<string, unknown> = {};
  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = props[key as keyof typeof props];
    } else {
      restProps[key] = props[key as keyof typeof props];
    }
  }
  return { sprinklesProps, restProps };
};

export default useSprinklesProps;
