import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "grid",
});

export const card = style({
  background: "white",
  border: "1px solid #eeeeee",
  borderRadius: "8px",
  boxShadow: "0 4px 12px #0000001a",
  gridArea: "1 / 1",
  height: "74px",
  transform:
    "scale(calc( 1 - var(--index) * var(--scale-increment))) translateY(calc(var(--index) * var(--translate-increment)))",
  vars: {
    "--scale-increment": "0.05",
    "--translate-increment": "-13%",
  },
  width: "356px",
});
