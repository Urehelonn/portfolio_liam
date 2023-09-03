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
            className={'fixed bottom-[45px] left-1/2 border-2 border-solid border-white border-opacity-30' +
                ' rounded-md transform -translate-x-1/2 text-white'}>
            <BottomNavigation showLabels sx={{
                bgcolor: 'transparent',
            }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}
                                        sx={{
                                            color: 'white',
                                            opacity: 0.6,
                                            ':hover': {opacity: 1},
                                            transition: 'opacity 0.5s'
                                        }}
                                        onClick={() => {
                                            router.push('/').then();
                                        }}/>
                <BottomNavigationAction label="Projects" icon={<AccountTreeIcon/>}
                                        sx={{
                                            color: 'white',
                                            opacity: 0.6,
                                            ':hover': {opacity: 1},
                                            transition: 'opacity 0.5s'
                                        }}
                                        onClick={() => {
                                            router.push('/project').then();
                                        }}/>
                <BottomNavigationAction label="About" icon={<InfoIcon/>}
                                        sx={{
                                            color: 'white',
                                            opacity: 0.6,
                                            ':hover': {opacity: 1},
                                            transition: 'opacity 0.5s'
                                        }}
                                        onClick={() => {
                                            router.push('/about').then();
                                        }}/>
                <BottomNavigationAction label="Contact" icon={<ContactPageIcon/>}
                                        sx={{
                                            color: 'white',
                                            opacity: 0.6,
                                            ':hover': {opacity: 1},
                                            transition: 'opacity 0.5s'
                                        }}
                                        onClick={() => {
                                            router.push('/contact').then();
                                        }}/>
                <BottomNavigationAction label="Apps" icon={<CheckCircleIcon/>}
                                        sx={{
                                            color: 'white',
                                            opacity: 0.6,
                                            ':hover': {opacity: 1},
                                            transition: 'opacity 0.5s'
                                        }}
                                        onClick={() => {
                                            router.push('/apps').then();
                                        }}/>
            </BottomNavigation></div>
    );
}

export default NavBar;