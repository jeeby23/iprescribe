import axiosInstance from '../api/axiosInstance';
import type { DashboardData, PatientRecord } from '../types/api';

export const dashboardService = {
  getStats: async () => {
    const { data } = await axiosInstance.get<{ data: DashboardData }>('/admin/dashboard/stats');
    return data.data;
  },
  
  getPatients: async (page = 1) => {
    const { data } = await axiosInstance.get<{ data: { data: PatientRecord[] } }>(`/admin/patients?page=${page}`);
    return data.data.data;
  }
};