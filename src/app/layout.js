import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import RecoilRootProvider from '@/provider/recoil'
import ProvidersQueryClient from '@/provider/react-query'
import { ThemeConfig } from '@/theme/theme'
import AuthProvider from '@/utils/auth/auth'
import ProviderSnackbar from '@/provider/snackbar'

export const metadata = {
  title: 'PetShop',
  description: '',
  // icons: {
  //   icon: '/favicon.svg',
  // },
  robots: {
    index: false,
    follow: false,
  },
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <body className={inter.className}>
        <ProvidersQueryClient>
          <AppRouterCacheProvider>
            <RecoilRootProvider>
              <ThemeConfig>
                <ProviderSnackbar>
                  <AuthProvider>
                    <NextTopLoader color='#3961F8' showSpinner={false} />
                    {children}
                  </AuthProvider>
                </ProviderSnackbar>
              </ThemeConfig>
            </RecoilRootProvider>
          </AppRouterCacheProvider>
        </ProvidersQueryClient>
      </body>
    </html>
  )
}
