import { html, css } from 'delgada';

export const metadata = {
  title: 'About',
};

export const styles = css`
  body {
    background-color: #8dcc96;
  }

  h1 {
    font-size: 35px;
  }

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

const features = [
  'File-system based routing',
  'Lightweight – currently 1.3kB (minified and compressed)',
  'Web components as a first class citizen',
  'Static markup components and styling using template literal strings',
  'Flexible page templates',
  'SEO friendly final output',
];

export function page() {
  return html`
    <section class="about-container">
      <h1>About</h1>
      <p>
        This is a <a href="https://delgada.dev">Delgada</a> website. Delgada is
        a frontend web framework for building slim multipage websites using
        modern web standards and conventions.
      </p>
      <p>Features include:</p>
      <ul>
        ${features.map((feature) => html`<li>${feature}</li>`)}
      </ul>
      <p>
        Learn more by reading our docs at
        <a href="https://delgada.dev/docs">delgada.dev/docs</a>.
      </p>
    </section>
  `;
}
