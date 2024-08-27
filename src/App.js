import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Users from './Pages/Dashboard/User/Users';
import GoogleCallback from './Auth/GoogleCallback';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Auth/RequireAuth';
import UpdateUser from './Pages/Dashboard/User/UpdateUser';
import AddUser from './Pages/Dashboard/User/AddUser';
import { OtherUsers } from './Pages/Website/OtherUsers';
import Page404 from './Pages/404/404';
import RequireBack from './Auth/RequireBack';
import Products from './Pages/Dashboard/products/Products';
import Categories from './Pages/Dashboard/Category/Categories';
import AddCategory from './Pages/Dashboard/Category/AddCategory';
import UpdateCategory from './Pages/Dashboard/Category/UpdateCategory';
import AddProduct from './Pages/Dashboard/products/AddProduct';
import UpdateProduct from './Pages/Dashboard/products/UpdateProduct';
import Home from './Pages/Website/Home/Home';
import Categoriess from './Pages/Website/Categories/Categories';
import Website from './Pages/Website/Website';

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Website />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categoriess />} />
        </Route>

        <Route element={<RequireBack />} >
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="users" element={<Users />} />
        <Route element={<RequireAuth allowedRole={['1995', '50', '1999']} />} >
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={['1995']} />} >
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UpdateUser />} />
              <Route path="users/add" element={<AddUser />} />
            </Route>
            <Route element={<RequireAuth allowedRole={['50', '1995']} />} >
              <Route path="otherUsers" element={<OtherUsers />} />
            </Route>
            <Route element={<RequireAuth allowedRole={['1999', '1995']} />} >
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/:id" element={<UpdateProduct />} />


              <Route path="categories" element={<Categories />} />
              <Route path="categories/add" element={<AddCategory />} />
              <Route path="categories/:id" element={<UpdateCategory />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />

      </Routes>

    </div>
  );
}

export default App;
