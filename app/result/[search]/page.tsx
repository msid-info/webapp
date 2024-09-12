import TenantInfoComponent from '@/src/components/Tenant';
import { TenantInfo } from '../../../src/types'

const getData = async (search: string) => {
	try {
		const res = await fetch(process.env.MSIDINFO_API_URL + "/search/" + search)
		const data: TenantInfo = await res.json()
		return data
	} catch (error) {
		console.error(error)
		return null
	}
}

const ResultPage = async ({params}: { params: {search: string}}) => {
	const data: TenantInfo | null = await getData(params.search)
	return (
    <div className="min-h-screen">
      <div className="p-4">
        <TenantInfoComponent data={data} />
      </div>
    </div>
	)
}

export default ResultPage