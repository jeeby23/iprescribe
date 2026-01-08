import { AppBar, Toolbar, IconButton, Drawer, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useUiStore } from '../store/useUiStore'
import brandLogo from '../assets/plogo.png'
import { Link } from 'react-router-dom'
const navLinks = [
  { title: 'Home', path: '#' },
  { title: 'Features', path: '#features' },
  { title: 'Contact us', path: '#contact' },
]

export const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useUiStore()

  const NavContent = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-8 p-6 md:p-0">
      {navLinks.map((link) => (
        <a
          key={link.title}
          href={link.path}
          className="text-[#718096] hover:text-[#2065D1] font-medium text-[16px] transition-colors no-underline"
        >
          {link.title}
        </a>
      ))}
    </div>
  )

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#FFFFFF',
        height: { xs: '75px', md: '89px' },
        justifyContent: 'center',
      }}
    >
      <Toolbar
        disableGutters
        sx={{ px: { xs: '20px', md: '80px' } }}
        className="flex justify-between w-full"
      >
        <div className="flex items-center cursor-pointer">
          <img src={brandLogo} alt="iPrescribe Logo" className="h-8 md:h-10" />
        </div>

        <div className="hidden md:flex items-center gap-12">
          <NavContent />
          <button className="bg-[#4C51BF] text-white px-6 py-2.5 rounded-3xl font-medium text-[16px]">
            <Link to="/login">Join Waitlist</Link>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button className="bg-[#4C51BF] text-white px-4 py-1.5 rounded-3xl font-medium text-[14px]">
            <Link to="/login">Join Waitlist</Link>
          </button>
          <IconButton onClick={() => toggleMenu(true)} sx={{ color: '#718096' }}>
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={() => toggleMenu(false)}
          PaperProps={{ sx: { width: '280px' } }}
        >
          <Box className="flex justify-end p-4">
            <IconButton onClick={() => toggleMenu(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <NavContent />
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
