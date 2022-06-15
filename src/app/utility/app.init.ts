import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://172.17.98.65:8080/auth',
        realm: 'bms',
        clientId: 'Bms-angular-app',
      },
      initOptions: {
        checkLoginIframe: false,
        checkLoginIframeInterval: 25,
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
    });
}
