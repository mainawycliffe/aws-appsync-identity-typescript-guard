import { AppSyncIdentityCognito, AppSyncIdentityIAM, AppSyncIdentityLambda, AppSyncIdentityOIDC } from 'aws-lambda'
import { isAppSyncIdentityLambda, isAppSyncIdentityOIDC, isCognitoAppsyncIdentity, isIAMAppsyncIdentity } from '../AppSyncIdentity'

describe('isIAMAppsyncIdentity', () => {
  it('should return true if the identity is an IAM identity', () => {
    const identity: AppSyncIdentityIAM = {
      accountId: '123456789012',
      cognitoIdentityPoolId: 'us-east-1:123456789012',
      cognitoIdentityId: '123456789012',
      sourceIp: [''],
      username: 'testuser',
      userArn: 'arn:aws:iam::123456789012:user/testuser',
      cognitoIdentityAuthType: 'authenticated',
      cognitoIdentityAuthProvider: 'cognito-identity.amazonaws.com',
    }

    expect(isIAMAppsyncIdentity(identity)).toBe(true)
  })

  it('should return false if the identity is not null', () => {
    const identity = null

    expect(isIAMAppsyncIdentity(identity)).toBe(false)
  })

  it('should return false if the identity is not an IAM identity', () => {
    const identity: AppSyncIdentityLambda = {
      resolverContext: ""
    }

    expect(isIAMAppsyncIdentity(identity)).toBe(false)
  })
})

describe('isCognitoAppsyncIdentity', () => {
  it('should return true if the identity is an Cognito Identity', () => {
    const identity: AppSyncIdentityCognito = {
      sub: '123456789012',
      claims: [],
      defaultAuthStrategy: "",
      groups: [],
      issuer: "",
      sourceIp: [''],
      username: 'testuser',
    }

    expect(isCognitoAppsyncIdentity(identity)).toBe(true)
  })

  it('should return false if the identity is not null', () => {
    const identity = null

    expect(isCognitoAppsyncIdentity(identity)).toBe(false)
  })

  it('should return false if the identity is not an IAM identity', () => {
    const identity: AppSyncIdentityLambda = {
      resolverContext: ""
    }

    expect(isCognitoAppsyncIdentity(identity)).toBe(false)
  })
})

describe('isAppSyncIdentityOIDC', () => {
  it('should return true if the identity is an Cognito Identity', () => {
    const identity: AppSyncIdentityOIDC = {
      sub: '123456789012',
      claims: [],
      issuer: "",
    }

    expect(isAppSyncIdentityOIDC(identity)).toBe(true)
  })

  it('should return false if the identity is not null', () => {
    const identity = null

    expect(isAppSyncIdentityOIDC(identity)).toBe(false)
  })

  it('should return false if the identity is not an IAM identity', () => {
    const identity: AppSyncIdentityLambda = {
      resolverContext: ""
    }

    expect(isAppSyncIdentityOIDC(identity)).toBe(false)
  })
})

describe('isAppSyncIdentityLambda', () => {
  it('should return true if the identity is an Cognito Identity', () => {
    const identity: AppSyncIdentityLambda = {
      resolverContext: ""
    }

    expect(isAppSyncIdentityLambda(identity)).toBe(true)
  })

  it('should return false if the identity is not null', () => {
    const identity = null

    expect(isAppSyncIdentityLambda(identity)).toBe(false)
  })

  it('should return false if the identity is not an IAM identity', () => {
    const identity: AppSyncIdentityOIDC = {
      sub: '123456789012',
      claims: [],
      issuer: "",
    }

    expect(isAppSyncIdentityLambda(identity)).toBe(false)
  })
})
