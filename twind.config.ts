import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  fontFamily: {
    sans: ["Helvetica", "sans-serif"],
    serif: ["Times", "serif"],
  },
  theme: {
    colors: {
      "black-russian": "#262528",
      "french-gray": "#BEBEBE",
    },
  },
} as Options;
