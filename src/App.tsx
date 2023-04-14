import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/index'
import { Navbar, Home, AddContact, EditContact, ViewDetails, ChartsAndMaps } from "./components"
import { QueryClient, QueryClientProvider } from 'react-query';


function App(): JSX.Element {
  return (
    <div className="  h-screen">
      <Provider store={store} >
        <div className='md:max-w-6xl md:flex md:flex-row gap-3 mx-auto '>
          <Router>
            <Navbar />
            <div className=' w-[90%] mx-auto mt-2 md:mt-1 min-h-[400px] relative'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addContact" element={<AddContact />} />
                <Route path="/editContact/:id" element={<EditContact />} />
                <Route path="/viewContact/:id" element={<ViewDetails />} />

                <Route path="/chartsandmaps" element={<QueryClientProvider client={new QueryClient()}><ChartsAndMaps /></QueryClientProvider>} />

              </Routes>
            </div>
          </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;
