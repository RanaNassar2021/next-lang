import { makeStyles} from "tss-react/mui";

const useStyles = makeStyles() ((theme: any ) =>{
    return {
        container:{
                backgroundColor:'transparent'
        },
        title:{
            display:'flex',
            justifyContent:'space-between',
            margin:'4ch 20ch 1ch 20ch',
            [theme.breakpoints.down('md')]:{
                margin: '4ch 4ch 2ch 4ch'
            },
            '& h6':{
                textTransform:'uppercase',
                alignItems:'center'
            }
        },
        divider:{
            margin:'2ch 20ch',
            [theme.breakpoints.down('md')]:{
                margin:'2ch 4ch'
            }
        },
        cardsContainer:{
            padding:'0 20ch',
            [theme.breakpoints.down('md')]:{
                padding:'0 4ch',
            }
        },
        cards:{
            width:'100%',
            marginBottom:'2ch',
        },
        cardContent: {
            alignItems: 'center',
            height: '60px',
            padding: '10px'
        },
        cardTitle: {
            fontSize: '11px',
            textTransform: 'capitalize',
            fontWeight: 'bolder',
            alignContent: 'center',
        },
        cardFooter: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 5,
            '& p': {
                fontSize: '11px',
                fontWeight: 'bold',
            }
        },
        card: {
            position:'relative',
        },
        hoverBox:{
            backgroundColor:'#1E2832',
            position:'absolute',
            bottom:60,
            width:'100%',
            color:'white',
            display:'flex',
            justifyContent:'space-between',
            padding: '1ch 2ch',
            [theme.breakpoints.down('md')]:{
                fontSize:'10px',
                '& svg':{
                    fontSize:'12px'
                }
            }
        },
        productDetailsLink:{
            position:'absolute',
            top:0,
            right:0,
            bottom:120,
            left:0,
        },
        fewLeftBox:{
            border:'solid white 1px',
            position:'absolute',
            top:5,
            right:5,
            padding:'2px 5px',
            color:'#EA4335'
        },
        saleBox:{
            position:'absolute',
            width:'70px',
            height:'70px',
            top:0,
            backgroundColor:'#EA4335',
            clipPath: 'polygon(45% 0, 80% 0, 0 80%, 0 45%)',
            '& p':{
                rotate:'-45deg',
                fontWeight:'bold'
            }
        },
        btnCart:{
                [theme.breakpoints.down('md')]:{
                    fontSize:'10px',
                    height:20,
                    '& svg':{
                        fontSize:'12px'
                    }
                }
        },
        cartMobile:{
            [theme.breakpoints.down('md')]:{
                '& svg':{
                    fontSize:'12px'
                }
            }
    },
        sizes:{
            display:'flex',
            justifyContent:'space-evenly',
        },
        sizeBox:{
            margin:'0 5px',
        },
        cardImage:{
            padding:0, 
            height:'30ch',
            overflow:'hidden',
            [theme.breakpoints.down('md')]:{
                height:'260px',
            }
        },
    }
} )

export default useStyles;