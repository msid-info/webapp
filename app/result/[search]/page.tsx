import TenantInfoComponent from '@/src/components/Tenant';
import { TenantInfo, TenantInfoError } from '../../../src/types'

const getData = async (search: string) => {
	try {
		const res = await fetch(process.env.MSIDINFO_API_URL + "osint/" + search)
		const data: TenantInfo = await res.json()
		return data
	} catch (error) {
		return null
	}
}


const ResultPage = async ({params}: { params: {search: string}}) => {
	const data: TenantInfo | null | TenantInfoError = await getData(params.search)

  if (data && 'error' in data && data.error === "Tenant not found") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-500">Not Found</h1>
          <p className="mt-4 text-gray-700">We couldn&apos;t find the tenant information you&apos;re looking for.</p>
        </div>
      </div>
    )
  }
	return (
    <div className="min-h-screen">
      <div className="p-4">
        <TenantInfoComponent data={data} />
      </div>
    </div>
	)
}

export default ResultPage