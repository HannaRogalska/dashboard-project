import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'


const Dashboard = lazy(() => import('./pages/Dashboard'));
const Layout = lazy(() => import('./components/layout/Layout'));



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App
