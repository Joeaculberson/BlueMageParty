const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const LOGIN_URL = `${API_BASE_URL}/Login/Login`;
export const REGISTER_URL = `${API_BASE_URL}/Register/Register`;
export const USERS_URL = `${API_BASE_URL}/Users`;
export const VERIFY_URL = `${API_BASE_URL}/Register/VerifyToken`;
export const VERIFY_CODE_URL = `${API_BASE_URL}/Register/VerifyCode`;
export const RESEND_ACTIVATION_EMAIL = `${API_BASE_URL}/Register/ResendActivationEmail`
