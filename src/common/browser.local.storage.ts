const localStorageItemNames = {
  CRM_SYSTEM_ACCESS_TOKEN: 'crmSystemAuthToken',
  CRM_SYSTEM_REFRESH_TOKEN: 'crmSystemRefreshToken',
};

class BrowserLocalStorage {
  /**
   * Getters sections
   * **/
  getCrmSystemAccessToken() {
    return localStorage.getItem(localStorageItemNames.CRM_SYSTEM_ACCESS_TOKEN) ?? '';
  }

  getCrmSystemRefreshToken() {
    return localStorage.getItem(localStorageItemNames.CRM_SYSTEM_REFRESH_TOKEN) ?? '';
  }

  /**
   * Setters sections
   * **/
  setCrmSystemAccessToken(accessToken: string) {
    return localStorage.setItem(localStorageItemNames.CRM_SYSTEM_ACCESS_TOKEN, accessToken) ?? '';
  }

  setCrmSystemRefreshToken(accessToken: string) {
    return localStorage.setItem(localStorageItemNames.CRM_SYSTEM_REFRESH_TOKEN, accessToken) ?? '';
  }
}

export const browserLocalStorage = new BrowserLocalStorage();
