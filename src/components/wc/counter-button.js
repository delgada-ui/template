import { LitElement, css, html } from 'lit';

export class CounterButton extends LitElement {
  static properties = {
    count: {},
  };

  static styles = css`
    button {
      font-family: inherit;
      font-size: 16px;
      border: 2px solid #000;
      border-radius: 50px;
      color: white;
      background-color: rgb(67, 42, 230);
      padding: 0.75rem 1rem;
      margin: 1rem;
    }

    button:hover {
      cursor: pointer;
      background-color: rgb(53, 32, 187);
    }
  `;

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <button @click=${() => this.count++}>Clicked ${this.count} times</button>
    `;
  }
}

customElements.define('counter-button', CounterButton);
