import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => {
    return {
        container: {
            margin: 0,
            width: '40ch',
            height: 'auto',
            borderRadius: '10px',
            border: 'groove',
            boxShadow: '1px 2px 9px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4ch',
            marginBottom:'4ch',
            textTransform: 'capitalize',
            padding: '20px',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                margin: 10
            },
            '& h6': {
                display: 'flex',
                justifyContent: 'center',
            },
            '& p': {
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'center',
            }
        },
        textField: {
            marginTop: '20px',
            fontSize: '12px',
        },
        passwordError: {
            color:'red'
        },
        logInBtn:{
            backgroundColor: '#FF004F',
            borderRadius: '10px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#FF004F',
                fontWeight: 'bold'
            }
        },
        terms: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 0
        },
        btn3: {
            marginTop: '20px',
            backgroundColor: '#6741D9',
            borderRadius: '10px',
            color: 'white',
            width: '100%',
            '&:hover': {
                backgroundColor: '#6741D9',
                fontWeight: 'bold'
            }
        },
        btn4: {
            marginTop: '20px',
            backgroundColor: '#1D9BF0',
            borderRadius: '10px',
            color: 'white',
            width: '100%',
            '&:hover': {
                backgroundColor: '#1D9BF0',
                fontWeight: 'bold'
            }
        },
        logIn: {
            backgroundColor:'#D9D9D9',
            marginTop: '20px',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'40px',
            '& p': {
                fontSize: '14px',
            }
        },
        signUp: {
            marginTop: '20px',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'40px',
            '& p': {
                fontSize: '14px',
            }
        }
    }
})

export default useStyles;