import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import {About} from './components/About'
import React, { Fragment, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/Order-Summary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { New } from "./components/New";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetail";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import {Login} from './components/Login'
import { AuthProvider } from "./components/Auth";
import { RequiredAuth } from "./components/RequiredAuth";
import { Layout } from "./components/Layout/Layout";
import { Signup } from "./components/SignUp";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (

    <AuthProvider>
        <Layout>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequiredAuth><Profile/></RequiredAuth>}></Route>
        <Route path='login' element={<Login/>}></Route>
       <Route path='signup' element={<Signup/>}></Route>

      </Routes>
    </Layout>
     
      </AuthProvider>
    
  );
}

export default App;
