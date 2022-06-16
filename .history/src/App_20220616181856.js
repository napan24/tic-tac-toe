import {useEffect} from 'react';
import './tik.css';
import { useState } from 'react';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="Vs" element={<Lunch />} />
            <Route path="Two" element={<Dinner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;