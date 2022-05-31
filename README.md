# AWS AppSync Identity Typescript Guard

[![Test](https://github.com/mainawycliffe/aws-appsync-identity-typescript-guard/actions/workflows/test.yml/badge.svg)](https://github.com/mainawycliffe/aws-appsync-identity-typescript-guard/actions/workflows/test.yml)
[![Release &
Publish](https://github.com/mainawycliffe/aws-appsync-identity-typescript-guard/actions/workflows/publish.yml/badge.svg)](https://github.com/mainawycliffe/aws-appsync-identity-typescript-guard/actions/workflows/publish.yml)

This is a Typescript Library to check the type AppsyncIdentity before use. It
checks whether an `AppsyncIdentity` from
[aws-lambda](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/aws-lambda)
types defined at
[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

It uses [custom type
guards](https://mainawycliffe.dev/blog/custom-type-guards-in-typescript/), so
that Typescript is able to do type narrowing within the control flow. This
custom guards are also available in production, as Javascript projects, meaning
the checks work at both development and runtime.

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
