import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routing/AppRoutes';
import Layout from './core/Layout';

function App() {
  return (
    <div className="App">
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

      <Toaster />
      <Layout />

    </div>
  );
}

export default App;
