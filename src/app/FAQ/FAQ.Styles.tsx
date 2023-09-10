import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() ((theme: any)=>{
    return{
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
        content: {

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
        }
    }
})

export default useStyles