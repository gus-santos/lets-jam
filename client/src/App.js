// import logo from './logo.svg';

import Nav from './components/Nav/Nav';
import Feed from './components/Feed/Feed';
import FormAddEdit from './components/FormAddEdit/FormAddEdit';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Feed />
      <FormAddEdit />
    </div>
  );
}

export default App;