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
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#4A5568', fontSize: '18px' }}>
          Active Doctors vs Active Patients
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} barGap={4} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A0AEC0', fontSize: 12, fontWeight: 500 }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#A0AEC0', fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{
                borderRadius: '10px',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ paddingBottom: '20px', fontSize: '14px', fontWeight: 500 }}
            />
            <Bar
              dataKey="doctors"
              name="Doctors"
              fill="#F2A62C"
              radius={[2, 2, 0, 0]}
              barSize={6}
            />
            <Bar
              dataKey="patients"
              name="Patients"
              fill="#0EA5E9"
              radius={[2, 2, 0, 0]}
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  )
}
