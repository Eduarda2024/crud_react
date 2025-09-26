import logo from './logo.svg';
import './App.css';
import UserList from './pages/UserList'
import CreateUser from './pages/CreateUser'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UpdateUser from './pages/UpdateUser'
import CreateProduct from './pages/CreateProduct'
import ProductList from './pages/ProductList'
import UpdateProduct from './pages/UpdateProduct'

function App() {
  return (
    <Router>
      <nav>
        {/*<Link to ="/">Home</Link> |{""}*/}
        <Link to ="/users">Usuarios</Link> | {""}
        <Link to ="/create-user">Create User</Link> |{""}
        <Link to ="/create-product">Create Product</Link> |{""}
        <Link to ="/product-list">Product List</Link> |{""}
      </nav>

      <Routes>
        {/*<Route path="/"element={<Home/>}/>*/}
        <Route path="/users" element={<UserList/>}/>
        <Route path="/create-user"element={<CreateUser/>}/>
        <Route path="/update-user/:id"element={<UpdateUser/>}/>
        <Route path="/create-product"element={<CreateProduct/>}/>
        <Route path="/product-list"element={<ProductList/>}/>
        <Route path="/update-product/:id" element={<UpdateProduct/>}/>
      </Routes>
    </Router>
);
}

export default App;


