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
export const GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL = `https://ffxivcollect.com/api/characters/43958939/spells/missing`
export const UPDATE_SPELL_OWNED_URL = `${API_BASE_URL}/SpellOwned`
export const GET_HOME_WORLDS_URL = `${API_BASE_URL}/HomeWorld`
export const GET_DATA_CENTERS_URL = `${API_BASE_URL}/DataCenter`
export const SEARCH_CHARACTER_URL = `${API_BASE_URL}/Loadstone/SearchCharacter`
export const GET_VERIFICATION_CODE_URL = `${API_BASE_URL}/LoadstoneVerification/GetVerificationCode`
export const VERIFY_CHARACTER_URL = `${API_BASE_URL}/LoadstoneVerification/VerifyCharacter`
export const GET_CHARACTERS_URL = `${API_BASE_URL}/Character/Characters`
export const SET_DEFAULT_CHARACTER_URL = `${API_BASE_URL}/Character/SetDefault`
export const REMOVE_CHARACTER_URL = `${API_BASE_URL}/Character/Remove`
export const GET_CHARACTER_BY_LOADSTONE_ID_URL = `${API_BASE_URL}/Character/CharacterByLoadstoneId`
export const REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL = `${API_BASE_URL}/Character/RefreshCharacterData`
export const GET_PARTIES_BY_USER_ID_URL = `${API_BASE_URL}/Party/GetPartiesByUserId`
export const CREATE_PARTY_URL = `${API_BASE_URL}/Party/Create` 
export const DELETE_PARTY_URL = `${API_BASE_URL}/Party/Delete`
export const GET_PARTY_URL = `${API_BASE_URL}/Party/GetParty`
export const GET_PARTY_DETAILS_URL = `${API_BASE_URL}/Party/GetPartyDetails`
export const SEARCH_DATABASE_CHARACTERS_URL = `${API_BASE_URL}/Character/SearchDatabaseCharacters`
export const GET_MISSING_SPELLS_URL = `${API_BASE_URL}/Character/GetMissingSpells`
export const ADD_PARTY_MEMBER_URL = `${API_BASE_URL}/PartyMember/AddPartyMember` 
export const REMOVE_PARTY_MEMBER_URL = `${API_BASE_URL}/PartyMember/RemovePartyMember`
export const GET_USER_URL = `${API_BASE_URL}/Users/GetUser`
export const GET_CHARACTER_OWNER = `${API_BASE_URL}/Character/Owner`
export const GET_MOCK_PARTY_FROM_CHARACTER_IDS_URL = `${API_BASE_URL}/Party/GetMockPartyFromCharacterIds`
export const GET_LOGIN_RESPONSE = `${API_BASE_URL}/Login/GetLoginResponse`