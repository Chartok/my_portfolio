import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      
      :root {
        --bg-color: #1f242d;
        --second-bg-color: #323946;
        --text-color: #fff;
        --main-color: #0ef;
        --padding-standard: 10px;
        --transition-standard: 0.3s;
      }
      
      body {
        background: var(--bg-color);
        padding: var(--padding-standard);
        color: var(--text-color);
      }
      
      header,
      nav,
      section {
        padding: var(--padding-standard);
      }
      
      span {
        color: var(--main-color)
      }
      `
    }
  }
});

// @media (max-width: 1200px) {
//   :root {
//     --padding-standard: 5px;
//   }
// }

// @media (max-width: 991px) {
//   header {
//     padding: 2rem 3%;
//   }

//   section {
//     padding: 10rem 3% 2rem;
//   }
// }

// @media (max-width: 768px) {
//   nav.navbar {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     padding: 1rem 3%; 
//     background: var(--bg-color);
//     border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
//     box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
//   }

//   nav.navbar a {
//     display: block;
//     font-size: 16px;
//     margin: 3rem 0;
//   }
// }

export default theme;