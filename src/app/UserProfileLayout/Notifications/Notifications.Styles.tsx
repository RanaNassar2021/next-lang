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
        }
    }
})

export default useStyles;