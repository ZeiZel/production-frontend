import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRole, EUserRole } from '@/entities/User';
import { getRouteForbidden, getRouteLogin } from '@/shared/const';

interface RequireAuthProps {
	children: ReactNode;
	roles?: EUserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();
	const userRoles = useSelector(getUserRole);

	const hasRequiredRoles = useMemo(
		() => (!roles ? true : roles.some((requiredRole) => userRoles?.includes(requiredRole))),
		[roles, userRoles],
	);

	if (!auth) {
		return <Navigate to={getRouteLogin()} state={{ from: location }} replace />;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
	}

	return children;
};
