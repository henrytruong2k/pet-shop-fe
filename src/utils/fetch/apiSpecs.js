import { POST } from '@/constants/requestMethod'
import { ADMIN } from '@/constants/requestPrefix'

export const LOGIN_ACCOUNT = { method: POST, url: 'user/signin', prefix: ADMIN }
