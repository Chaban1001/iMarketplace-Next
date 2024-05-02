import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProvider {
  children: ReactNode;
}

export interface User {
  email: string;
  password: string;
}

 const AuthProvider = ({ children }: AuthProvider) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (newUser: User, callback: () => void) => {
    setUser(newUser);
    callback();
  };
  const signOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;