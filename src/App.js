import AddNewJournal from './pages/AddNewJournal';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route to="/new" element={<AddNewJournal />} />
          <Route to="/dashboard" element={<Dashboard />} />
          <Route to="/authentication" exact element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
