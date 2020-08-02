import { OidcUser } from '../models/oidc-user.model';


export class UpdateUserAction {
  public static readonly type = '[Auth] Change Auth User';
  constructor(public payload: OidcUser) { }
}

