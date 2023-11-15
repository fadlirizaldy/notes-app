import { useEffect, useState } from "react";
import "./App.css";

import { getInitialData } from "./utils/index";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const filteredData = data.filter(
    (e) =>
      e.title.toLowerCase().includes(keyword.toLowerCase()) ||
      e.body.toLowerCase().includes(keyword.toLowerCase())
  );

  useEffect(() => {
    setData(getInitialData());
  }, []);

  return (
    <div className="App">
      <header className="App-header navbar">
        <h1 className="logo">Notes App</h1>
      </header>
      <Content
        filteredData={filteredData}
        setData={setData}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <Footer />
    </div>
  );
}

export default App;
