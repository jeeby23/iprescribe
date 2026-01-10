import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import type { LoginRequest, AuthResponse } from '../types/api'
export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const { data } = await axiosInstance.post<AuthResponse>('/auth/login', credentials)
      return data
    },
    onSuccess: (response) => {
      const { user, token } = response.data

      setAuth(user, token)
      toast.success('Login Successful!')
      navigate('/dashboard')
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Invalid credentials'
      toast.error(message)
    },
  })
}
