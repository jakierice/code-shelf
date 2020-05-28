import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const App = () => {
  const [codeSnippet, setCodeSnippet] = React.useState("");
  return (
    <>
      <textarea
        value={codeSnippet}
        onChange={(e: any) => {
          setCodeSnippet(e.target.value);
        }}
      />
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {codeSnippet}
      </SyntaxHighlighter>
    </>
  );
};

export default App;
