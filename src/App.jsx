import React from "react";
import { css, Global } from "@emotion/core";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Global
        styles={css`
          :root {
            --cyan: hsl(180, 66%, 49%);
            --darkViolet: hsl(257, 27%, 26%);
            --red: hsl(0, 87%, 67%);
            --gray: hsl(0, 0%, 75%);
            --grayishViolet: hsl(257, 7%, 63%);
            --veryDarkBlue: hsl(255, 11%, 22%);
            --veryDarkViolet: hsl(260, 8%, 14%);
          }

          body {
            margin: 0;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            color: var(--rojito);
            font-size: 18px;
          }

          .wrapper {
            padding: 0px 1em;
            box-sizing: border-box;
          }

          @media screen and (min-width: 768px) {
            .wrapper {
              padding: 0px 40px;
              max-width: 1440px;
              margin: auto;
            }
          }
        `}
      />
      <Navbar />
      <h1>ESte es un contenido maravilloso</h1>
    </div>
  );
}

export default App;
