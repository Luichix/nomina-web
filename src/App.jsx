import React, { Suspense, useContext, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './contexts/AuthContext'
import Launch from './pages/launch'
const DefaultLayout = lazy(() => import('./components/layouts/Default'))
const DashboardLayout = lazy(() => import('./components/layouts/Dashboard'))
const NonLayout = lazy(() => import('./components/layouts/Non'))
const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const Recover = lazy(() => import('./pages/recover'))
const Account = lazy(() => import('./pages/dashboard/account'))
const Answer = lazy(() => import('./pages/dashboard/answer'))
const Assistant = lazy(() => import('./pages/dashboard/assistant'))
const Security = lazy(() => import('./pages/dashboard/security'))
const Page404 = lazy(() => import('./pages/page404'))

const App = () => {
  const user = useContext(AuthContext)
  return (
    <Suspense fallback={<Launch />}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/recover" element={<Recover />} exact />
          </Route>
          {user && (
            <Route element={<DashboardLayout />}>
              <Route path="/account" element={<Account />} exact />
              <Route path="/answer" element={<Answer />} exact />
              <Route path="/assistant" element={<Assistant exact />} />
              <Route path="/security" element={<Security />} exact />
            </Route>
          )}
          <Route element={<NonLayout />}>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
