import { User } from "netlify-identity-widget";

export interface IGlobalState {
  authenticated: boolean;
  user?: User;
}
