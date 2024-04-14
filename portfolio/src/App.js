import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routing/AppRoutes';
import Layout from './core/Layout';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Layout />

    </div>
  );
}

export default App;
