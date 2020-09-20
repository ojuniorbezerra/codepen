import React from 'react';
import Editor from  './Editor'

function App() {
  return (
    <>
    <div className="pane top-pane">
      <Editor/>
      <Editor/>
      <Editor/>

    </div>
    <div className="pane"></div>
    <iframe
    title="output"
    sandbox="allow-scripts"
    frameBorder="0"
    width="100%"
    height="100%"
    />
    </>
  );
}

export default App;
