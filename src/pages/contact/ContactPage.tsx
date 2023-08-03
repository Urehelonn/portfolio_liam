// next.js && React
import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";

// local components
import colours from '@/styles/colours'
import JumpButton from "@/components/jumpButton";
import NavBar from "@/components/navbar";
import CopyRightFooter from "@/components/copyRightFooter";
import MountainAnimationDiv from "@/components/mountainAnimationDiv";
import deadComputer from "@/assets/images/icon/deadComputer.png";

// mui
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {TextField, Button, Typography, Box} from "@mui/material";
import HoverColourChangeCharacter from "@/components/hoverColourChangeCharacter";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [height, setHeight] = useState(400);
    const objSection = useRef(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('This function is under construction for now, please email me directly!')
    };
    useEffect(() => {
        const handleResize = () => {
            setHeight(
                window.innerHeight / 2);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {/*header section*/}
            <div className={'bg-sky h-5/6 z-10'}>
                <div className={'w-full'}>
                    <MountainAnimationDiv height={height}/>
                </div>
                <div className={'z-20'} style={{marginTop: -height / 5}}>
                    <div className={'flex justify-center'}>
                        <h3 className={'text-[45px] underline'}>Get In Touch</h3>
                    </div>
                </div>

                <div className="relative z-5 mt-[10px]">
                    <div className={'relative z-5 bg-gradient-to-b from-green-500 ' +
                        'to-dark h-[120px]'}>
                    </div>
                </div>
            </div>

            {/* contact info section*/}
            <div className={'relative z-4 w-[60%] flex  mt-[-70px] m-auto justify-between pt-[50px]'}>
                {/*left part of the contact*/}
                <div className={'mt-[-85px]'}>
                    <Image src={deadComputer}
                           className={'ml-[20px] mb-[-50px] mb-[-15px]'}
                           alt="404"
                           quality={30}
                           width="200"
                           height="205"
                           priority={true}/>
                    <div className={'m-[10px]'}>
                        <GitHubIcon/> <span className={'text-[10px] ml-[5px]'}>https://github.com/urehelonn</span>
                    </div>
                </div>


                {/*right section*/}
                <div className='mt-[-50px]'>
                    <h5 className={'m-[10px]'}>
                        <SentimentSatisfiedIcon/>
                        <span className={'ml-[5px]'}>Lin Xu or Liam</span>
                    </h5>
                    <h5 className={'m-[10px]'}>
                        <EmailIcon/> <span className={'ml-[5px]'}>urehelonn@gmail.com</span>
                    </h5>
                    <h5 className={'m-[10px]'}>
                        <LocationOnIcon/> <span className={'ml-[5px]'}>Ottawa</span>
                    </h5>
                    <h5 className={'m-[10px] text-[8px]'}>
                        <span className={'ml-[5px]'}>*Actively looking for serious relationship!</span>
                    </h5>
                </div>
            </div>

            {/*jump button*/}
            <div className={'flex justify-center mb-[50px]'}><JumpButton jumpToPos={objSection}/>
            </div>

            {/*contact form section*/}
            <div className={'mt-[30px] mb-[80px]'}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        maxWidth: 600, mx: "auto", p: 2,
                    }}>
                        <Typography variant="h5" align="center" mb={2}>
                            <HoverColourChangeCharacter fontSize={30} content={'C'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'o'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'n'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'t'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'a'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'c'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'t'}/>
                            <HoverColourChangeCharacter fontSize={30} content={' '}/>
                            <HoverColourChangeCharacter fontSize={30} content={'M'}/>
                            <HoverColourChangeCharacter fontSize={30} content={'e'}/>
                        </Typography>
                        <form onSubmit={handleSubmit} ref={objSection}>
                            <TextField
                                InputLabelProps={{
                                    style: {color: colours.white}, // Adjust the label color here
                                }}
                                fullWidth
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                InputLabelProps={{
                                    style: {color: colours.white}, // Adjust the label color here
                                }}
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                type="email"
                            />
                            <TextField
                                InputLabelProps={{
                                    style: {color: colours.white}, // Adjust the label color here
                                }}
                                fullWidth
                                sx={{
                                    color: colours.white, borderColor: colours.green[100],
                                    '& .MuiOutlinedInput-root': {
                                        borderColor: 'red', // Set your desired border color here
                                    }
                                }}
                                label="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <Button fullWidth variant="contained" type="submit"
                                    color="primary"
                                    sx={{
                                        mt: 2,
                                        color: colours.white,
                                        bgcolor: colours.sky,
                                        ":hover": {
                                            bgcolor: colours.green[300],
                                            color: colours.dark
                                        }
                                    }}>
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Box>
            </div>

            <NavBar/>
            <CopyRightFooter/>
        </>
    );
};

export default Contact
