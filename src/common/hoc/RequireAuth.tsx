import { FC, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { NavigationPaths } from '@/constants/navigation-paths';

interface RequireAuth {
  children: ReactNode;
}

export const RequireAuth: FC<RequireAuth> = ({ children }: RequireAuth) => {
  const location = useLocation();
  const { user } = useAuth();

  if (user) {
    return (
      <Navigate to={NavigationPaths.HOME} state={{ from: location.pathname }} />
    );
  }

  return <>{children}</>;
};
