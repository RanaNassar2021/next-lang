import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { Button, Box } from '@mui/material';



const useStyles = makeStyles()((theme: any) => {
    return {
        container: {
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                ...(theme.direction === 'rtl' ? { borderRight: '2px solid red', backgroundColor: 'orange' } : { borderLeft: '2px solid blue', backgroundColor: 'blue' }),
            },
        },
    }
})


interface YourComponentProps { }

const Polygon: React.FC<YourComponentProps> = (props: any) => {
    const [textDirection, setTextDirection] = useState<'ltr' | 'rtl'>('ltr');
    const { classes } = useStyles();


    const toggleTextDirection = () => {
        setTextDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'));
    };

    // Dynamically create a theme with the updated text direction
    const theme = createTheme({
        direction: textDirection,
    });

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Box className={classes.container}>
                    {/* Your component content goes here */}
                    <Button variant="contained" color="primary" onClick={toggleTextDirection}>
                        Toggle Text Direction
                    </Button>
                </Box>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default Polygon;
