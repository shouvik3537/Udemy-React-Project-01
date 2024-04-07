import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

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
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} />
            ))}
          </ul>
        </section>

        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons 
            isSelected = {selectedTopic === 'componets'}
            onSelect={() => handleClick('components')}>Components</TabButtons>
            <TabButtons isSelected = {selectedTopic === 'jsx'}
             onSelect={() => handleClick('jsx')}>JSX</TabButtons>
            <TabButtons isSelected = {selectedTopic === 'props'}
              onSelect={() => handleClick('props')}>Props</TabButtons>
            <TabButtons isSelected = {selectedTopic === 'state'}
             onSelect={() => handleClick('state')}>State</TabButtons>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

