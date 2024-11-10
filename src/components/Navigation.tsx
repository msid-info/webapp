import Link from "next/link"
import { appmedatadata } from "../data"
import Image from "next/image"
// import logo from '@/public/logo.png'

const Navigation = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<Link href={"/"}>

						<div className="btn btn-ghost text-xl">
							<Image src={appmedatadata.logolink} height={35} width={35} quality={50} alt={appmedatadata.name} />
							{appmedatadata.name}
						</div>
					</Link>
				</div>
				<div className="flex-none">
					{/* <button className="btn btn-square btn-ghost">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
					
					</button> */}
				</div>
			</div>
		</div>
	)
}

export default Navigation