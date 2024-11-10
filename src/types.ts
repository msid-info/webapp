export interface TenantInfo {
  tenantId: string;
  tenantName: string | null;
  defaultDomain: string | null;
  tenantEnvironment: {
    tenantRegionScope: string | null;
    tenantRegionSubScope: string | null;
    cloudInstanceDisplayName: string;
    cloudInstance: string | null;
    audienceUrn: string | null;
  };
  nameSpaceType: string | null;
  federationInfo: {
    brandName: string | null;
    protocol: string | null;
    globalVersion: string | null;
    metadataUrl: string | null;
    activeAuthenticationUrl: string | null;
  };
  loginExperiences: {
    isSignupAllowed: boolean;
    local: number | null;
    bannerLogo: string | null;
    tileLogo: string | null;
    tileDarkLogo: string | null;
    illustration: string | null;
    backgroundColor: string | null;
    boilerPlateText: string | null;
    userIdLabel: string | null;
    keepMeSignedInDisabled: boolean | null;
    useTransparentLightBox: boolean | null;
  };
  userInfo: {
    username: string | null;
    displayName: string | null;
    state: string;
    isManaged: boolean;
    throttleStatus: string;
    credentials: {
      preferedCredential: string;
      hasPassword: boolean;
      HasAccessPass: boolean;
      hasDesktopSso: boolean;
      hasRemoteNGC: boolean;
      hasFido: boolean;
      otcNotAutoSent: boolean | null;
      parameters: {
        remoteNgc: Record<string, any> | null;
        fido: Record<string, any> | null;
        qrCodePin: Record<string, any> | null;
        sas: Record<string, any> | null;
        certAuth: Record<string, any> | null;
        google: Record<string, any> | null;
        facebook: Record<string, any> | null;
      };
    };
    callMetadata: {
      longRunningTransactionPartition: string | null;
      region: string | null;
      scaleUnit: string | null;
      isLongRunningTransaction: boolean | null;
    };
  };
  domains: string[];
  raw: {
    odc_federationprovider: Record<string, any>;
    userrealm_v1: Record<string, any>;
    userrealm_v2: Record<string, any>;
    userrealm_old: Record<string, any>;
    credential_type: Record<string, any>;
    autodiscover_federationInformation: string;
    openid_configuration: Record<string, any>;
    tenant_information: Record<string, any>;
  };
}

// Error response interface
export interface TenantInfoError {
  detail: string;
}

// Union type for the API response
export type TenantInfoResponse = TenantInfo | TenantInfoError;