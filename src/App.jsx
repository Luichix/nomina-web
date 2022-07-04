import React, { Suspense, useContext, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './contexts/AuthContext'
// import Launch from './pages/launch'
const DefaultLayout = lazy(() => import('./components/layouts/Default'))
const DashboardLayout = lazy(() => import('./components/layouts/Dashboard'))
const NonLayout = lazy(() => import('./components/layouts/Non'))
const Setup = lazy(() => import('./components/layouts/Setup'))
const Task = lazy(() => import('./components/layouts/Task'))
const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const Recover = lazy(() => import('./pages/recover'))
const Personal = lazy(() => import('./pages/dashboard/personal'))
const Account = lazy(() => import('./pages/dashboard/account'))
const Hours = lazy(() => import('./pages/dashboard/hours'))
const Consolidated = lazy(() => import('./pages/dashboard/consolidated'))
const Payroll = lazy(() => import('./pages/dashboard/payroll'))
const Setting = lazy(() => import('./pages/dashboard/setting'))
const Time = lazy(() => import('./pages/dashboard/setting/time'))
const Payment = lazy(() => import('./pages/dashboard/setting/payment'))
const Workday = lazy(() => import('./pages/dashboard/setting/workday'))
const Overtime = lazy(() => import('./pages/dashboard/setting/overtime'))
const Contract = lazy(() => import('./pages/dashboard/setting/contract'))
const Holidays = lazy(() => import('./pages/dashboard/setting/holidays'))
const Regimens = lazy(() => import('./pages/dashboard/setting/regimens'))
const Taxes = lazy(() => import('./pages/dashboard/setting/taxes'))
const Users = lazy(() => import('./pages/dashboard/setting/users'))
const Page404 = lazy(() => import('./pages/page404'))

const App = () => {
  const user = useContext(AuthContext)
  return (
    <Suspense fallback={<>...</>}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<>...</>}>
                  <Home />
                </Suspense>
              }
              exact
            />
            {user && (
              <>
                <Route
                  path="/login"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Login />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/signup"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Signup />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/recover"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Recover />
                    </Suspense>
                  }
                  exact
                />
              </>
            )}
          </Route>
          <Route element={<DashboardLayout />}>
            <Route element={<Setup />}>
              <Route
                path="/account"
                element={
                  <Suspense fallback={<>...</>}>
                    <Account />
                  </Suspense>
                }
                exact
              />
              <Route
                path="/setting"
                element={
                  <Suspense fallback={<>...</>}>
                    <Setting />
                  </Suspense>
                }
                exact
              >
                <Route
                  path="/setting/taxes"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Taxes />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/users"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Users />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/time"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Time />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/payment"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Payment />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/workday"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Workday />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/holidays"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Holidays />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/overtime"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Overtime />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/contract"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Contract />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/setting/regimens"
                  element={
                    <Suspense fallback={<>...</>}>
                      <Regimens />
                    </Suspense>
                  }
                  exact
                />
              </Route>
            </Route>
            <Route element={<Task />}>
              <Route
                path="/personal"
                element={
                  <Suspense fallback={<>...</>}>
                    <Personal />
                  </Suspense>
                }
                exact
              />
              <Route
                path="/hours"
                element={
                  <Suspense fallback={<>...</>}>
                    <Hours />
                  </Suspense>
                }
                exact
              />
              <Route
                path="/consolidated"
                element={
                  <Suspense fallback={<>...</>}>
                    <Consolidated />
                  </Suspense>
                }
                exact
              />
              <Route
                path="/payroll"
                element={
                  <Suspense fallback={<>...</>}>
                    <Payroll />
                  </Suspense>
                }
                exact
              />
            </Route>
          </Route>

          <Route element={<NonLayout />}>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
