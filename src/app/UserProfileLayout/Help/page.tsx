'use client';
import React, { useState } from "react";
import { Box, Typography, Checkbox, Divider } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

// styles
import useStyles from "./Help.Styles";

// Static Data
import FAQS from '../../Assets/StaticData/FAQ.json';


import SideBar from "../UserSideBar/page";
import Header from './Header/page';
import Footer from "../../Footer";

export default function Help() {
    const { classes } = useStyles();
    const [SideMenu, setSideMenu] = useState(true);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.dashboard}>
                    {/* Header */}
                    <Header SideMenu={SideMenu} setSideMenu={(setSideMenu)} />
                    {/* Side Bar */}
                    <SideBar SideMenu={SideMenu} setSideMenu={setSideMenu} />
                    {/* Content */}
                    <Box className={`${classes.container} ${!SideMenu ? classes.openContainer : ''}`}>
                        <Box className={classes.contentFAQ}>
                            <Box className={classes.rootFAQ}>
                                <Box className={classes.containerFAQ}>
                                    <Typography variant="h6">frequently asked questions</Typography>
                                    <Divider style={{ marginBottom: 30 }}></Divider>
                                    {FAQS.map(question => {
                                        return (
                                            <Box className={classes.contentFAQ} key={question.id}>
                                                <Accordion style={{ marginBottom: 10 }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography variant="h4">{question.question}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            {question.description}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Box>
                                        )
                                    })
                                    }

                                </Box>
                            </Box>
                            <Box className={classes.contactUs}>
                                <Typography variant="h5">Contact Us</Typography>
                                <Typography>For any inquiries or assistance, our dedicated customer support team is ready to help. Feel free to contact us via email or phone:
                                </Typography>
                                    <Typography>Email: <Link href='mailto: support@pictura.com'>Support@pictura.com</Link></Typography>
                                    <Typography>whatsapp: <Link href='https://wa.me/201096001563'>[+1 xxx xxx-xxxx]</Link></Typography>
                            </Box>
                        </Box>
                        {/* Footer */}
                        <Box className={classes.footer}>
                            <Footer />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
}