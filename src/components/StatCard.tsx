// src/features/dashboard/components/StatCard.tsx
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface StatCardProps {
  title: string;
  value: string | number;
  percentage: string;
  bgColor: string;
  iconColor: string;
  Icon: React.ElementType;
}

export const StatCard = ({ title, value, percentage, bgColor, iconColor, Icon }: StatCardProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: '16px',
        bgcolor: bgColor, 
        flex: 1,
        minWidth: '200px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body2" sx={{ color: '#718096', fontWeight: 500, fontSize: '12px' }}>
          {title}
        </Typography>
        <Box 
          sx={{ 
            bgcolor: iconColor, 
            p: 0.5, 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center' 
          }}
        >
          <Icon sx={{ fontSize: '18px', color: '#FFFFFF' }} />
        </Box>
      </Box>

      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, color: '#1A202C' }}>
        {value}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <ArrowDownwardIcon sx={{ color: '#F56565', fontSize: '16px' }} />
        <Typography variant="caption" sx={{ color: '#F56565', fontWeight: 600 }}>
          {percentage}
        </Typography>
        <Typography variant="caption" sx={{ color: '#718096', ml: 0.5 }}>
          Since last week
        </Typography>
      </Box>
    </Paper>
  );
};