import { useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { PatientRecord } from '../types/api'

export const PatientsTable = ({ data }: { data: PatientRecord[] }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filteredData = (data || []).filter((patient) => {
    const fName = patient?.user?.first_name || ''
    const lName = patient?.user?.last_name || ''
    const email = patient?.email || patient?.user?.email || ''
    const pId = patient?.patient_id || ''

    const searchStr = searchTerm.toLowerCase()

    return (
      fName.toLowerCase().includes(searchStr) ||
      lName.toLowerCase().includes(searchStr) ||
      email.toLowerCase().includes(searchStr) ||
      pId.toLowerCase().includes(searchStr)
    )
  })

  const displayData = showAll ? filteredData : filteredData.slice(0, 5)

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', border: '1px solid #F1F5F9', mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '10px', md: '18px' },
          }}
        >
          Recent Patients Sign Up
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <TextField
            size="small"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#94A3B8', fontSize: '20px' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: '#F8FAFC' } }}
          />

          <Typography
            onClick={() => setShowAll(!showAll)}
            sx={{
              color: '#283C85',
              fontWeight: 400,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex-row',
              alignItems: 'center',
              userSelect: 'none',

              '&:hover': { opacity: 0.8 },
            }}
          >
            {showAll ? 'Show Less' : 'See All'}
            <ChevronRightIcon
              fontSize="small"
              sx={{ transform: showAll ? 'rotate(90deg)' : 'none', transition: '0.2s' }}
            />
          </Typography>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead sx={{ bgcolor: '#F8FAFC' }}>
            <TableRow>
              {[
                '#',
                'Sign Up Date',
                'Patient Name',
                'Email Address',
                'Phone Number',
                'Last Seen',
                'Location',
                'Device',
                'Status',
              ].map((head) => (
                <TableCell
                  key={head}
                  sx={{ color: '#4A5568', fontWeight: 600, fontSize: '13px', borderBottom: 'none' }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.length > 0 ? (
              displayData.map((row, index) => (
                <TableRow key={row.id} sx={{ '&:hover': { bgcolor: '#F1F5F9' } }}>
                  <TableCell sx={{ fontSize: '13px' }}>{index + 1}</TableCell>
                  <TableCell sx={{ fontSize: '13px' }}>
                    {row.created_at ? new Date(row.created_at).toLocaleDateString() : 'N/A'}
                  </TableCell>
                  <TableCell sx={{ fontSize: '13px', fontWeight: 500 }}>
                    {row.user?.first_name || row.user?.last_name
                      ? `${row.user?.first_name ?? ''} ${row.user?.last_name ?? ''}`.trim()
                      : `Patient ${row.patient_id}`}
                  </TableCell>
                  <TableCell sx={{ fontSize: '13px' }}>
                    {row.email || row.user?.email || 'N/A'}
                  </TableCell>
                  <TableCell sx={{ fontSize: '13px' }}>{row.user?.phone || 'N/A'}</TableCell>
                  <TableCell sx={{ fontSize: '13px' }}>
                    {row.last_seen ? new Date(row.last_seen).toLocaleTimeString() : 'Never'}
                  </TableCell>
                  <TableCell sx={{ fontSize: '13px' }}>{row.user?.state || 'N/A'}</TableCell>
                  <TableCell sx={{ fontSize: '13px' }}>{row.user?.device_type || 'Web'}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status || 'Pending'}
                      size="small"
                      sx={{
                        bgcolor: row.status === 'Verified' ? '#F0FDF4' : '#FFFBEB',
                        color: row.status === 'Verified' ? '#16A34A' : '#D97706',
                        fontWeight: 600,
                        borderRadius: '6px',
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 4, color: '#94A3B8' }}>
                  No patients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
