export const padding = {
  layoutPadding_X: "6rem",
  layoutPadding_X_Mobile: "1rem",
};

export const URL = {
  root: process.env.NEXT_PUBLIC_BACKEND || "http://localhost:5000",
};

export const TOKEN_NAME = "AUTH_TOKEN";

export const SearchDrawerHeaderMaxWidth = "800px";
export const SearchDrawerCartMaxHeight = "800px";

export const InputRadius = "24px";

export const productCartHeight = "30rem";

export const currency = {
  code: "BDT",
  symbol: "৳",
};

export const generateRange = (start: number, end: number) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

export const cartBoxShadow = "0px 0px 8px -4px #C09671";

export const searchInputWidth = "30rem";

export const CartDrawerWidth = "30rem";
export const HeaderZIndex = "999";

export const borderRadius = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  xxl: "24px",
};
