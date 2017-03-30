import Inferno from 'inferno';
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
function render() {
    Inferno.render(
        <App />,
        document.getElementById("root")
    );
}

render();