# aws-appsync-identity-typescript-guard

Simple Typescript Library to check the type AppsyncIdentity before use.

## Examples

### IAM

```ts
if (isIAMAppsyncIdentity(identity)) {
  // do something with IAM Identity
}
```

### Cognito

```ts
if (isCognitoAppsyncIdentity(identity)) {
  // do something with Cognito Identity
}
```

### OIDC

```ts
if (isAppSyncIdentityOIDC(identity)) {
  // do something with OIDC Identity
}
```

### Lambda Authorization

```ts
if (isAppSyncIdentityLambda(identity)) {
  // do something with Lambda Authorization
}
```
