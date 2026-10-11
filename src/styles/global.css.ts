import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html", {
  colorScheme: "dark",
});

globalStyle("body", {
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  fontFamily: vars.font.body,
  lineHeight: 1.5,
  margin: 0,
  minHeight: "100dvh",
  WebkitFontSmoothing: "antialiased",
});

globalStyle("button", {
  font: "inherit",
});
