import { Paper, Box, Typography, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface ChartProps {
  title: string
  data: any[]
  dataKey: string
  strokeColor: string
  fillColor: string
}

const CustomTooltip = ({ active, payload, strokeColor }: any) => {
  if (active && payload && payload.length) {
    const valueLabel = payload[0].dataKey === 'consultations' ? 'Consultations' : 'Prescriptions'
    return (
      <Box sx={{ position: 'relative', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.2))' }}>
        <Box
          sx={{
            bgcolor: '#2D3748',
            color: '#fff',
            px: 2,
            py: 1,
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              bgcolor: strokeColor,
              width: 20,
              height: 20,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: '#fff' }}>↗</Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, fontSize: '14px', fontFamily: "'Onest', sans-serif" }}
          >
            {`${payload[0].value} ${valueLabel}`}
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderTop: '7px solid #2D3748',
          }}
        />
      </Box>
    )
  }
  return null
}

export const DashboardChart = ({ title, data, dataKey, strokeColor, fillColor }: ChartProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: '16px',
        height: '100%',
        border: '1px solid #F1F5F9',
        background: '#FFFFFF',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#4A5568',
            fontSize: '18px',
            fontFamily: "'Onest', sans-serif",
          }}
        >
          {title}
        </Typography>
        <IconButton size="small">
          <MoreHorizIcon sx={{ color: '#CBD5E1' }} />
        </IconButton>
      </Box>
      <Box sx={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={fillColor} stopOpacity={0.2} />
                <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
              </linearGradient>
              <filter id="lineShadow" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid vertical={true} horizontal={false} stroke="#F1F5F9" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{ fill: '#A0AEC0', fontSize: 13, fontWeight: 500 }}
              dy={15}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A0AEC0', fontSize: 13 }}
              ticks={[20, 40, 60, 80, 100]}
              domain={[0, 100]}
            />
            <Tooltip
              content={<CustomTooltip strokeColor={strokeColor} />}
              cursor={{ stroke: '#E2E8F0', strokeWidth: 1 }}
              offset={-40}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={strokeColor}
              strokeWidth={4}
              fillOpacity={1}
              fill={`url(#color${dataKey})`}
              filter="url(#lineShadow)"
              dot={{ r: 6, fill: '#fff', stroke: strokeColor, strokeWidth: 2, fillOpacity: 1 }}
              activeDot={{ r: 8, strokeWidth: 0, fill: strokeColor }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}
