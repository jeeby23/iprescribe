export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: {
    user: User;
    token: string;
  };
  message?: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;     
  state: string | null;     
  device_type: string | null; 
  roles: Array<{ name: string; slug: string }>;
}

export interface DashboardData {
  patients: { total_patients: number; patients_percentage_since_last_week: number };
  doctors: { total_doctors: number; doctors_percentage_since_last_week: number };
  pending_reviews: { total_pending_reviews: number; pending_reviews_percentage_since_last_week: number };
  consultations: { total_consultations: number; consultations_percentage_since_last_week: number };
  prescriptions: { total_prescriptions: number; prescriptions_percentage_since_last_week: number };
  consultationOverTime: Array<{ month: string; count: number }>;
  prescriptionVolumeTrend: Array<{ month: string; count: number }>;
  top_specialities_in_demand: Array<{ speciality: string; count: number }>;
  active_doctors_vs_patients: {
    categories: string[];
    series: Array<{ name: string; data: number[] }>;
  };
}

export interface PatientRecord {
  id: number;
  patient_id: string;
  email: string | null;
  status: string;
  created_at: string;
  last_seen: string | null;
  user: User;
}