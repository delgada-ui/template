import { html, css } from 'delgada';

export const metadata = {
  title: 'Todos',
};

export function page() {
  return html`
    <section class="todo-container">
      <todo-list></todo-list>
    </section>
  `;
}

export const styles = css`
  body {
    background-color: #ff9559;
  }

  .todo-container {
    width: 50%;
    margin: 6.5rem 0 1rem 0;
  }

  @media (max-width: 767px) {
    .todo-container {
      width: 90%;
      margin: 4rem 1rem 1rem 1rem;
    }
  }
`;
