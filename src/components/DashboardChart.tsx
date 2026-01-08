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

const CustomTooltip = ({ active, payload,strokeColor }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: '#2D3748',
          color: '#fff',
          p: 1.5,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        }}
      >
        <Box
          sx={{
            bgcolor: strokeColor,
            width: 24,
            height: 24,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="caption" sx={{ fontSize: '12px' }}>
            ↗
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {`${payload[0].value} ${payload[0].name === 'consultations' ? 'Consultations' : 'Prescriptions'}`}
        </Typography>
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
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#4A5568', fontSize: '16px' }}>
          {title}
        </Typography>
        <IconButton size="small">
          <MoreHorizIcon sx={{ color: '#CBD5E1' }} />
        </IconButton>
      </Box>

      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={fillColor} stopOpacity={0.2} />
                <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }}
              dy={15}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip content={<CustomTooltip strokeColor={strokeColor} />} />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={strokeColor}
              strokeWidth={3}
              fillOpacity={1}
              fill={`url(#color${dataKey})`}
              dot={{ r: 5, fill: '#fff', strokeWidth: 2, stroke: strokeColor }}
              activeDot={{ r: 7, strokeWidth: 0, fill: strokeColor }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}
