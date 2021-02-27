import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/shop-homepage.css';
import Container from './Container/Container';


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
