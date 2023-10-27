import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme: any)=>{
    return{
        root: {
            display: 'flex',
            overflow: 'hidden',
            minHeight: '100vh',
            backgroundColor: '#f4f6f8'
        },
        dashboard: {
            display: 'flex',
            marginTop: '70px'
        },
        container: {
            display: 'flex',
            overflow: 'auto',
            alignItems: 'center',
            flexDirection: 'column',
            width: 'calc(100vw - 265px)',
            height: 'calc(100vh - 70px)',
            justifyContent: 'space-between',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        },
        openContainer: {
            width: 'calc(100vw - 70px) !important',
        },
        content: {
            flexGrow: 1,
            width: '100%',
            padding: '20px 30px',
            flex: '1 0 calc(100% - 55px)'
        },
        footer:{
            display:'flex',
            width:'100%'
        },
        rootFAQ: {
            display:'flex',
            justifyContent:'center',
            paddingLeft:'1ch',
            paddingRight:'1ch',
            [theme.breakpoints.down('md')]: {
                paddingLeft:'1ch',
                paddingRight:'1ch'
            }
        },
        containerFAQ: {
            width:'100%',
            marginBottom:30,
            '& h6': {
                display:'flex',
                justifyContent:'start',
                fontSize:'20px',
                textTransform:'uppercase',
                marginTop:30,
                marginBottom:10,
            [theme.breakpoints.down('md')]: {
                marginTop:'2ch',
                marginBottom:'2ch',
                fontSize:'18px'
            }
            },
            '& p': {
                display:'flex',
                justifyContent:'start',
                textAlign:'justify',
                marginBottom:30
            },
        },
        contentFAQ: {

            '& h4':{
                fontSize:'18px',
                fontWeight:500,
                marginBottom: 10,
                [theme.breakpoints.down('md')]:{
                    fontSize:'14px'
                }
            },
            '& p':{
                textAlign:'justify',
                marginTop:10
            }
        },
        contactUs:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            margin:'1ch',
            [theme.breakpoints.down('md')]:{
                width:'100%'
            },
            '& h5':{
                textTransform:'uppercase',
                fontSize:'25px',
                fontWeight:500
            },
            '& p':{
                justifyContent:'center',
            }
        }
    }
})

export default useStyles;