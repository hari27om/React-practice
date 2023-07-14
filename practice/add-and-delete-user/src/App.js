import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { id: 1, username: "HariOm" },
    { id: 2, username: "Bihari" },
    { id: 3, username: "Ayush" },
    { id: 4, username: "Nimit" }
  ]);

  const handledelete = (id) => {
    const newdata = data.filter((item) => item.id !== id);
    setData(newdata);
  };

  return (
    <div className="App">
      {data.map((item) => (
        <div key={item.id}>
          {item.id}.{item.username}
          <button onClick={() => handledelete(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
