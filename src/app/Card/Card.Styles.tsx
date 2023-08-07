import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme:any)=>{
    return {
        container:{
            backgroundColor:'orange'
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
    }
})

export default useStyles;