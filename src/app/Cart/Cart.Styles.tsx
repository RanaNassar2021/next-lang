import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme: any) =>{
    return{
        stepper:{
            margin:'2ch 8ch',
            [theme.breakpoints.down('md')]:{
                margin:'2ch'
            }
        },
        container:{
            display:'flex',
            gap:'2ch',
            [theme.breakpoints.down('md')]:{
                flexDirection:'column'
            }
        },
        leftContent:{
            width:'50%',
            padding:'2ch',
            [theme.breakpoints.down('md')]:{
                width:'100%',
            }
        },
        rightContent:{
            width:'50%',
            padding:'2ch',
            [theme.breakpoints.down('md')]:{
                width:'100%',
            },
            "& h6":{
                fontSize:'20px'
            }
        },
        card:{
            backgroundColor:'white',
            marginTop:'2ch',
            display:'flex',
            overflow:'clip',
            height:'20ch',
            gap:'2ch',
            "& h6":{
                fontSize:'16px',
                fontWeight:500,
                marginTop:'10px'
            },
            "& p":{
                fontSize:'12px',
                opacity:0.8,
                margin:'2ch 0'
            }
        },
        promoText:{
            backgroundColor: 'white',
            width: '40ch',
            [theme.breakpoints.down('md')]:{
                width:'25ch'
            }
        },
        doneBtn:{
            backgroundColor: '#cad2c5',
             width: '15ch',
             [theme.breakpoints.down('md')]:{
                width:'10ch'
             }
        },
        quantity:{
            display:'flex',
            marginRight:'2ch',
            gap:'15px',
            '& p':{
                fontSize:'16px',
                fontWeight:'bold'
            }
        }
    }
})

export default useStyles;
