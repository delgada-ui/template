import { html, css } from 'delgada';

export const metadata = {
  title: 'About',
};

const features = [
  'Ship zero JS by default with static components',
  'Islands of interactivity with web components',
  'File-system based routing',
  'Markdown support out of the box',
  'TypeScript support out of the box (coming soon-ish)',
  'Scoped CSS support out of the box (coming soon-ish)',
  'Zero config necessary with common sense defaults',
];

export function page() {
  return html`
    <section class="about-container">
      <h1>About</h1>
      <p>
        This is a <a href="https://delgada.dev">Delgada</a> website. Delgada is
        a web framework for building slim multipage websites using modern web 
        standards and conventions.
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
