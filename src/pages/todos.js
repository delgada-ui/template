import { html, css } from 'delgada/template.js';

export const metadata = {
  title: 'Todos',
};

export const styles = css`
  .todo-container {
    width: 50%;
    margin: 4rem 0 1rem 0;
  }

  @media (max-width: 767px) {
    .todo-container {
      width: 90%;
      margin: 4rem 1rem 1rem 1rem;
    }
  }
`;

export function page() {
  return html`
    <section class="todo-container">
      <todo-list></todo-list>
    </section>
  `;
}
