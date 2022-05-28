import { html, css } from 'delgada/template.js';

export const styles = css`
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    border: solid 2px #000;
    border-radius: 8px;
    width: min-content;
    padding: 0.5rem 1.25rem;
  }

  nav > a {
    font-weight: 500;
    margin: 0 0.5rem;
  }

  nav > a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
  }
`;

export function Navbar() {
  return html`
    <header>
      <nav>
        <a id="home-link" href="/">Home</a>
        <a id="about-link" href="/about">About</a>
        <a id="about-link" href="/todos">Todos</a>
      </nav>
    </header>
  `;
}