import './App.css';
import OrderForm from './components/OrderForm';
import NewUserForm from './components/NewUserForm';
import HomeCalendar from './components/HomeCalendar';
import Orders from './components/Orders';
import EditUserForm from './components/EditUserForm';
import Map from './components/Map';
import EditOrderForm from './components/EditOrderForm';



import {Routes,Route} from "react-router-dom";
import Customers from './components/Customers';
import { createTheme,ThemeProvider } from '@mui/material';
import SideBar from './components/SideBar';



function App() {

  const theme=createTheme({
    typography:{
      fontSize:16

    }
  })
  return (
    <ThemeProvider theme={theme}>
    <div className="App">


      
      <Routes>
        <Route element={<SideBar/>}>
          <Route path="/" element={<HomeCalendar/>}/>
          <Route path="/addCustomer" element={<NewUserForm/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/neworder" element={<OrderForm/>}/>

          <Route path="/orders" element={<Orders/>}/>
          <Route path="/editcustomer/:id" element={<EditUserForm/>}/>
          <Route path="/editorder/:id" element={<EditOrderForm/>}/>
          <Route path="/map" element={<Map/>}/>
          
        </Route>
      </Routes>




    </div>
    </ThemeProvider>
  );
}

export default App;
