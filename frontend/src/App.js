
import './App.css';
import { ROUTES } from './routes/Route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter(ROUTES)

function App() {
  return (
    <div>
  <RouterProvider router={router}/>
    </div>
  );
}

export default App;
