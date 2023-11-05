import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => {
    return {
        container: {
            margin: 0,
            width: '60ch',
            height: '60vh',
            borderRadius: '60px',
            border: 'groove',
            boxShadow: '20px 15px 9px green',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            marginTop: '20vh',
            marginBottom: '20vh',
            textTransform: 'capitalize',
            padding: '20px',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                margin: 10
            },
            '& h6': {
                display: 'flex',
                justifyContent: 'center',
                textAlign:'center',
                marginTop:'2ch',
            },
            '& p': {
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'center',
            }
        },
        logInBtn:{
            backgroundColor: '#FF004F',
            borderRadius: '10px',
            color: 'white',
            marginTop:'2ch',
            marginBottom:'2ch',
            '&:hover': {
                backgroundColor: '#FF004F',
                fontWeight: 'bold'
            }
        },
    }
})

export default useStyles;

