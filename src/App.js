import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/Main/Footer/Footer';
import Header from './components/Main/Header/Header';
import Main from './components/Main/Main'
import News from './components/News/News'
import Add from './components/Add/Add'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route  path="/Main" component={Main} />
        <Route  path="/News" component={News} />
        <Route  path="/Add" component={Add} />
        <Route  path="/Contact" component={Contact} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
