import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Header creator={"Ben Halliwell"} />
      <Main />
      <Footer creator={"Ben Halliwell"} />
    </div>
  );
}

export default App;
