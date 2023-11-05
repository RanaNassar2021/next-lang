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
        post:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        },
        postDetails:{
            width:'60%',
            [theme.breakpoints.down('md')]:{
                width:'100%'
            }
        },
        user:{
            display:'flex',
            '& img':{
                width:'40px',
                height:'40px',
                objectFit: 'cover',
                overflow: 'hidden',
                borderRadius: '5px'
            },
            '& p':{
                display:'flex',
                padding:'5px',
                alignItems:'center',
            }
        },
        postImages:{
            display:'flex',
            width:'100%',
            overflow:'hidden'
        },
        image:{
            width:'50%',
            height:'300px'
        },
        reacts:{
            display:'flex',
            width:'100%',
            paddingTop:'5px',
            justifyContent:'space-between',
            backgroundColor:'white',
            opacity:0.6,
            '& img':{
                width:'25px',
                height:'25px'
            }
        },
        comments:{
            display:'flex',
            alignItems:'center',
            gap:'5px',
            paddingTop:'5px',
            '& h5':{
                fontWeight:600,
                fontSize:'14px'
            },
            '& h6':{
                fontWeight:500,
                fontSize:'12px'
            },
            '& svg':{
                fontSize:'16px',
                opacity:0.6
            }
        },
        footer:{
            display:'flex',
            width:'100%'
        }
      
    }
})

export default useStyles;