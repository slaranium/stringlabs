import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
    "!./src/pages/og-image/[slug].png.ts",
  ],
  corePlugins: {
    aspectRatio: false,
    borderOpacity: false,
    fontVariantNumeric: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    scrollSnapType: false,
    textOpacity: false,
    touchAction: false,
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(({ addComponents }) => {
      addComponents({
        ".cactus-link": {
          "&:hover": {
            "@apply decoration-link decoration-2": {},
          },
          "@apply underline underline-offset-2": {},
        },
        ".title": {
          "@apply text-2xl font-semibold text-accent-2": {},
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        accent: "hsl(var(--theme-accent) / <alpha-value>)",
        "accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
        bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
        link: "hsl(var(--theme-link) / <alpha-value>)",
        quote: "hsl(var(--theme-quote) / <alpha-value>)",
        textColor: "hsl(var(--theme-text) / <alpha-value>)",
        darkBg: "#1a1a1a",
        darkText: "#e0e0e0",
        darkButtonBg: "#292929",
        darkButtonText: "rgb(41, 188, 137)",
        darkButtonBgActive: "#1a1a1a",
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
      transitionProperty: {
        height: "height",
      },
      typography: (theme) => ({ // Pastikan theme digunakan dengan benar
        DEFAULT: {
          css: {
            a: {
              "@apply cactus-link": "",
            },
            blockquote: {
              borderLeftWidth: "0",
            },
            code: {
              border: "1px dotted #666",
              borderRadius: "2px",
            },
            hr: {
              borderColor: theme("colors.gray.200"),
              borderWidth: "1px",
            },
          },
        },
      }),
    },
  },
}
