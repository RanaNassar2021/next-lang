
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles() ((theme: any) =>{
    return {
        container: {
            display: 'flex',
            marginTop:'2ch',
           
        },
        mainContainer:{
            display:'flex',
            width:'100%',
            marginTop:'2ch',
            marginBottom:'2ch'

        },
        contentLeft:{
            width:'66%',
            display:'flex'
        },
        contentRight:{
            width:'34%',
            padding:'2ch',
        },
        content:{
            width:'33.33%',
            '& h6': {
                fontSize:'20px'
            }
        },
        size:{
            width:'30px',
            height:'30px',
            backgroundColor:'red',
        },
        btn:{
            color:'balck'
        },
        imageContainerMob:{
            width: '100%',
            padding: '0 40px',
            '& .splide__arrow--prev': {
                left: '-30px',
                fontSize:'14px',
                backgroundColor: 'transparent !important'
            },
            '& .splide__arrow--next': {
                right: '-30px',
                fontSize:'14px',
                backgroundColor: 'transparent !important'
            },
            [theme.breakpoints.down('md')]: {
                textAlign: 'center',
                marginBottom: '35px',
                marginTop:'35px'
            }
        },

        productCard: {
            width: '250px',
            fontSize: '14px',
            overflow: 'hidden',
            borderRadius: '8px',
        },
        cardBody: {
            gap: 10,
            display: 'flex',
            '& img': {
                width: '250px',
                height: '300px',
                objectFit: 'cover'
            }
        },
        ratingSectionContainer:{
            backgroundColor:'white',
            textAlign:'center',
            '& h6':{
                fontSize:'30px',
                fontWeight: 500,
                marginTop:'1ch',
                marginBottom:'1ch'
            }
        },
        commentContent:{
            width:'25%',
            marginBottom:'2ch'
        },
        ratingSection:{
            display:'flex',
            justifyContent:'space-evenly'
        },
        commentSection:{
            backgroundColor:'white',
            width:'100%',
            padding:'20px 40px',
            gap:'1ch',
            display:'flex',
            flexDirection:'column',
            textAlign:'left',
            '& h6':{
                fontSize:'22px'
            },
            '& h5':{
                fontSize:'18px'
            }
        }
    }
})

export default useStyles;