import './App.css';
import OrderForm from './components/OrderForm';
import NewUserForm from './components/NewUserForm';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import HomeCalendar from './components/HomeCalendar';
import TestGrid from './components/TestGrid';



import {Routes,Route} from "react-router-dom";
import Customers from './components/Customers';
import { createTheme,ThemeProvider } from '@mui/material';



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
        <Route element={<ResponsiveDrawer/>}>
          <Route path="/" element={<HomeCalendar/>}/>
          <Route path="/addCustomer" element={<NewUserForm/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/neworder" element={<OrderForm/>}/>
          <Route path="/orders" element={<TestGrid/>}/>
        </Route>
      </Routes>




    </div>
    </ThemeProvider>
  );
}

export default App;
