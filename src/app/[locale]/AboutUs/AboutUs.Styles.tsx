
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => {
    return {
        container: {
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
        },
        content: {
            width:'60ch',
            paddingTop:30,
            paddingBottom:30,
            '& h6': {
                display:'flex',
                justifyContent:'center',
                marginBottom:10
            },
            '& p': {
                display:'flex',
                justifyContent:'center',
                textTransform:'capitalize',
                textAlign:'center',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        info: {
            marginTop:20,
            paddingBottom:20,
            display:'flex',
            flexDirection:'column',
            width:'100%',
           backgroundSize:'cover',
           backgroundPosition:'center',

        },
        infoContentLeft: {
            width:'60ch',
            paddingTop:20,
            paddingLeft:50,
            paddingRight:10,
            '& p': {
                fontSize:'16px',
                textAlign:'justify',
                marginTop:5,
            },
            [theme.breakpoints.down('sm')]: {
                width:'100%',
                paddingLeft:10,

            },
        },
        infoRight: {
            width:'100%',
            display:'flex',
            justifyContent:'end',
        },
        infoContentRight: {
            width:'60ch',
            paddingTop:20,
            paddingLeft:10,
            paddingRight:50,
            '& h6': {
                display:'flex',
                justifyContent:'end'
            },
            '& p': {
                display:'flex',
                justifyContent:'end',
                fontSize:'16px',
                textAlign:'justify',
                marginTop:5
            },
            [theme.breakpoints.down('sm')]: {
                width:'100%',
                paddingRight:10,
            },
        },
    }
})

export default useStyles;