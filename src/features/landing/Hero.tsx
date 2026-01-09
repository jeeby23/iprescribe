import { Box, Typography } from '@mui/material'
import heroImg from '../../assets/hero.webp'
import Googleplay from '../../assets/Google.svg'
import Appstore from '../../assets/Apple.svg'
import icon from '../../assets/Icon.svg'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #D4DDFF 100%)',
        py: { xs: 8, md: 12 },
        px: { xs: '20px', md: '80px' },
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[#689AFF1A] rounded-md px-4 py-1.5 w-fit border border-slate-100 shadow-sm">
            <img src={icon} alt="iPrescribe Icon" className="h-6 w-12" />
            <span className="text-[10px] md:text-sm font-medium text-[#2065D1]">Ready to explore iPrescribe?</span>
            <span className="text-[10px] md:text-sm font-bold text-[#4C51BF] cursor-pointer">
              <Link to="/login">Join Waitlist →</Link>
            </span>
          </div>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '40px', md: '64px' },
              lineHeight: { xs: '48px', md: '72px' },
              fontWeight: 500,
              letterSpacing: '-0.04em',
              color: '#212121',
            }}
          >
            Your Bridge <br /> Between Care & Convenience
          </Typography>

          <Typography className="text-[#718096] text-lg md:text-xl max-w-lg">
            Schedule consultations, send or receive e-prescriptions, and manage medications from one
            secure platform.
          </Typography>

          <div className="flex gap-4 mt-4 justify-center md:justify-start cursor-pointer">
            <img src={Googleplay} alt="Play Store" className="h-10 md:h-12" />
            <img src={Appstore} alt="App Store" className="h-10 md:h-12" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={heroImg} alt="Mockup" className="w-full max-w-137.5 drop-shadow-2xl" />
        </div>
      </div>
    </Box>
  )
}
