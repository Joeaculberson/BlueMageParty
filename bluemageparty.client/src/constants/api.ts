const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const LOGIN_URL = `${API_BASE_URL}/Login/Login`;
export const REGISTER_URL = `${API_BASE_URL}/Register/Register`;
export const USERS_URL = `${API_BASE_URL}/Users`;
export const VERIFY_URL = `${API_BASE_URL}/Verify/VerifyToken`;
export const VERIFY_CODE_URL = `${API_BASE_URL}/Verify/VerifyCode`;
export const RESEND_ACTIVATION_EMAIL_URL = `${API_BASE_URL}/Register/ResendActivationEmail`
export const RESET_PASSWORD_REQUEST_URL = `${API_BASE_URL}/ResetPassword/ResetPasswordRequest`
export const RESET_PASSWORD_URL = `${API_BASE_URL}/ResetPassword/ResetPassword`
export const SAVE_SPELLS_BULK_URL = `${API_BASE_URL}/Spells/SaveBulk`
export const GET_USER_ADMIN_URL = `${API_BASE_URL}/Users/IsAdmin/`
export const GET_SPELLS_URL = `${API_BASE_URL}/Spells`
