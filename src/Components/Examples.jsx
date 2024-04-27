import { useState } from 'react';
import TabButtons from './TabButtons';
import { EXAMPLES } from '../../data';

export default function Examples(){
    const [ selectedTopic, setSelectedTopic ] = useState('components');
    function handleClick(selectedbutton) {
        setSelectedTopic(selectedbutton);
      }
      return(
      <>
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
      </>
      );
}