import { CloudIcon, ShieldCheckIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Tenant Environment Analysis',
    description:
      'Gain insights into your tenant environment, including region scope, cloud instance, and audience URN. Understand your Azure AD setup at a glance.',
    icon: CloudIcon,
  },
  {
    name: 'Comprehensive Security Overview',
    description:
      'Access detailed information about your tenant\'s security settings, including federation protocols, authentication endpoints, and credential types.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'User Management Insights',
    description:
      'Get a clear view of user states, managed status, and available credential options. Streamline your user management processes with ease.',
    icon: UserGroupIcon,
  },
  {
    name: 'Domain and Federation Details',
    description:
      'Explore all associated domains and federation information. Understand your organization\'s identity infrastructure across different services.',
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-base-content">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-content" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-base-content/70">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
