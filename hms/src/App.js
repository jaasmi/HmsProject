import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import MenuShow from './components/menushow/menushow';
import VendorLogin from './components/vendorLogin/vendorLogin'
import HomePage from './components/homePage/homePage'
import CustomerPendingOrders from './components/customerPendingOrders/customerPendingOrders'
import CustomerOrders from './components/customerOrders/customerOrders'
import CustomerWallet from './components/customerWallet/customerWallet'
import CustomerShow from './components/customerShow/customerShow';
import CustomerDashBoard from './components/customerDashBoard/customerDashBoard';
import Menu from './components/menu/menu';
import VendorMenu from './components/vendormenu/vendormenu';
import Login from './components/login/login';
import VendorDashBoard from './components/vendorDashBoard/vendorDashBoard';
import VendorShow from './components/vendorShow/vendorShow';
import VendorOrders from './components/vendorOrders/vendorOrders';
import VendorPendingOrders from './components/vendorPendingOrders/vendorPendingOrders';
import PlaceOrder from './components/placeOrder/placeOrder';
import OrderacceptORreject from './components/orderacceptORreject';
import BookRoom from './components/bookRoom';
import Roomshow from './components/roomshow';
import CustomerBookings from './components/customerBookings';
import CustomerPendingBookings from './components/customerPendingBookings';
import AdminBookings from './components/adminBookings';
import AdminPendingBookings from './components/adminPendingBookings';
import BookingacceptORreject from './components/bookingacceptORreject';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashBoard" element={<VendorDashBoard />} />
        <Route path="/vendorPendingOrders" element={<VendorPendingOrders />} />
        <Route path="/vendorShow" element={<VendorShow />} />
        <Route path="/vendorOrders" element={<VendorOrders/>} />
        <Route path="/customerDashboard" element={<CustomerDashBoard />} />
        <Route path="/customerShow" element={<CustomerShow />} />
        <Route path="/customerWallet" element={<CustomerWallet />} />
        <Route path="/customerOrders" element={<CustomerOrders />} />
        <Route path="/customerPendingOrders" element={<CustomerPendingOrders />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/bookRoom" element={<BookRoom />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/vendormenu" element={<VendorMenu />} />
        <Route path="/orderacceptORreject" element={<OrderacceptORreject />} />
        <Route path="/menuShow" element={<MenuShow />} />
        <Route path="/roomshow" element={<Roomshow />} />
        <Route path="/customerBookings" element={<CustomerBookings />} />
        <Route path="/customerPendingBookings" element={<CustomerPendingBookings />} />
        <Route path="/adminBookings" element={<AdminBookings />} />
        <Route path="/adminPendingBookings" element={<AdminPendingBookings />} />
        <Route path="/bookingacceptORreject" element={<BookingacceptORreject />} />
        <Route path="/signup" element={<Register/>} />
      </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
