import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ToastContainer } from 'react-toastify'

import { theme } from './theme'
import { LandingPage } from './features/landing/LandingPage'
import { LoginPage } from './features/auth/LoginPage'
import { DashboardLayout } from './layouts/DashboardLayout'
import { DashboardHome } from './features/dashboard/DashboardHome'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
