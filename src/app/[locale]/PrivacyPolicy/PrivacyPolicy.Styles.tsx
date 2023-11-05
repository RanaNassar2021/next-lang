import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() ((theme: any) =>{
    return {
        root: {
            display:'flex',
            justifyContent:'center',
            paddingLeft:'20ch',
            paddingRight:'20ch',
            [theme.breakpoints.down('md')]: {
                paddingLeft:'1ch',
                paddingRight:'1ch'
            }
        },
        container: {
            width:'100%',
            '& h6': {
                display:'flex',
                justifyContent:'center',
                fontSize:'25px',
                marginTop:30,
                marginBottom:30,
            [theme.breakpoints.down('md')]: {
                marginTop:'2ch',
                marginBottom:'2ch',
                fontSize:'18px'
            }
            },
            '& p': {
                display:'flex',
                justifyContent:'center',
                textAlign:'center',
                marginBottom:30
            },
        },
        content: {

            '& h4':{
                fontSize:'20px',
                marginBottom: 10
            },
            '& p':{
                textAlign:'justify',
                marginTop:10
            }
        }
    }
})

export default useStyles;