'use client'
// ** Next Import
import Link from 'next/link'

// ** MUI Components
import { Stack, Box, Typography, Button } from '@mui/material'

const NotFound = () => {
  return (
    <Stack sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant='body1'>We couldn&prime;t find the page you are looking for.</Typography>
        </Box>
        <Button LinkComponent={Link} href='/' variant='contained' sx={{ px: 5.5, mt: 5 }}>
          Back to Home
        </Button>
      </Box>
    </Stack>
  )
}

export default NotFound
