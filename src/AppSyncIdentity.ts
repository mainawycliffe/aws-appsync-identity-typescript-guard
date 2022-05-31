import {
  AppSyncIdentity,
  AppSyncIdentityCognito,
  AppSyncIdentityIAM,
  AppSyncIdentityLambda,
  AppSyncIdentityOIDC,
} from 'aws-lambda';

/**
 *
 * isIAMAppsyncIdentity
 *
 * A custom typescript guard to check if the AppSyncIdentity is an IAM identity
 *
 */
export function isIAMAppsyncIdentity(
  identity: AppSyncIdentity,
): identity is AppSyncIdentityIAM {
  // if null, or undefined, not an IAM identity
  if (!identity) {
    return false;
  }
  // check for the existence of the keys in the IAM identity
  if (
    'accountId' in identity
    && 'cognitoIdentityPoolId' in identity
    && 'cognitoIdentityId' in identity
    && 'sourceIp' in identity
    && 'username' in identity
    && 'userArn' in identity
    && 'cognitoIdentityAuthType' in identity
    && 'cognitoIdentityAuthProvider' in identity
  ) {
    return true;
  }
  return false;
}

/**
 *
 * isCognitoAppsyncIdentity
 *
 * A custom typescript guard to check if the AppSyncIdentity is a Cognito identity
 *
 */
export function isCognitoAppsyncIdentity(
  identity: AppSyncIdentity,
): identity is AppSyncIdentityCognito {
  // if null, or undefined, not an IAM identity
  if (!identity) {
    return false;
  }
  // check for the existence of the keys in the Cognito identity
  if (
    'sub' in identity
    && 'issuer' in identity
    && 'username' in identity
    && 'claims' in identity
    && 'sourceIp' in identity
    && 'defaultAuthStrategy' in identity
    // 'groups' in identity
  ) {
    return true;
  }
  return false;
}

/**
 *
 * isOIDCAppsyncIdentity
 *
 * A custom typescript guard to check if the AppSyncIdentity is an OIDC identity
 *
 */
export function isAppSyncIdentityOIDC(
  identity: AppSyncIdentity,
): identity is AppSyncIdentityOIDC {
  // if null, or undefined, not an IAM identity
  if (!identity) {
    return false;
  }
  // check for the existence of the keys in the OIDC identity
  if ('claims' in identity && 'issuer' in identity && 'sub' in identity) {
    return true;
  }
  return false;
}

/**
 *
 * isLambdaAppsyncIdentity
 *
 * A custom typescript guard to check if the AppSyncIdentity is a Lambda identity
 *
 */
export function isAppSyncIdentityLambda(
  identity: AppSyncIdentity,
): identity is AppSyncIdentityLambda {
  // if null, or undefined, not an IAM identity
  if (!identity) {
    return false;
  }
  // check for the existence of the keys in the AppSyncIdentityLambda
  if ('resolverContext' in identity) {
    return true;
  }
  return false;
}
