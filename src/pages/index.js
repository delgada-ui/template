import { html, css } from 'delgada/template.js';
import { Welcome, styles as WelcomeStyles } from '../components/Welcome.js';

export const metadata = {
  title: 'Welcome to Delgada!',
};

export const styles = css`
  p {
    text-align: center;
  }

  code {
    font-family: monospace;
    color: rgb(13, 82, 40);
    background-color: rgb(186, 210, 197);
    padding: 0.25rem;
    border-radius: 4px;
  }

  #docs {
    position: fixed;
    bottom: 10px;
  }

  ${WelcomeStyles}
`;

export function page() {
  return html`
    ${Welcome({ name: 'Delgada', link: 'https://delgada.dev' })}
    <p>Get started by editing <code>src/pages/index.js</code></p>
    <counter-button></counter-button>
    <p id="docs">
      Read the docs at
      <a href="https://delgada.dev/docs">delgada.dev/docs</a>.
    </p>
  `;
}
