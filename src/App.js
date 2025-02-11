import { useState } from "react";

let id = 0;

export default function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  function DelBtn({ id }) {
    function handelDel() {
      setList(list.filter((l) => l.id !== id));
    }
    return <button onClick={handelDel}>Del</button>;
  }

  function handleClick() {
    if (!name.trim()) return;
    setList([...list, { id: id++, name: name }]);
    setName("");
  }

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick} disable={name.trim() === ""}>
        Add
      </button>
      <ul>
        {list.map((l) => {
          return (
            <li key={l.id}>
              {l.name}
              <DelBtn id={l.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
