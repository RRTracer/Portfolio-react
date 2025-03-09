import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Card from "./Card";

const ReactHookCard = () => {
  const [count, setCount] = useState(0);
  const codeString = `import { useState } from "react";
    function Counter() {
        const [count, setCount] = useState(0);
        return (
            <div>
                <p> Count: {count} </p>
                <button onClick={() => setCount(count + 1)}> Increment </button>
            </div>
        );
    }
    export default Counter;`;
  const reactHook = (
    <div className="flex flex-row p-2 gap-4 ">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
      <div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold text-gray-700 dark:text-slate-300">
            Count : {count}
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 10)}
          >
            Increment + 10
          </button>
          
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Card
        nameImg="react-2.svg"
        content={reactHook}
        title="React Hooks useState basic example"
      />
    </div>
  );
};

export default ReactHookCard;
