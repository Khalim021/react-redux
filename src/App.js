import Navbar from "./components/navbar/Navbar";
import NewsList from "./components/news/NewsList";
import AddNews from "./components/news/AddNews";
import FilterNews from "./components/news/FilterNews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main__content">
        <NewsList />
        <div className="main__content_page">
          <AddNews />
          <FilterNews />
        </div>
      </div>
    </div>
  );
}

export default App;

