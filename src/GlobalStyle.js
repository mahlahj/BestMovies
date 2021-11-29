import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medPurple: #373b69; 
    --darkPurple: #22254b;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;  
  }
  body {  
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--white);
    }
    .tag {
      border-radius: 5px;
      font-weight: bold;
      padding: 0.5rem;
    }
    .tag.green {
    color: green;
    }
    .tag.orange {
    color: orange;
    }
    .tag.red {
    color: red;
    }
  }
`;