import { useQuery } from '@tanstack/react-query'
import { dashboardService } from '../services/dashboardService'
import GroupsIcon from '@mui/icons-material/Groups'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import RateReviewIcon from '@mui/icons-material/RateReview'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const data = await dashboardService.getStats()
      return [
        {
          title: 'Total Patients',
          value: data?.patients?.total_patients || 0,
          percentage: `${data?.patients?.patients_percentage_since_last_week || 0}%`,
          bgColor: '#F9F4FF',
          iconColor: '#4CBD91',
          icon: GroupsIcon,
        },
        {
          title: 'Total Doctors',
          value: data?.doctors?.total_doctors || 0,
          percentage: `${data?.doctors?.doctors_percentage_since_last_week || 0}%`,
          bgColor: '#F6FAFD',
          iconColor: '#2065D1',
          icon: MedicalServicesIcon,
        },
        {
          title: 'Pending Reviews',
          value: data?.pending_reviews?.total_pending_reviews || 0,
          percentage: `${data?.pending_reviews?.pending_reviews_percentage_since_last_week || 0}%`,
          bgColor: '#FFF8ED',
          iconColor: '#F59E0B',
          icon: RateReviewIcon,
        },
        {
          title: 'Total Consultations',
          value: data?.consultations?.total_consultations || 0,
          percentage: `${data?.consultations?.consultations_percentage_since_last_week || 0}%`,
          bgColor: '#F9F4FF',
          iconColor: '#8B5CF6',
          icon: AssignmentIcon,
        },
        {
          title: 'Prescriptions Issued',
          value: data?.prescriptions?.total_prescriptions || 0,
          percentage: `${data?.prescriptions?.prescriptions_percentage_since_last_week || 0}%`,
          bgColor: '#F2FFFC',
          iconColor: '#10B981',
          icon: ReceiptLongIcon,
        },
      ]
    },
  })
}

export const useDashboardCharts = () => {
  return useQuery({
    queryKey: ['dashboard-charts'],
    queryFn: async () => {
      const data = await dashboardService.getStats()

      const barCategories = data?.active_doctors_vs_patients?.categories || []
      const doctorsSeries = data?.active_doctors_vs_patients?.series?.[0]?.data || []
      const patientsSeries = data?.active_doctors_vs_patients?.series?.[1]?.data || []
      const chartColors = ['#38CBAD', '#5078F2', '#F27281', '#F2A62C']

      return {
        consultations:
          data?.consultationOverTime?.map((c) => ({ name: c.month, consultations: c.count })) || [],
        prescriptions:
          data?.prescriptionVolumeTrend?.map((p) => ({ name: p.month, prescriptions: p.count })) ||
          [],
        barData: barCategories.map((cat, i) => ({
          name: cat,
          doctors: doctorsSeries[i] || 0,
          patients: patientsSeries[i] || 0,
        })),
        specialties:
          data?.top_specialities_in_demand?.map((s, index) => ({
            name: s.speciality,
            value: s.count,
            color: chartColors[index % chartColors.length],
          })) || [],
      }
    },
  })
}

export const useRecentPatients = () => {
  return useQuery({
    queryKey: ['recent-patients'],
    queryFn: () => dashboardService.getPatients(),
  })
}
