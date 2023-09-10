'use client';
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../Header";
import Footer from "../Footer";

// styles
import useStyles from "./FAQ.Styles";

// Static Data
import FAQS from '../Assets/StaticData/FAQ.json';

export default function FAQ() {
    const { classes } = useStyles();
    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.root}>
                <Box className={classes.container}>
                    <Typography variant="h6">frequently asked questions</Typography>
                    <Divider style={{ marginBottom: 30 }}></Divider>
                    {FAQS.map(question => {
                        return (
                            <Box className={classes.content} key={question.id}>
                                <Accordion style={{marginBottom:10}}>
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
            <Footer></Footer>
        </React.Fragment>
    )
}