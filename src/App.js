import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';


function App() {
  return (
    <div>
      <Header creator={"Ben Halliwell"} />
      {<Main />
      <Footer />}
    </div>
  );
}



export default App;
