import logo from "./logo.svg";
import "./App.css";
import "../node_modules/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

import { RuxIcon, RuxButton } from "@astrouxds/astro-web-components";
customElements.define("rux-icon", RuxIcon);
customElements.define("rux-button", RuxButton);

function App() {
  return (
    <div className="App">
      <rux-icon icon="close" label="close" size="large"></rux-icon>
      <rux-button size="large" icon="altitude">
        Slotted Button
      </rux-button>
    </div>
  );
}

export default App;
