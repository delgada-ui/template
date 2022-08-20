import { LitElement, html, css } from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: { state: true },
  };

  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }

    #input-container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    #new-item-input {
      width: 100%;
      margin-bottom: 1rem;
      border: 2px solid #000;
      border-radius: 8px 0 0 8px;
      padding: 0.75rem 0.5rem;
      font-size: 1.2rem;
    }

    #new-item-input:focus {
      outline: none;
    }

    #input-container button {
      background-color: #efefef;
      margin-bottom: 1rem;
      border: 2px solid #000;
      border-left: none;
      border-radius: 0 8px 8px 0;
      padding: 0.75rem;
      font-size: 1.2rem;
    }

    #input-container button:hover,
    #input-container button:focus {
      cursor: pointer;
      background-color: #d6d6d6;
      outline: none;
    }

    #todo-item-container {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
    }

    .todo-item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      background-color: #efefef;
      box-sizing: border-box;
      list-style: none;
      border: 2px solid #000;
      border-radius: 8px;
      margin: 0.75rem 0 0 0;
      padding: 0.5rem;
      font-size: 1.2rem;
      width: 100%;
    }

    .todo-item:hover {
      cursor: pointer;
      box-shadow: 4px 4px 0 0 #000;
    }

    .todo-item:focus {
      background-color: #d6d6d6;
      outline: none;
    }
  `;

  constructor() {
    super();
    this._listItems = [
      { text: 'Make todo list', completed: true },
      { text: 'Create a new todo item', completed: false },
      { text: 'Learn more about Delgada', completed: false },
    ];
  }

  render() {
    const todos = html`
      ${this._listItems.map(
        (item) => html`<div
          tabindex="0"
          class=${item.completed ? 'completed todo-item' : 'todo-item'}
          @click=${() => this.toggleCompleted(item)}
          @keydown=${(e) => this._toggleTodoOnKeydown(e, item)}
        >
          ${item.text}
        </div>`
      )}
    `;

    return html`
      <section id="input-container">
        <input
          @keydown=${this._addTodoOnKeydown}
          id="new-item-input"
          aria-label="New item"
          placeholder="Add a new todo item!"
        />
        <button @click=${this.addTodo}>+</button>
      </section>
      <section id="todo-item-container">${todos}</section>
    `;
  }

  get input() {
    return this.renderRoot?.querySelector('#new-item-input') ?? null;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  _toggleTodoOnKeydown(e, item) {
    if (e.key === 'Enter') {
      this.toggleCompleted(item);
    }
  }

  addTodo() {
    if (this.input.value.length > 0) {
      this._listItems = [
        ...this._listItems,
        { text: this.input.value, completed: false },
      ];
      this.input.value = '';
    }
  }

  _addTodoOnKeydown(e) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }
}
customElements.define('todo-list', ToDoList);
