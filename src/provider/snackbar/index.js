'use client'

import { Clear } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { createRef } from 'react'

function ProviderSnackbar({ children }) {
  // add action to all snackbars
  const notistackRef = createRef()
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key)
  }

  return (
    <SnackbarProvider
      maxSnack={10}
      ref={notistackRef}
      preventDuplicate
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      action={key => (
        <IconButton onClick={onClickDismiss(key)}>
          <Clear sx={{ color: 'common.white' }} />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  )
}

export default ProviderSnackbar
