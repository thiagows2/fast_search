import './App.css';
import { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/name_statistics?name=${query}`);
      console.log(res.data)
      console.log(query)
      setData(res.data);
    };
    if (query.length === 0 || query.length > 1) fetchData();
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        {<Table data={data} />}
      </header>
    </div>
  );
}

export default App;
