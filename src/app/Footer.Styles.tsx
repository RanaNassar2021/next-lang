import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => {
    return {
        container: {
            margin: 0,
            backgroundColor: '#0A183D',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                flexDirection: 'column'
            },

        },
        footerSection: {
            width: '30%',
            margin: '2ch',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: 0,
            marginTop: 0,
            [theme.breakpoints.down('sm')]: {
                margin: '1ch',
            },

        },
        footerLogo: {
            height:'130px',
        },
        socialMedia: {
            marginTop: 5,
            display:'flex',
            justifyContent:'space-evenly',
            gap:'30px'
        },
        footerContent: {
            color: 'white',
            width: '20%',
            margin: '2ch',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '10px',
            '& h6': {
                fontSize: '14px',
                textTransform: 'uppercase',
                marginBottom: '5px',
                [theme.breakpoints.down('sm')]: {
                    fontSize:'12px'
                },
            },
            '& p': {
                fontSize: '11px',
                fontWeight: 'lighter',
                lineHeight: '25px',
                [theme.breakpoints.down('sm')]: {
                   fontSize:'10px',
                },
            },
            [theme.breakpoints.down('sm')]: {
                width:'100%',
                margin: '1ch',
                paddingTop:'5px'
            },
        }
    }
})

export default useStyles;
