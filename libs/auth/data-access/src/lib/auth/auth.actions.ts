import { OidcUser } from '@agency-x/activities';

export class UpdateUserAction {
  public static readonly type = '[Auth] Change Auth User';
  constructor(public payload: OidcUser) { }
}

