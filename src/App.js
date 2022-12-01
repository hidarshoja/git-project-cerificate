
import './App.css';
import Header from './component/header/Header';
import Slide from './component/slideHeader/slide';
import Content from './component/content/content';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className='app'>
       <Header></Header>
       <Slide></Slide>
       <Content></Content>
       <Footer></Footer>
    </div>
  );
}

export default App;
