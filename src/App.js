import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import SearchContainer from './components/SearchContainer';
import Trending from './components/trending';

function App() {

  const [searchText,setSearchText] = useState("");
  const [searchResult,setSearchResult] = useState(null);

  const API_KEY = "pub_55539c32b0c65bb7abec2ef424f0e6ea6ecd"
  const base = `https://newsdata.io/api/1/news?apikey=${API_KEY}`;

  const textSubmit = (val) => {
    console.log("input submitted");
    let new_base = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${searchText}`
    
    fetch(new_base).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.results);
      if (data.status === "success") {
        setSearchResult(data.results);
      }
    })
  }

  const textChange = (val) => {
    console.log("Text Change");
    setSearchText(val);
  }

  const randomCategory = () => {
    let arr = ["sports","health","top","world","technology","entertainment","food","sciece"];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  return (
    <div className="container">
      <Navbar/>
      <main>
        <SearchBar 
              class="input search-input"
              onHandleSubmit={textSubmit}
              text={searchText}
              onTextChange={textChange}
        />
        <br></br>
        <SearchContainer
            resData={searchResult}
        />
        <br></br>

        <Trending
          url={`https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${randomCategory()}&language=en`}
        />

      </main>
    </div>
  );
}

export default App;
