import {BottomNavigation, BottomNavigationAction} from "@mui/material";

import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useRouter} from "next/router";

const NavBar = () => {
    const router = useRouter();

    return (
        <div
            className={'fixed bottom-20 left-1/2 border-2 border-solid border-green-500 border-opacity-30' +
                ' rounded-md transform -translate-x-1/2'}>
            <BottomNavigation showLabels sx={{
                bgcolor: 'transparent',
            }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}
                                        onClick={() => {
                                            router.push('/').then();
                                        }}/>
                <BottomNavigationAction label="Projects" icon={<AccountTreeIcon/>}
                                        onClick={() => {
                                            router.push('/project').then();
                                        }}/>
                <BottomNavigationAction label="About" icon={<InfoIcon/>}
                                        onClick={() => {
                                            router.push('/about').then(() => {
                                                console.log('aefasdf')
                                            });
                                        }}/>
                <BottomNavigationAction label="Contact" icon={<ContactPageIcon/>}
                                        onClick={() => {
                                            router.push('/contact').then();
                                        }}/>
                <BottomNavigationAction label="Apps" icon={<CheckCircleIcon/>}
                                        onClick={() => {
                                            router.push('/apps').then();
                                        }}/>
            </BottomNavigation></div>
    );
}

export default NavBar;