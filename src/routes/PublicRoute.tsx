import React, { ReactElement, ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';

type PageProps = { pageTitle: string; children: ReactNode };

type Props = PageProps & RouteProps;

const PublicRoute: React.FC<Props> = ({ pageTitle, children }: Props): ReactElement => {
  document.title = pageTitle;
  return <>{children}</>;
};

export default PublicRoute;
