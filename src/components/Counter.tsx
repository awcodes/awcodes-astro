import { useState } from "preact/hooks";

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <div>
      <div class="flex items-center gap-6 justify-center">
        <button onClick={subtract} class="border-2 border-primary-500 rounded-full text-white-500 font-bold text-xl px-4 bg-transparent">
          -
        </button>
        <pre class="font-3xl font-mono">{count}</pre>
        <button onClick={add} class="border-2 border-primary-500 rounded-full text-white-500 font-bold text-xl px-4 bg-transparent">
          +
        </button>
      </div>
      <div class="counter-message">{children}</div>
    </div>
  );
}
