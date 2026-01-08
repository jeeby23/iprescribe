import { Paper, Box, Typography } from '@mui/material'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export const ActiveUsersBarChart = ({ data }: { data: any[] }) => {
  return (
    <Paper
      elevation={0}
      sx={{ p: 3, borderRadius: '16px', border: '1px solid #F1F5F9', height: '100%' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#4A5568', fontSize: '16px' }}>
          Active Doctors vs Active Patients
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} barGap={8}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend verticalAlign="top" align="right" iconType="circle" />
            <Bar dataKey="doctors" fill="#F6AD55" radius={[4, 4, 0, 0]} barSize={8} />
            <Bar dataKey="patients" fill="#0EA5E9" radius={[4, 4, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}
