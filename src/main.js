import "./style.css";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";

document.querySelector("#app").innerHTML = `
  ${Navbar()}

  <main class="min-h-screen bg-sky-100">

    ${SearchBar()}

  </main>
`;