module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': 'Roboto',
      },
      colors: {
        orangeColor: "#EC5424",
        blueishGray: "#EBF0F4",
        lightSidebar: "#1b2b36",
        darkSidebar: "#16232d",
        authFullBg: "#151620",
        authBg: "#edf0f7",
        authBtn: "#212e5a",
        authBeige: "#f5f7fa",
        authBlue: "#126de5",
        authGrey: "#424446",
        seperatorSidebar: "#151619",
        highlightSidebar: "#51c5ea",
        textSidebar: "#828c96",
        contentHead: "#eeeeee",
        contentButton: "#f8f8f9",
        cardHeaderBg: "#4e6073",
        cardHeaderTitle: "#ffffff",
        // primary: "#eb5424",

        primary: "var(--color-primary)",
        hoverPrimary: "var(--color-hoverPrimary)",
        sidebar: "var(--color-sidebar)",
        mainWrapper: "var(--color-mainWrapper)",
        contentHeader: "var(--color-contentHeader)",
        cardTitle: "var(--color-cardTitle)",
        cellOrange: "var(--color-cellOrange)",

      },
      padding: {
        ipy: "var(--input-py)"
      },
      fontSize: {
        "9": "9px",
        "10": "10px",
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '18': '18px',
        '20': '20px',

        iicon: "var(--icon-size)",

      },
      lineHeight: {
        '14': '3.5rem',
      },
      height: {
        '96vH': '96vH',
        'authModal': '550px',
        'selHeight': "var(--select-height)"

      },
      tab: {
          base: "var(--tab-base)",
          active: "var(--tab-active)",
          hover: "var(--tab-hover)"
        },
      gray: {
          '900': '#444444',
          '800': '#555555',
          '700': '#666666'
        },
      borderRadius: {
       ibr: "var(--border-radius)"
      },
      animation: {
        skeleton: 'pulse .6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        skeleton: {
          '0%, 100%': { opacity: '.4' },
          '50%': { opacity: '0,3' },
        }
      }

    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      textColor: ['visited'],
      backgroundColor: ['visited'],
      rotate: ['active', 'hover'],
      patterns: {
        opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
        },
        sizes: {
          1: "0.25rem",
          2: "0.5rem",
          3: "0.75rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
        }
      }

    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('tailwindcss-bg-patterns')
  ]
}
