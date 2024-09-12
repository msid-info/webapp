"use client"
import { useRef, useState } from "react"
import { appmedatadata } from "../data"
import { useRouter } from "next/navigation"

const SearchDomain = () => {
	const searchInput = useRef<HTMLInputElement>(null)
	const [error, setError] = useState<boolean>(false)
	const router = useRouter()

	const search = async () => {
		setError(false)
		const query: string = searchInput.current!.value

		// Check if domain is valid
		if (/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/.test(query) === false) {
			setError(true)
			return
		}

		router.push(`/result/${query}`)
	}


	// handle pressing enter
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			search()
		}
	}

	return (
		<>
			<label className={'input input-bordered flex items-center gap-2' + (!error ? ' ' : ' input-error')}>
				<input type="text" className="grow" placeholder={appmedatadata.searchdescription} ref={searchInput} onKeyDown={handleKeyDown}/>
					<button className="btn btn-ghost" onClick={() => {search()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
					</button>
				</label>
				{error ? <p className="text-sm text-red-500 dark:text-error-300 mt-1">Error: not a valid domain</p> : <></>}
		</>
	)
}

export default SearchDomain