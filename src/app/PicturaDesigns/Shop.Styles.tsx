
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles ()((theme:any) => {
    return {
        container: {
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            marginTop:10,
            marginBottom:20
        },
        content: {
            width: '30%',
            position:'relative',
            '&: hover':{
                width:'31%'
            },
            '&: before': {
                content: '""',
                backgroundColor:'black',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.2,
            }
        },
        contentFlashSale:{
            width: '30%',
            position:'relative',
            '&: hover':{
                width:'31%'
            },
        },
        maskMen: {
            position:'absolute',
            top:"20%",
            width:'100%',
            height:'50%',
            paddingLeft:'2ch',
            '& h6': {
                color:'white',
                fontWeight:'bold',
                fontSize:'30px'
            },
            '& p':{
                color:'white',
                fontSize:'12px'
            }
        },
        maskWomen: {
            position:'absolute',
            top:"20%",
            width:'100%',
            height:'50%',
            paddingRight:'2ch',
            '& h6': {
                color:'white',
                fontWeight:'bold',
                fontSize:'30px',
                display:'flex',
                justifyContent:'end',
               
            },
            '& p':{
                color:'white',
                fontSize:'12px',
                display:'flex',
                justifyContent:'end'
            }
        },
        containerMobile: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            marginTop:10,
        },
        contentMobileMen: {
            backgroundColor:'red',
            '&: before':{
                content: '""',
                backgroundColor:'black',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.2,
            }
        },
        contentMobileWomen: {
            position:'relative'
        },
        maskWomenMobile:{
            position:'absolute',
            top:"35%",
            width:'100%',
            height:'50%',
            paddingRight:'2ch',
            '& h6': {
                color:'white',
                fontWeight:'bold',
                fontSize:'30px',
                display:'flex',
                justifyContent:'end',
            },
            '& p':{
                color:'white',
                fontSize:'12px',
                display:'flex',
                justifyContent:'end'
            }
        }
      
    }
})

export default useStyles;