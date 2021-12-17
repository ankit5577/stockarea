import "./App.css";
import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";

const HomePage = React.lazy(() => import("./pages/home/Home"));
const WarehouseDetailsPage = React.lazy(() =>
  import("./pages/warehouse-details/Warehouse-details")
);

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar
        filterItems={console.log}
        sidebarToggle={() => setToggleSidebar(!toggleSidebar)}
      />
      <div className="flex-1 flex flex-row relative">
        <Sidebar sidebarToggle={toggleSidebar} />
        <div className={`App flex-1 ${toggleSidebar ? "mainDiv" : ""} mt-6`}>
          <Routes className=''>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              index
              element={
                <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="warehouse/:id"
              element={
                <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                  <WarehouseDetailsPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <div
                  className="mx-auto container
                 text-center p-4"
                >
                  <h2>Page not found</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
