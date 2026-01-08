import { Box, Grid, Skeleton } from '@mui/material';
import { DashboardHeader } from './DashboardHeader';
import { StatCard } from "../../components/StatCard";
import { DashboardChart } from "../../components/DashboardChart";
import { ActiveUsersBarChart } from "../../components/ActiveUsersBarChart";
import { SpecialtyDonutChart } from "../../components/SpecialtyDonutChart";
import { PatientsTable } from "../../components/PatientsTable";
import { useDashboardStats, useDashboardCharts, useRecentPatients } from '../../api/dashboardApi';

export const DashboardHome = () => {
  const { data: stats, isLoading: sL } = useDashboardStats();
  const { data: charts, isLoading: cL } = useDashboardCharts();
  const { data: patients, isLoading: pL } = useRecentPatients();

  const consultationsData = charts?.consultations || [];
  const prescriptionsData = charts?.prescriptions || [];

  return (
    <Box sx={{ pb: 4 }}>
      <DashboardHeader />
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {sL ? Array.from(new Array(5)).map((_, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 2.4 }}>
            <Skeleton variant="rectangular" height={140} sx={{ borderRadius: '16px' }} />
          </Grid>
        )) : stats?.map((s, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 2.4 }}>
            <StatCard {...s} Icon={s.icon} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, lg: 6 }}>
          {cL ? <Skeleton variant="rectangular" height={400} sx={{ borderRadius: '16px' }} /> : (
            <DashboardChart 
              title="Consultation Over Time" 
              data={consultationsData} 
              dataKey="consultations" 
              strokeColor="#0EA5E9" 
              fillColor="#0EA5E9" 
            />
          )}
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          {cL ? <Skeleton variant="rectangular" height={400} sx={{ borderRadius: '16px' }} /> : (
            <DashboardChart 
              title="Prescription Volume Trend" 
              data={prescriptionsData} 
              dataKey="prescriptions" 
              strokeColor="#10B981" 
              fillColor="#10B981" 
            />
          )}
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          {cL ? <Skeleton variant="rectangular" height={400} sx={{ borderRadius: '16px' }} /> : (
            <ActiveUsersBarChart data={charts?.barData || []} />
          )}
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          {cL ? <Skeleton variant="rectangular" height={400} sx={{ borderRadius: '16px' }} /> : (
            <SpecialtyDonutChart data={charts?.specialties || []} />
          )}
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        {pL ? (
          <Skeleton variant="rectangular" height={300} sx={{ borderRadius: '16px' }} />
        ) : (
          <PatientsTable data={patients || []} />
        )}
      </Box>
    </Box>
  );
};