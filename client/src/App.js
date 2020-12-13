// import logo from './logo.svg';

import Button from './components/Button/Button';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Button type="submit" value="save" />
      <Button type="cancel" value="cancel" />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;