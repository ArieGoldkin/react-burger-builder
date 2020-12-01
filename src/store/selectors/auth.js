export const getToken = (state) => state.auth.token;

export const getUserId = (state) => state.auth.userId;

export const getAuthError = (state) => state.auth.error;

export const getAuthLoading = (state) => state.auth.loading;

export const getRedirectPath = (state) => state.auth.authRedirectPath;
