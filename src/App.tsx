// Import required dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Navbar, Home, AddContact, EditContact, ViewDetails, ChartsAndMaps } from "./components";
import { QueryClient, QueryClientProvider } from 'react-query';

// Define the main component
function App(): JSX.Element {
  // Render the main component
  return (
    <div className="h-screen">
      {/* Redux provider */}
      <Provider store={store}>
        <div className='md:max-w-6xl md:flex md:flex-row gap-3 mx-auto'>
          {/* React Router */}
          <Router>
            {/* Navbar */}
            <Navbar />
            <div className='w-[90%] mx-auto mt-2 md:mt-1 min-h-[400px] relative'>
              {/* Routes */}
              <Routes>
                {/* Home page */}
                <Route path="/" element={<Home />} />
                {/* Add contact page */}
                <Route path="/addContact" element={<AddContact />} />
                {/* Edit contact page */}
                <Route path="/editContact/:id" element={<EditContact />} />
                {/* View contact details page */}
                <Route path="/viewContact/:id" element={<ViewDetails />} />
                {/* Charts and maps page */}
                <Route
                  path="/chartsandmaps"
                  element={
                    <QueryClientProvider client={new QueryClient()}>
                      <ChartsAndMaps />
                    </QueryClientProvider>
                  }
                />
              </Routes>
            </div>
          </Router>
        </div>
      </Provider>
    </div>
  );
}

// Export the main component
export default App;
