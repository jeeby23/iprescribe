import React, { useState } from 'react';
import { 
  Box, Typography, TextField, Button, 
  IconButton, InputAdornment, Paper, CircularProgress 
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import brandLogo from '../../assets/plogo.png';
import { useLoginMutation } from '../../hooks/useLoginMutation';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const loginMutation = useLoginMutation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setErrors(prev => ({ ...prev, email: 'Email is required' }));
    if (password.length < 6) return setErrors(prev => ({ ...prev, password: 'Password too short' }));

    loginMutation.mutate({ email, password });
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(180deg, #283C85 0%, #090E1F 100%)', // Matches Sidebar
        position: 'fixed', top: 0, left: 0
      }}
    >
      <Paper 
        elevation={0}
        sx={{ 
          width: '100%', maxWidth: '480px', p: { xs: 4, md: 6 }, 
          borderRadius: '16px', bgcolor: '#FFFFFF', textAlign: 'center', mx: 2 
        }}
      >
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <img src={brandLogo} alt="Logo" style={{ height: '50px' }} />
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '28px', mb: 1, color: '#1A202C', fontFamily: 'Onest' }}>
          Login to iPrescribe Admin
        </Typography>
        <Typography variant="body1" sx={{ color: '#718096', mb: 4 }}>
          Provide the required details to login
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ textAlign: 'left' }}>
          <Typography sx={{ mb: 1, fontWeight: 500, color: '#4A5568', fontSize: '14px' }}>Email Address</Typography>
          <TextField
            fullWidth placeholder="admin@iprescribe.com" variant="outlined"
            value={email} onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email} helperText={errors.email}
            disabled={loginMutation.isPending}
            sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <Typography sx={{ mb: 1, fontWeight: 500, color: '#4A5568', fontSize: '14px' }}>Password</Typography>
          <TextField
            fullWidth type={showPassword ? 'text' : 'password'}
            placeholder="********" variant="outlined"
            value={password} onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password} helperText={errors.password}
            disabled={loginMutation.isPending}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 1, '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <Button 
            fullWidth type="submit" variant="contained" 
            disabled={loginMutation.isPending}
            sx={{ 
              bgcolor: '#283C85', py: 1.8, borderRadius: '12px', mt: 3,
              fontSize: '16px', fontWeight: 600, textTransform: 'none',
              '&:hover': { bgcolor: '#1e2d63' }
            }}
          >
            {loginMutation.isPending ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};