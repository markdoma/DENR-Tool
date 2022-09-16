import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  // const [lists, setLists] = useState(() => {
  //   const savedLists = localStorage.getItem('lists');
  //   savedLists ? JSON.parse(savedLists) : [];
  // });
  const [lists, setLists] = useState([]);

  const [list, setList] = useState('');
  // const [currentList, setCurrentList] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('lists', JSON.stringify(lists));
  // }, [lists]);

  function handleDeleteButton(id) {
    const removedList = lists.filter((list) => list.id !== id);
    setLists(removedList);
  }

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
                setLists([
                  ...lists,
                  {
                    id: lists.length + 1,
                    text: list,
                  },
                ]);
                setList('');
              }}
            >
              <input
                className="ml-3 border-black border rounded"
                onChange={(e) => setList(e.target.value)}
                name="list"
                placeholder="Add new list"
                value={list}
                type="text"
                required
              />
              <button className="p-3 bg-gray-100 rounded-lg">Add Item</button>
            </form>
          </div>
          <ul>
            {lists.map((list) => (
              <li key={list.id} className="flex items-center space-x-5">
                <input
                  className="flex justify-center items-center text-xl"
                  value={list.text}
                  // onChange={(e, i) => setCurrentList(e.target.value)}
                />
                <button
                  className="flex items-center rounded-full bg-red-100 px-2"
                  onClick={() => handleDeleteButton(list.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
