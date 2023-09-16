import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme:any) =>{
    return{
        container:{
            height:'50vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'30px',
            '& p':{
                textTransform:'capitalize'
            },
            [theme.breakpoints.down('md')]:{
                height:'30vh',
                '& h6':{
                    fontSize:'25px'
                },
                '& p':{
                    fontSize:'14px'
                }
            }
        },
        firstContent:{
            display:'flex',
            [theme.breakpoints.down('md')]:{
                flexDirection:'column'
            }
        },
        leftContent:{
            width:'50%',
            borderRight: 'solid gray 1px',
            padding:'5ch',
            '& p':{
                textTransform:'capitalize',
                margin:'10px 0'
            },
            [theme.breakpoints.down('md')]:{
                width:'100%',
                borderRight:'none',
                borderBottom:'solid gray 1px'
            }
        },
        rightContent:{
            width:'50%',
            padding:'5ch',
            '& p':{
                textTransform:'capitalize',
                marginTop:'5ch'
            },
            [theme.breakpoints.down('md')]:{
                width:'100%',
                '& p':{
                    marginTop:0
                }
            }
        },
        link:{
            color:'blue'
        },
        secondContent:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            padding:'30px 0'
        },
        centerContent:{
            backgroundColor:'white',
            border:'solid #dad7cd 1px',
            borderRadius:'10px',
            width:'50%',
            padding:'2ch 5ch',
            '& h6':{
                fontSize:'25px',
                textTransform:'capitalize'
            },
            '& p':{
                textTransform:'capitalize'
            },
            [theme.breakpoints.down('md')]:{
                width:'95%',
                padding:'2ch'
            }
        }
    }
})

export default useStyles;