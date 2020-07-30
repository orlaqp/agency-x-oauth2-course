import { OidcUser } from '@agency-x/auth/data-access';

export class UpdateUserAction {
  public static readonly type = '[Auth] Change Auth User';
  constructor(public payload: OidcUser) { }
}

