import './App.css';
// import './js/fxcm.min.js';
import { Nav } from './Nav';
import { HeroBanner } from './HeroBanner';
import { VisuallyHiddenSvgIcons } from './VisuallyHidden';
import { AdditionalContentRows } from './AdditionalContentRows';
import { Contact } from './Contact';

function App() {
  return (
    <div className={"app"}>
      <Nav />

      <div id={"global_container"}>
        <main className={"mainContent"} id={"mc"}>

          <HeroBanner />
          <VisuallyHiddenSvgIcons />
          <AdditionalContentRows />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;