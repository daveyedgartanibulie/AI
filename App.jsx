import { useState } from "react";
import "./App.css";
import { requestToGroqAI } from "./utils/groq";
function App() {
  const [data, setData] = useState("")
  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };
  return (
    <main className="flex flex-col main-h-[80vh] justify-center items-center">
      <h1 className="text-4xl text-indigo-500">React|GROQ AI</h1>
      <form className="flex flex-col gap-4 py-4">
        <input
          placeholder="ketik permintaan disini..."
          className="py-2 px-4 text-md rounded-md"
          id="content"
          type="text"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-indigo-500 py-2 px-4 font-bold text-white rounded-md"
        >
          kirim
        </button>
      </form>
    </main>
  );
}

export default App;
