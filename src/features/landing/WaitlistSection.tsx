import React, { useState } from 'react'
import { Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import facebookIcon from '../../assets/facebook.svg'
import youtubeIcon from '../../assets/youtube.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import { toast } from 'react-toastify'
import footerLogo from '../../assets/footerLogo.svg'

export const WaitlistSection = () => {
  const [email, setEmail] = useState('')
  const socialIcons = [
    { id: 'fb', src: facebookIcon, alt: 'Facebook' },
    { id: 'yt', src: youtubeIcon, alt: 'YouTube' },
    { id: 'wa', src: whatsappIcon, alt: 'WhatsApp' },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setTimeout(() => {
      toast.success('Subscribed successfully!')
      setEmail('')
    }, 1000)
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2E4798',
        width: '100%',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        px: { xs: '20px', md: '80px' },
      }}
    >
      <div className="max-w-378 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <Typography
            variant="h2"
            sx={{
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: { xs: '41px', md: '48px' },
              mb: 3,
              fontFamily: 'Onest, sans-serif',
            }}
          >
            Join Our Waitlist
          </Typography>

          <Typography
            sx={{
              color: '#D1D5DB',
              fontSize: { xs: '14px', md: '14px' },
              fontWeight: 400,
              maxWidth: '650px',
              lineHeight: 1.6,
              mb: 6,
            }}
          >
            Be the first one to know about discounts, offers and events weekly in your mailbox.
            Unsubscribe whenever you like with one click.
          </Typography>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-row items-center w-full max-w-150 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-[40px] p-1 md:p-1.5"
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              autoComplete="off"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: { xs: 1, md: 2 } }}>
                    <MailOutlineIcon
                      sx={{ color: '#FFFFFFCC', fontSize: { xs: '18px', md: '24px' } }}
                    />
                  </InputAdornment>
                ),
                sx: {
                  color: 'white',
                  height: { xs: '44px', md: '54px' },
                  fontSize: { xs: '14px', md: '16px' },
                  '& input::placeholder': {
                    color: '#FFFFFFCC',
                    opacity: 1,
                  },
                },
              }}
              sx={{ flex: 1 }}
            />
            <button
              type="submit"
              className="bg-[#F0F4FF] text-[#2E4798] font-semibold px-5 md:px-10 h-11 md:h-13.5 rounded-4xl transition-all hover:bg-white active:scale-95 cursor-pointer text-[13px] md:text-[16px] whitespace-nowrap"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-8 border-t border-[#FFFFFF1A] pt-12">
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img src={footerLogo} alt="iPrescribe Logo" className="h-12" />
            </div>

            <Typography sx={{ color: '#FFFFFF99', fontSize: '16px', fontFamily: 'Onest' }}>
              © 2025, All Rights Reserved
            </Typography>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <IconButton
                  key={icon.id}
                  sx={{
                    bgcolor: '#F0F4FF',
                    width: 44,
                    height: 44,
                    '&:hover': { bgcolor: 'white' },
                  }}
                >
                  <img src={icon.src} alt={icon.alt} style={{ width: '20px', height: '20px' }} />
                </IconButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
