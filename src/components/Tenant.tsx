import React from 'react';
import { EnvironmentKey, TenantInfo, Environment } from '../types';

const environments: Record<EnvironmentKey, Environment> = {
  "Worldwide": { logo: "🌍" },
  "U.S. Government GCC High": { logo: "🇺🇸🏛️" },
  "U.S. Government DoD": { logo: "🇺🇸🛡️" },
  "Microsoft 365 operated by 21Vianet (China)": { logo: "🇨🇳" }
};

const TenantInfoCard: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
  <div className="card bg-base-100 shadow-xl mb-6">
    <div className="card-body">
      <h2 className="card-title text-lg sm:text-xl">{title}</h2>
      {children}
    </div>
  </div>
);

const TenantInfoItem: React.FC<{label: string, value: string | number | null | undefined }> = ({ label, value }) => (
  <div className="mb-2">
    <span className="font-medium">{label}: </span>
    <span className="break-words">{value !== null && value !== undefined ? value.toString() : 'N/A'}</span>
  </div>
);

const TenantInfoComponent = ({ data }: { data: TenantInfo | null }) => {
  if (!data) return <div className="text-center">No data available</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="avatar">
          <div className="w-24 sm:w-32 rounded-full ring ring-offset-base-100 ring-offset-2">
            <img src={data.loginExperiences.tileLogo || '/placeholder-logo.png'} alt={data.tenantName || 'Tenant Logo'} />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center mt-4">{data.tenantName}</h1>
        <div className="badge mt-2 text-xs sm:text-sm">{data.tenantId}</div>
      </div>

      <TenantInfoCard title="Tenant Information">
        <TenantInfoItem label="Tenant ID" value={data.tenantId} />
        <TenantInfoItem label="Tenant Name" value={data.tenantName} />
        <TenantInfoItem label="Default Domain" value={data.defaultDomain} />
        <TenantInfoItem label="Namespace Type" value={data.nameSpaceType} />
      </TenantInfoCard>

      <TenantInfoCard title="Tenant Environment">
        <div className="flex items-center mb-2">
          <span className="text-xl sm:text-2xl mr-2">
					{(environments[data.tenantEnvironment.cloudInstanceDisplayName as EnvironmentKey]?.logo || '🌐')}
          </span>
          <span className="break-words">{data.tenantEnvironment.cloudInstanceDisplayName}</span>
        </div>
        <TenantInfoItem label="Region Scope" value={data.tenantEnvironment.tenantRegionScope} />
        <TenantInfoItem label="Region Sub-Scope" value={data.tenantEnvironment.tenantRegionSubScope} />
        <TenantInfoItem label="Cloud Instance" value={data.tenantEnvironment.cloudInstance} />
        <TenantInfoItem label="Audience URN" value={data.tenantEnvironment.audienceUrn} />
      </TenantInfoCard>

      <TenantInfoCard title="Federation Info">
        <TenantInfoItem label="Brand Name" value={data.federationInfo.brandName} />
        <TenantInfoItem label="Protocol" value={data.federationInfo.protocol} />
        <TenantInfoItem label="Global Version" value={data.federationInfo.globalVersion} />
        <TenantInfoItem label="Metadata URL" value={data.federationInfo.metadataUrl} />
        <TenantInfoItem label="Active Authentication URL" value={data.federationInfo.activeAuthenticationUrl} />
      </TenantInfoCard>

      <TenantInfoCard title="Login Experience">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div 
            className="h-24 rounded-box flex items-center justify-center text-white text-sm sm:text-base" 
            style={{ backgroundColor: data.loginExperiences.backgroundColor || '#1d89d2' }}
          >
            Background Color: {data.loginExperiences.backgroundColor || '#1d89d2'}
          </div>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-sm sm:text-base">Signup Allowed</span> 
                <input type="checkbox" checked={data.loginExperiences.isSignupAllowed} className="checkbox" disabled />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-sm sm:text-base">Keep Me Signed In Disabled</span> 
                <input type="checkbox" checked={data.loginExperiences.keepMeSignedInDisabled} className="checkbox" disabled />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-sm sm:text-base">Use Transparent Light Box</span> 
                <input type="checkbox" checked={data.loginExperiences.useTransparentLightBox} className="checkbox" disabled />
              </label>
            </div>
          </div>
        </div>
        <TenantInfoItem label="Local" value={data.loginExperiences.local} />
        <div className="mb-4">
          <p className="font-medium mb-2">Banner Logo:</p>
          {data.loginExperiences.bannerLogo && (
            <img src={data.loginExperiences.bannerLogo} alt="Banner Logo" className="max-w-full h-auto" />
          )}
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Tile Logo:</p>
          {data.loginExperiences.tileLogo && (
            <img src={data.loginExperiences.tileLogo} alt="Tile Logo" className="max-w-full h-auto" />
          )}
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Tile Dark Logo:</p>
          {data.loginExperiences.tileDarkLogo && (
            <img src={data.loginExperiences.tileDarkLogo} alt="Tile Dark Logo" className="max-w-full h-auto" />
          )}
        </div>
        <TenantInfoItem label="Illustration" value={data.loginExperiences.illustration} />
        <TenantInfoItem label="Boiler Plate Text" value={data.loginExperiences.boilerPlateText} />
        <TenantInfoItem label="User ID Label" value={data.loginExperiences.userIdLabel} />
      </TenantInfoCard>

      <TenantInfoCard title="User Info">
        <TenantInfoItem label="Username" value={data.userInfo.username} />
        <TenantInfoItem label="Display Name" value={data.userInfo.displayName} />
        <TenantInfoItem label="State" value={data.userInfo.state} />
        <TenantInfoItem label="Throttle Status" value={data.userInfo.throttleStatus} />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">Is Managed</span> 
            <input type="checkbox" checked={data.userInfo.isManaged} className="checkbox" disabled />
          </label>
        </div>
      </TenantInfoCard>

      <TenantInfoCard title="User Credentials">
        <TenantInfoItem label="Preferred Credential" value={data.userInfo.credentials.preferedCredential} />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">Has Password</span> 
            <input type="checkbox" checked={data.userInfo.credentials.hasPassword} className="checkbox" disabled />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">Has Access Pass</span> 
            <input type="checkbox" checked={data.userInfo.credentials.HasAccessPass} className="checkbox" disabled />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">Has Desktop SSO</span> 
            <input type="checkbox" checked={data.userInfo.credentials.hasDesktopSso} className="checkbox" disabled />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">Has Remote NGC</span> 
            <input type="checkbox" checked={data.userInfo.credentials.hasRemoteNGC} className="checkbox" disabled />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">Has FIDO</span> 
            <input type="checkbox" checked={data.userInfo.credentials.hasFido} className="checkbox" disabled />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-sm sm:text-base">OTC Not Auto Sent</span> 
            <input type="checkbox" checked={data.userInfo.credentials.otcNotAutoSent} className="checkbox" disabled />
          </label>
        </div>
      </TenantInfoCard>

      <TenantInfoCard title="Call Metadata">
        <TenantInfoItem label="Long Running Transaction Partition" value={data.userInfo.callMetadata.longRunningTransactionPartition} />
        <TenantInfoItem label="Region" value={data.userInfo.callMetadata.region} />
        <TenantInfoItem label="Scale Unit" value={data.userInfo.callMetadata.scaleUnit} />
        {/* <TenantInfoItem label="Is Long Running Transaction" value={data.userInfo.callMetadata.isLongRunningTransaction} /> */}
      </TenantInfoCard>

      <TenantInfoCard title="Domains">
        <ul className="menu bg-base-200 w-full rounded-box">
          {data.domains.map((domain, index) => (
            <li key={index}><a className="text-sm sm:text-base break-all">{domain}</a></li>
          ))}
        </ul>
      </TenantInfoCard>

      <div className="collapse bg-base-200">
        <input type="checkbox" /> 
        <div className="collapse-title text-lg sm:text-xl font-medium">
          View Raw Data
        </div>
        <div className="collapse-content"> 
          <pre className="mockup-code text-xs sm:text-sm overflow-x-auto">
            <code>{JSON.stringify(data.raw, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TenantInfoComponent;