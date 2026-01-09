import { Box, Typography, Button } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

export const DashboardHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: 4,
        width: '100%',
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: '24px',
            color: '#1E293B',
            fontFamily: 'Onest, sans-serif',
          }}
        >
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: '#718096', mt: 0.5, fontSize: '14px' }}>
          Latest update for the last 7 days, check now
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            px: 2,
            py: 1,
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            bgcolor: '#FFFFFF',
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: '18px', color: '#718096' }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#1E293B' }}>
            12th Sept - 15th Sept, 2025
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            bgcolor: '#283C85',
            color: '#FFFFFF',
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '8px',
            px: 3,
            py: 1,
            '&:hover': { bgcolor: '#1e2d63' },
          }}
        >
          Export
        </Button>
      </Box>
    </Box>
  )
}
