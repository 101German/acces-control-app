import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "https://localhost:7039",
  redirectUri: window.location.origin,
  clientId: "access-control-app",
  scope: 'access-control-api openid profile email roles',
  postLogoutRedirectUri: window.location.origin,
  requireHttps: false,
  loginUrl: "https://localhost:7039/Auth/Login"
}

export const environment = {
  production:false,
  urlApi: "https://localhost:7039",
  authentication: authConfig,
  name: "LOCAL",
  issuer: "https://localhost:7039",
  clientPortalApiConfig: {
    host: "https://localhost:7039",
    baseUrl: "api"
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
