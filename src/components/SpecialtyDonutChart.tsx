import { Paper, Box, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ bgcolor: '#2D3748', color: '#fff', px: 2, py: 1, borderRadius: '8px', display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ bgcolor: payload[0].payload.color, width: 18, height: 18, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '10px' }}>↗</Typography>
        </Box>
        <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>{payload[0].name}</Typography>
      </Box>
    );
  }
  return null;
};

export const SpecialtyDonutChart = ({ data }: { data: any[] }) => {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #F1F5F9', height: '100%' }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, color: '#4A5568', fontSize: '18px' }}>
        Top Specialties in Demand
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', height: 250 }}>
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={65} outerRadius={85} paddingAngle={0} dataKey="value" stroke="none">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '24px', fontWeight: 800, fill: '#1A202C', fontFamily: 'Onest' }}>
              30%
            </text>
          </PieChart>
        </ResponsiveContainer>
        <Box sx={{ width: '50%', pl: 4 }}>
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid size={{ xs: 6 }} key={item.name}>
                <Typography variant="caption" sx={{ color: '#A0AEC0', fontWeight: 600, fontSize: '13px' }}>{item.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#1A202C', fontSize: '20px' }}>{item.value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};