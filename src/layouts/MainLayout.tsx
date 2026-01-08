import React from 'react'
import { Box } from '@mui/material'
import { Navbar } from '../components/Navbar'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#FFFFFF', overflowX: 'hidden' }}>
      <div className="mx-auto w-full max-w-378">
        <Navbar />
        <main>{children}</main>
      </div>
    </Box>
  )
}
