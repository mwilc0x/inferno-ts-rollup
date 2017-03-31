import { render } from 'inferno';
import createElement from 'inferno-create-element';
import Menu from './menu';

function App() {
  return (
    <div>
      <h1>Hello Inferno</h1>
      <Menu />
    </div>
  );
}

// wrapper for inferno render
function renderApp() {
    render(
        <App />,
        document.getElementById("root")
    );
}

renderApp();