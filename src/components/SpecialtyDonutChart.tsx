import { Paper, Box, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const SpecialtyDonutChart = ({ data }: { data: any[] }) => {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #F1F5F9', height: '100%' }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#4A5568', fontSize: '16px' }}>
        Top Specialties in Demand
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', height: 250 }}>
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip />
            {/* Added dominantBaseline and textAnchor for SVG positioning */}
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              style={{ fontSize: '20px', fontWeight: 700, fill: '#1A202C' }}
            >
              30%
            </text>
          </PieChart>
        </ResponsiveContainer>
        
        <Box sx={{ width: '50%', pl: 2 }}>
          {/* Grid container remains the same */}
          <Grid container spacing={2}>
            {data.map((item) => (
              /* FIXED: Removed 'item' and used 'size' prop for modern MUI Grid */
              <Grid key={item.name} size={{ xs: 6 }}>
                <Typography variant="caption" sx={{ color: '#A0AEC0', display: 'block' }}>
                  {item.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.color }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};