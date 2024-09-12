import Features from "@/src/components/Features";
import SearchDomain from "@/src/components/Search";
import { appmedatadata } from "@/src/data";

export default function Home() {

  return (
    <>
      <div className="mx-auto max-w-2xl pt-32 pb-8 px-2">
				<h1 className="text-6xl text-center dark:text-white my-8 font-bold">{appmedatadata.header}</h1>
				<SearchDomain />
      </div>
			<Features />
    </>
  );
}
