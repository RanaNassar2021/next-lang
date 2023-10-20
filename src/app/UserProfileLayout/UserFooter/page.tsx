import React, { FC } from 'react';
import Link from 'next/link';

// Material UI
import { Box, List, ListItem } from '@mui/material';

// Style
import useStyles from './UserFooter.Styles';

const Footer: FC = () => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.footer}>
                <Box className={classes.copyRight}>
                    2022© <Link href="/">Taghyer</Link>
                </Box>
                <List className={classes.footerMenuList} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <ListItem><Link  href="/">Home</Link></ListItem>
                    <ListItem><Link href="/">About</Link></ListItem>
                    <ListItem><Link  href="/">Contact</Link></ListItem>
                </List>
            </Box>
        </React.Fragment>
    );
};

export default Footer;