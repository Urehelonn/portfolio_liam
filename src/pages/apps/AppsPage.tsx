import NavBar from "@/components/common/navbar";
import {useEffect} from "react";
import {useRouter} from "next/router";

const AppsPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/underConstruction').then();
    }, [router])
    return (<div><h2>Apps</h2>
        <hr/>
        <NavBar/>
    </div>);
}

export default AppsPage;