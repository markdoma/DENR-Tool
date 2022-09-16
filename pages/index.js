import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [lists, setLists] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

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
          <div className="flex justify-start items-center space-x-2">
            <form
              action="submit"
              onSubmit={(e) => {
                e.preventDefault();
                setLists([...lists, currentInput]);
                setCurrentInput('');
              }}
            >
              <input
                className="ml-3 border-black border rounded"
                onChange={(e) => setCurrentInput(e.target.value)}
                value={currentInput}
                type="text"
                required
              />
              <button className="p-3 bg-gray-100 rounded-lg">Add Item</button>
            </form>
          </div>

          {lists ? (
            lists.map((list) => (
              <div className="flex items-center space-x-5">
                <div className="flex justify-center items-center text-xl ">
                  {list}
                </div>
                <div className="flex items-center rounded-full bg-red-100 px-2">
                  x
                </div>
              </div>
            ))
          ) : (
            <div>No Item Yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
