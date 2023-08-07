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
            marginBottom: '4ch',
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
        mobile: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginTop: '20px',
            gap: '15px',
        },
        options: {
            marginLeft: 0,
        },
        mobileNumber: {
            fontSize: '12px',
            marginTop: 4
        },
        mobField: {
            width: '100%',
            flexWrap: 'wrap',
            marginRight: 0,
        },
        mobileDetail: {
            fontSize: '14px',
        },
        address: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            paddingLeft: 0,
            marginTop: '20px',
            marginBottom:'20px'
        },
        countryField: {
            width: '12ch',
            marginLeft: 0,
        },
        cityField: {
            width: '12ch',
        },
        fullAdress: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        terms: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 0
        },
        btn: {
            display: 'flex',
            justifyContent: 'start',
            gap: 30,
            marginTop: '15px',
            marginBottom: '20px',
            height:'36px'
        },
        btn1: {
            backgroundColor: '#FF004F',
            borderRadius: '10px',
            color: 'white',
            width: '30ch',
            '&:hover': {
                backgroundColor: '#FF004F',
                fontWeight: 'bold'
            }
        },
        btn2: {
            border: 'groove',
            borderRadius: '10px',
            color: 'black',
            width: '12ch',
            marginRight: 0,
            '&:hover': {
                fontWeight: 'bold'
            },
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
        }
    }
})

export default useStyles;