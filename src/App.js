import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkbox from "./Checkbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {
        small: false,
        medium: false,
        large: false,
        "x-large": false
      },
      colours: {
        black: false,
        yellow: false,
        pink: false,
        green: false,
        blue: false
      },
      todos: {
        payBills: false,
        payInternet: false,
        payTelephone: false,
        payAuto: false
      }
    };
    this.updateTodos = this.updateTodos.bind(this);
    this.updateSizes = this.updateSizes.bind(this);
    this.updateColours = this.updateColours.bind(this);
  }
  updateTodos(id, value) {
    this.setState({
      ...this.state,
      todos: {
        ...this.state.todos,
        [id]: value
      }
    });
  }
  updateSizes(id, value) {
    this.setState({
      ...this.state,
      sizes: {
        ...this.state.sizes,
        [id]: value
      }
    });
  }
  updateColours(id, value) {
    this.setState({
      ...this.state,
      colours: {
        ...this.state.colours,
        [id]: value
      }
    });
  }
  render() {
    const { todos, sizes, colours } = this.state;
    return (
      <div className="container">
        <main>
          <header>
            <h1>Checkboxes</h1>
          </header>
          <section>
            <p>
              The <code>{"<Checkbox/>"}</code> component can be used to render a
              checkbox with label, additionally there are props to conrtol the
              size and colour of the checkbox.
            </p>
            <h4>component props</h4>
            <ul>
              <li>
                <code>
                  <b>id</b> (required string)
                </code>{" "}
                this is the id of the checkbox and is used by the checkbox to
                call your <code>onClick</code> handler with an identifer.
              </li>
              <li>
                <code>
                  <b>checked</b> (boolean, defaults to false)
                </code>{" "}
                whether the checkbox should be rendered as checked or unchecked.
              </li>
              <li>
                <code>
                  <b>disabled</b> (boolean, defaults to false)
                </code>
              </li>
              <li>
                <code>
                  <b>colour</b> (string defaults to "black")
                </code>{" "}
                see the <a href="#colours">colours</a> section for details.
              </li>
              <li>
                <code>
                  <b>label</b> (string)
                </code>{" "}
                an optional label foryour checkbox.
              </li>
              <li>
                <code>
                  <b>onClick</b> (required function called with <i>id, value</i>)
                </code>{" "}
                a function called when the checkbox is clicked. The checkbox
                will pass back the ID of your component as the first argument of
                this function, the value of the checkbox will be pased to your
                onClick as the second argument.
              </li>
            </ul>
            <p>
              This component is completely stateless so it is important that you
              pass it a <code>checked</code> prop which will control whether the
              checkbox is checked or not. You also have to pass an{" "}
              <code>onClick</code> handler which will be called by the checkbox
              component with the id
            </p>
          </section>
          <section id="sizes">
            <h2>Sizes</h2>
            <p>
              The <code>size</code> prop can be set to <code>small</code>
              , <code>meduim</code>, <code>large</code> or <code>x-large</code>.
              Defaults to <code>medium</code>.
            </p>
            <pre>
              {`<Checkbox
  id="small"
  label="Small"
  size="small"
  checked={sizes.small}
  onClick={this.updateSizes}
/>`}
            </pre>
            <Checkbox
              id="small"
              label="Small"
              size="small"
              checked={sizes.small}
              onClick={this.updateSizes}
            />
            <pre>
              {`<Checkbox
  id="medium"
  label="Medium"
  size="medium"
  checked={sizes.medium}
  onClick={this.updateSizes}
/>`}
            </pre>
            <Checkbox
              id="medium"
              label="Medium"
              size="medium"
              checked={sizes.medium}
              onClick={this.updateSizes}
            />
            <pre>
              {`<Checkbox
  id="large"
  label="Large"
  size="large"
  checked={sizes.large}
  onClick={this.updateSizes}
/>`}
            </pre>
            <Checkbox
              id="large"
              label="Large"
              size="large"
              checked={sizes.large}
              onClick={this.updateSizes}
            />
            <pre>
              {`<Checkbox
  id="x-large"
  label="X-large"
  size="x-large"
  checked={sizes["x-large"]}
  onClick={this.updateSizes}
/>`}
            </pre>
            <Checkbox
              id="x-large"
              label="X-large"
              size="x-large"
              checked={sizes["x-large"]}
              onClick={this.updateSizes}
            />
          </section>
          <section id="colours">
            <h2>Colours</h2>
            <p>
              The <code>colour</code> prop can be set to 'black', 'yellow',
              'pink', 'green' or 'blue'. Defaults to 'black'.
            </p>
            <pre>
              {`<Checkbox
  id="black"
  label="Black"
  colour="black"
  checked={colours.black}
  onClick={this.updateColours}
/>
<Checkbox
  id="yellow"
  label="Yellow"
  colour="yellow"
  checked={colours.yellow}
  onClick={this.updateColours}
/>
<Checkbox
  id="pink"
  label="Pink"
  colour="pink"
  checked={colours.pink}
  onClick={this.updateColours}
/>
<Checkbox
  id="green"
  label="Green"
  colour="green"
  checked={colours.green}
  onClick={this.updateColours}
/>
<Checkbox
  id="blue"
  label="Blue"
  colour="blue"
  checked={colours.blue}
  onClick={this.updateColours}
/>`}
            </pre>
            <Checkbox
              id="black"
              label="Black"
              colour="black"
              checked={colours.black}
              onClick={this.updateColours}
            />
            <Checkbox
              id="yellow"
              label="Yellow"
              colour="yellow"
              checked={colours.yellow}
              onClick={this.updateColours}
            />
            <Checkbox
              id="pink"
              label="Pink"
              colour="pink"
              checked={colours.pink}
              onClick={this.updateColours}
            />
            <Checkbox
              id="green"
              label="Green"
              colour="green"
              checked={colours.green}
              onClick={this.updateColours}
            />
            <Checkbox
              id="blue"
              label="Blue"
              colour="blue"
              checked={colours.blue}
              onClick={this.updateColours}
            />
          </section>
          <section id="custom-logic">
            <h2>Custom checked logic example</h2>
            <p>
              Since the component is completely stateless you should control the
              checked state using your own logic:
            </p>
            <ol>
              <li>
                <Checkbox
                  id="payBills"
                  label="Pay the bills"
                  onClick={this.updateTodos}
                  checked={
                    todos.payBills ||
                    (todos.payInternet && todos.payTelephone && todos.payAuto)
                  }
                />
                <ol>
                  <li>
                    <Checkbox
                      id="payInternet"
                      label="Pay the internet bill"
                      onClick={this.updateTodos}
                      checked={todos.payBills || todos.payInternet}
                    />
                  </li>
                  <li>
                    <Checkbox
                      id="payTelephone"
                      label="Pay the telephone bills"
                      onClick={this.updateTodos}
                      checked={todos.payBills || todos.payTelephone}
                    />
                  </li>
                  <li>
                    <Checkbox
                      id="payAuto"
                      label="Pay the automo-bills"
                      onClick={this.updateTodos}
                      checked={todos.payBills || todos.payAuto}
                    />
                  </li>
                </ol>
              </li>
            </ol>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
