import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'reduxFeatures/hooks';

type PageProps = { pageTitle: string; children?: ReactNode };

type Props = PageProps;

const AuthRoute: React.FC<Props> = ({ pageTitle, children }: Props): React.ReactElement => {
  const userIsSignIn = useAppSelector(state => state.auth.isUserSignedIn);
  document.title = pageTitle;

  return userIsSignIn ? <>{children}</> : <Navigate to='/login' />;
};

export default AuthRoute;
