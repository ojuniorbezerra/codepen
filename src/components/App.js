import React, { useState, useEffect } from 'react';
import Editor from  './Editor'
import useLocalStorege from '../hooks/useLocalStorege'
function App() {
const [html, setHtml] = useLocalStorege('html', '')
const [css, setCss] = useLocalStorege('css', '')
const [js, setJs] = useLocalStorege('js', '')
const [srcDoc, setSrcDoc] = useState('')

useEffect(() => {
  const timeout = setTimeout(() => {
    setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
  }, 250)

  return () => clearTimeout(timeout)
}, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/>
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
