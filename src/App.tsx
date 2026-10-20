import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
// import RegisterDrawer from './components/layout/RegisterDrawer';

export default function App() {
  return (
    <BrowserRouter>
      {/* <RegisterDrawer /> */}
      <AppRoutes />
    </BrowserRouter>
  );
}
