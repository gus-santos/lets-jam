// import logo from './logo.svg';

import Nav from './components/Nav/Nav';
import Button from './components/Button/Button';
import Feed from './components/Feed/Feed';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Feed />
      <Button type="submit" value="save" />
      <Button type="cancel" value="cancel" />
    </div>
  );
}

export default App;