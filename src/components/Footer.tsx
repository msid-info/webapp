import { appmedatadata } from "@/src/data"
import Image from "next/image"
import logo from '@/public/logo.png'
import Link from "next/link"

const Footer = () => {
	return (
		<>
			<footer className="footer footer-center p-10 bg-gray-100 dark:bg-gray-800  dark:text-white mt-5">
				<aside>
						<Image src={logo} height={50} width={50} quality={50} alt={appmedatadata.name} />
						<a href={appmedatadata.githublink} target="_blank" rel="noopener noreferrer">
							<p className="btn btn-sm btn-ghost font-bold">
								{appmedatadata.name} <br/>
							</p> 
						</a>
						<p>{appmedatadata.copyright}</p>
				</aside> 
				<div>
					<div className="grid grid-flow-col gap-4">
						<a href={appmedatadata.issuelink} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-ghost">report bug</a>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer