import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex justify-center text-3xl font-bold underline bg-blue-100 p-10">
        Counter
      </div>

      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-center text-lg">{count}</div>
        <div className="flex items-center justify-center space-x-5">
          <div
            className="flex items-center justify-center bg-yellow-100 p-3 rounded cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            <a>+</a>
          </div>
          <div
            className="flex items-center justify-center bg-purple-100 p-3 rounded cursor-pointer"
            onClick={() => setCount(count - 1)}
          >
            <a>-</a>
          </div>
        </div>
        <div className="">
          <form action="">
            <div className="flex justify-start items-center space-x-2">
              <label>Name</label>
              <input className="border-black border rounded" type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
