import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service'; // Update the path as necessary
import { RoleService } from '@core/services/role.service'; // Update the path as necessary
import { ROLE } from '@core/constants/role.constant'; // Update the path as necessary

export function roleGuard(allowedRoles: ROLE[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService, { optional: false });
    const roleService = inject(RoleService, { optional: false });
    const router = inject(Router, { optional: false });

    const currentRoles = authService.getCurrentRoles();
    const isAuthorized = allowedRoles.some(role => roleService.isAuthorized({ currentRoles, requiredRole: role }));

    if (isAuthorized) {
      return true;
    } else {
      router.navigate(['/403']);
      return false;
    }
  };
}
