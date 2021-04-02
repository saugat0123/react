import './App.css';
import Header from './Components/Header';
import Footer from './Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/shop-homepage.css';
import './css/form.css';
import Container from './Container/Container';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      {/* <Header></Header>
      <Container></Container>
      <Footer></Footer> */}


      </BrowserRouter>
    </div>
    
  );
}

export default App;
