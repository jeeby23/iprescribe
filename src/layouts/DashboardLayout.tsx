import React, { useState } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { Sidebar } from '../features/dashboard/Sidebar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import { useUiStore } from '../store/useUiStore'
import { useAuthStore } from '../store/useAuthStore'

export const DashboardLayout = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { isSidebarOpen, toggleSidebar } = useUiStore()
  const { logout, user } = useAuthStore()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleCloseUserMenu()
    logout()
    navigate('/login')
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Drawer
        variant="temporary"
        open={isSidebarOpen}
        onClose={() => toggleSidebar(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, border: 'none' },
        }}
      >
        <Sidebar />
      </Drawer>

      <Box sx={{ display: { xs: 'none', md: 'block' }, width: 280, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', color: '#1E293B' }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {isMobile && (
                <IconButton onClick={() => toggleSidebar(true)} sx={{ color: '#718096' }}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <IconButton>
                <NotificationsNoneIcon />
              </IconButton>

              <Box
                onClick={handleOpenUserMenu}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, display: { xs: 'none', sm: 'block' } }}
                >
                  {user?.first_name ? `${user.first_name} ${user.last_name}` : 'Admin User'}
                </Typography>
                <AccountCircleIcon fontSize="large" sx={{ color: '#CBD5E1' }} />
              </Box>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseUserMenu}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1.5,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                    borderRadius: '12px',
                    minWidth: '180px',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
              >
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Account Info
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {user?.email}
                  </Typography>
                </Box>
                <MenuItem onClick={handleLogout} sx={{ color: '#F56565', fontWeight: 500 }}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" sx={{ color: '#F56565' }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            p: { xs: 2, md: 4 },
            flexGrow: 1,
            overflowY: 'auto',
            bgcolor: '#F8FAFC',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
