import React, { useState } from "react";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import NewPassword from "./components/Auth/ResetPassword/NewPassword";
import Confirmation from "./components/Auth/ResetPassword/Confirmation";
import BinStatus from "./Screens/BinStatus/BinStatus";
import { tableData } from "./components/WasteBinComp/WasteBinCompData";


function App() {
  const [searchKey, setSearchKey] = useState('');
  const [activeFilterKey, setActiveFilterKey] = useState(0);

  const filteredItems = tableData.filter((item) => {
  const keysToSearch = ['id', 'level', 'stability', 'user', 'location', 'date'];

  const searchKeyLowerCase = searchKey.toLowerCase();

  return keysToSearch.some((key) => {
    const itemValue = item[key] ? item[key].toString().toLowerCase() : ''; 
    return itemValue.includes(searchKeyLowerCase);
  });
});
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard 
        filteredItems={filteredItems}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        activeFilterKey={activeFilterKey}
        setActiveFilterKey={setActiveFilterKey}
       />} />
        <Route path="/binStatus" element={<BinStatus 
        filteredItems={filteredItems} 
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        activeFilterKey={activeFilterKey}
        setActiveFilterKey={setActiveFilterKey}
        />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
