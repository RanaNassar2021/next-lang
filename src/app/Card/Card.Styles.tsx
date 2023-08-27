import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme:any)=>{
    return {
        cards:{
            width:'100%',
            paddingLeft:'2ch',
            paddingRight:'2ch'
        },
        cardContent:{
            alignItems:'center',
            height:'55px',
            padding:'10px'
         },
         cardFooter:{
             display:'flex',
             justifyContent:'space-between',
             marginTop:5,
             '& p':{
                 fontSize:'11px',
                 fontWeight:'bold',
             }
         },
         cardTitle:{
            fontSize:'11px',
            textTransform:'capitalize',
            fontWeight:'bolder',
            alignContent:'center',
         },

         cardImage:{
            padding:0,
            height:'30ch',
            overflow:'hidden',
            [theme.breakpoints.down('md')]:{
                height:'auto'
            }
        },
    }
})

export default useStyles;