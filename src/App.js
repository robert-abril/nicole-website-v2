import "./App.css";
import { Navbar } from "./components";
import { Aboutme, Footer, Header, Reels } from "./containers";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
      <Reels />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
