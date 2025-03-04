import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $primaryColor: #6a994e;
        $darkPrimaryColor: #386641;
        $lightPrimaryColor: #90a955;
        $secondaryColor: #48cae4;
        $darkSecondaryColor: #0077b6;
        $white: #ffffff;
        $black: #000000;
        $lightGrey: #C0C1C3;
        $grey: #97989A;
        $darkGrey: #3d3d3d;
        $red: #d61d16;
        $darkRed: #8a130f;
        $boxShadow: 5px 7px 9px 2px;
        $secondaryBoxShadow: 6px 11px 20px 1px;
        `,
      },
    },
  },
});
