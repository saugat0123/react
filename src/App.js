import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/shop-homepage.css';
import './css/form.css';
import Container from './Components/Container';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>


      </BrowserRouter>
    </div>
    
  );
}

export default App;
