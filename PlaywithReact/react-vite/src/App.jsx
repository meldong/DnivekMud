import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app m-6">
      <h1 className="text-xl font-bold underline">Hello world!</h1>{" "}
      <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
