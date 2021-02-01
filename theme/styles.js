const styles = {
  global: {
    "@font-face": [
      {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: 300,
        src:
          "local(''),url('../fonts/poppins-v15-latin-300.woff2') format('woff2'),url('../fonts/poppins-v15-latin-300.woff') format('woff')",
      },
      {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: 400,
        src:
          "local(''),url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'),url('../fonts/poppins-v15-latin-regular.woff') format('woff')",
      },
      {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: 800,
        src:
          "local(''),url('../fonts/poppins-v15-latin-800.woff2') format('woff2'),url('../fonts/poppins-v15-latin-800.woff') format('woff')",
      },
    ],

    "html, body": {
      fontSize: "sm",
      color: "gray.600",
      background: "#FAFAFA 0% 0% no-repeat padding-box",
    },
    a: {
      color: "Primary100",
    },
    h1: {
      fontSize: ["lg", "xl"],
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "54px",
      color: "primary",
    },
    h2: {
      fontSize: "24px",
      fontFamily: "heading",
      fontWeight: "normal",
      color: "primary",
    },
    h3: {
      fontSize: "xl",
      fontFamily: "heading",
      fontWeight: "normal",
      lineHeight: "37px",
      color: "primary",
    },
    h4: {
      fontSize: ["md", "lg"],
      fontFamily: "heading",
      fontWeight: "medium",
      lineHeight: "36px",
      color: "primary",
    },
    h5: {
      fontSize: "md",
      fontFamily: "heading",
      fontWeight: "medium",
      lineHeight: "23px",
      color: "#222222",
    },
    h6: {
      fontSize: "14px",
      fontFamily: "heading",
      fontWeight: "medium",
      lineHeight: "19px",
      color: "#222222",
    },
  },
};

export default styles;
