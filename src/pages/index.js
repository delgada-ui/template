import { html, css } from 'delgada';
import { Welcome, styles as WelcomeStyles } from '../components/Welcome.js';

export const metadata = {
  title: 'Welcome to Delgada!',
};

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

export const styles = css`
  body {
    background-color: #98b5ff;
  }

  p {
    text-align: center;
  }

  code {
    font-family: monospace;
    color: #0d1552;
    background-color: #b5c2f5;
    padding: 0.25rem;
    border-radius: 4px;
  }

  counter-button {
    margin: 1rem;
  }

  #docs {
    position: fixed;
    bottom: 10px;
  }

  ${WelcomeStyles}
`;
