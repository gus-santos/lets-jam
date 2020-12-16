// import logo from './logo.svg';

import Nav from './components/Nav/Nav';
import Feed from './components/Feed/Feed';
import FormUserAddEdit from './components/FormUserAddEdit/FormUserAddEdit';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Feed />
      <FormUserAddEdit />
    </div>
  );
}

export default App;