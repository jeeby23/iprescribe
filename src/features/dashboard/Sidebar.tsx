import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import brandLogo from '../../assets/dashboardlogo.png';
import { useUiStore } from '../../store/useUiStore';

import DashboardIcon from '@mui/icons-material/GridView';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import StoreIcon from '@mui/icons-material/StorefrontOutlined';
import PaymentIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import SecurityIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HistoryIcon from '@mui/icons-material/History';
import ArticleIcon from '@mui/icons-material/DescriptionOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';

const menuGroups = [
  {
    title: 'Main Menu',
    items: [
      { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
      { text: 'User Management', icon: <PeopleIcon />, path: '/dashboard/users' },
      { text: 'Consult. & Presp.', icon: <AssignmentIcon />, path: '/dashboard/consultations' },
      { text: 'Pharm. & Orders Mgt.', icon: <StoreIcon />, path: '/dashboard/orders' },
      { text: 'Payments', icon: <PaymentIcon />, path: '/dashboard/payments' },
    ]
  },
  {
    title: 'Admin Menu',
    items: [
      { text: 'Settings', icon: <SettingsIcon />, path: '/dashboard/settings' },
      { text: 'Roles & Permissions', icon: <SecurityIcon />, path: '/dashboard/roles' },
      { text: 'Activity Log', icon: <HistoryIcon />, path: '/dashboard/activity' },
      { text: 'Blog / Health Tips', icon: <ArticleIcon />, path: '/dashboard/blog' },
      { text: 'Notifications Mgt.', icon: <NotificationsIcon />, path: '/dashboard/notifications' },
      { text: 'Website Updates', icon: <LanguageIcon />, path: '/dashboard/updates' },
    ]
  }
];

export const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  
  const { toggleSidebar } = useUiStore();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavItemClick = () => {
    if (isMobile) {
      toggleSidebar(false);
    }
  };

  return (
    <Box
      sx={{ 
        width: { xs: '100%', md: 280 }, 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #283C85 0%, #090E1F 100%)',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        py: 4, 
        px: 2, 
        overflowY: 'auto'
      }}
    >
      <Box sx={{ px: 2, mb: 6, display: 'flex', alignItems: 'center' }}>
        <img src={brandLogo} alt="Logo" style={{ height: '32px' }} />
      </Box>

      {menuGroups.map((group) => (
        <Box key={group.title} sx={{ mb: 4 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              px: 2, 
              color: 'rgba(255, 255, 255, 0.6)', 
              textTransform: 'uppercase', 
              fontWeight: 600, 
              fontSize: '12px', 
              display: 'block', 
              mb: 1 
            }}
          >
            {group.title}
          </Typography>
          <List disablePadding>
            {group.items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={handleNavItemClick} 
                    sx={{
                      borderRadius: '0 24px 24px 0',
                      backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                      color: isActive ? '#283C85' : '#FFFFFF',
                      '&:hover': { 
                        backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)' 
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text} 
                      primaryTypographyProps={{ 
                        fontSize: '14px', 
                        fontWeight: isActive ? 600 : 400 
                      }} 
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      ))}
    </Box>
  );
};