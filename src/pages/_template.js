import { html } from 'delgada/template.js';
import { Navbar, styles as NavbarStyles } from '../components/Navbar.js';

export const styles = css`
  .about-container {
    width: 50%;
    margin: 4rem 0 1rem 0;
  }

  @media (max-width: 767px) {
    .about-container {
      width: 90%;
      margin: 4rem 1rem 1rem 1rem;
    }
  }
`;

export default function template(slot, metadata = {}) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${metadata.title}</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="shortcut icon"
          href="public/favicon.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="public/global.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>
          #delgada-logo {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 16px;
            left: 16px;
          }

          ${NavbarStyles}
        </style>
      </head>
      <body>
        ${Navbar()}
        <img id="delgada-logo" src="public/logo.svg" alt="Delgada logo" />
        <main>${slot}</main>
      </body>
    </html>
  `;
}
