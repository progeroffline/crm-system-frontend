import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { browserLocalStorage } from '@/common/browser.local.storage';
import { backednApiInterface } from '@/api';
import { User } from '@/api/auth/interfaces';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!browserLocalStorage.getCrmSystemAccessToken()
  );
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const { data } = await backednApiInterface.auth.user();
      setUser(data);
    } catch (error) {
      console.error('Failed to fetch user', error);
      logout();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUser();
    }
  }, [isAuthenticated]);

  const login = async (accessToken: string, refreshToken: string) => {
    browserLocalStorage.setCrmSystemAccessToken(accessToken);
    browserLocalStorage.setCrmSystemRefreshToken(refreshToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    browserLocalStorage.setCrmSystemAccessToken('');
    browserLocalStorage.setCrmSystemRefreshToken('');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
