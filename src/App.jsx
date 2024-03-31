import { useState } from "react";
import { CORE_CONCEPTS } from "../data.js";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('please click a button');

  function handleClick(selectedbutton) {
    setSelectedTopic(selectedbutton);
    console.log(selectedTopic);

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleClick('component')}>Components</TabButtons>
            <TabButtons onSelect={() => handleClick('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick('props')}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick('state')}>State</TabButtons>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

