'use client'

import { TOKEN_NAME } from '@/constants/cookies'
import { setAuthorizationToken } from '@/helpers/heplers'
import { userRoleState, userState } from '@/store/userState'
import axios from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { createContext, useContext, useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { LOGIN_PATH } from '../path/internalPaths'
import { getUserInfo } from '../services/user-services'

const COOKIE_EXPIRATION_DAYS = 30
const UNAUTHORIZED = 401

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.withCredentials = true

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

const useProvideAuth = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useRecoilState(userState)
  // const setUserRole = useSetRecoilState(userRoleState)
  const router = useRouter()
  const { query } = router

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    axios.defaults.headers['Accept-Language'] = 'vi'
    axios.interceptors.request.use(
      config => {
        return config
      },
      error => {
        console.log(error)
      },
    )

    axios.interceptors.response.use(
      response => response,
      async error => {},
    )

    const token = Cookies.get(TOKEN_NAME)
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    if (token) {
    } else {
    }
  }, [])

  const login = async data => {}

  const checkValidUser = async responseData => {}

  const logout = ({ withRedirect } = {}) => {}

  return {
    user,
    isAuthenticated,
    isAuthChecked,
    logout,
    login,
    setAuthorizationToken,
  }
}

export default AuthProvider
