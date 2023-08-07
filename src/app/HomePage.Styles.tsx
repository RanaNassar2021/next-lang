
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => {
    return {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: 0,
            marginTop: '2ch',
            [theme.breakpoints.down('md')]: {
                marginLeft:0,
                marginRight:0,
                padding:0,
                width:'100%',
                height:'90vh',
                flexDirection:'column',
                alignItems:'center',
                gap:5
            },
        },
        theDesigner: {
            width: '55ch',
            height: 300,
            clipPath: 'polygon(0 0, 80% 0%, 100% 100%, 0% 100%)',
            marginRight: -25,
            [theme.breakpoints.down('md')]: {
                width:'100%',
                margin:0,
                marginTop:'5ch',
                transform: "rotate(90deg)"
            },
        },
        designerContent: {
            backgroundColor: '#03045e',
            height: 75,
            opacity: 0.8,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '12ch',
            [theme.breakpoints.down('md')]: {
               height:60
              
            },
            '& h6': {
                fontWeight: 'normal',
                fontSize: '30px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                 [theme.breakpoints.down('md')]: {
                fontSize:'20px'
              
            },
            },
            '& p': {
                fontWeight: 'normal',
                fontSize: '16px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '1.5ch',
                [theme.breakpoints.down('md')]: {
                    fontSize:'12px',
                },
            },
        },
        picturaDesigns: {
            width: '90ch',
            height: 300,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12% 100%)',
            marginLeft: -25,
            position:'relative',
            [theme.breakpoints.down('md')]: {
                marginLeft:0,
                marginRight:0,
                marginTop:'7ch',
                transform: "rotate(90deg)",
                width:'100%',
            },
        },
        picturaContent: {
            backgroundColor: '#03045e',
            position:'absolute',
            top:225,
            height: 75,
            opacity: 0.8,
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '12ch',
            width:'100%',
            [theme.breakpoints.down('md')]: {
                height:63,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                top:235
            },
            '& h6': {
                fontWeight: 'normal',
                fontSize: '30px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                    fontSize:'20px',
                    marginLeft:'-60px'
                },
            },
            '& p': {
                fontWeight: 'normal',
                fontSize: '16px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                marginTop:5,
                marginLeft:'2ch',
                [theme.breakpoints.down('md')]: {
                    fontSize:'12px',
                    marginLeft:'-50px'
                },
            },
        },
        bestSellerContainer:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            paddingLeft:'20ch',
            paddingRight:'20ch',
            marginTop:40,
            marginBottom:40,
            width:'100%',
            [theme.breakpoints.down('md')]: {
              marginTop:20,
              marginBottom:20,
              paddingLeft:'1ch',
              paddingRight:'1ch',
            },
        },
        title:{
            display:'flex',
            justifyContent:'center',
            [theme.breakpoints.down('md')]: {
              fontSize:'30px',
              marginBottom:20
              },

        },
        slider: {
            width:'100%',
            display:'flex',
            justifyContent:'center',
            paddingLeft:0,
            [theme.breakpoints.down('md')]: {
               width:'100%',
               margin:0
               },
            '& .splide__arrow': {
                backgroundColor: 'transparent !important',
                marginTop:18,
                [theme.breakpoints.down('md')]: {
                    marginTop:0,
                   },
            },
            '& .splide__arrow--prev': {
                left: '-80px',
                fontSize:'25px',
                [theme.breakpoints.down('md')]: {
                   left:'10px',
                   fontSize:'18px'
                  },
            },
            '& .splide__arrow--next': {
                backgroundColor: 'transparent !important',
                right: '-80px',
                fontSize:'25px',
                [theme.breakpoints.down('md')]: {
                    right:'10px',
                    fontSize:'18px',
                    backgroundColor:'transparent !important'
                   },
            },
        },
        sliderCard: {
             display:'flex',
             justifyContent:'center'
        },
        cardTitle:{
           fontSize:'11px',
           textTransform:'capitalize',
           fontWeight:'bolder',
           alignContent:'center',
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
        flashSaleImage:{
            backgroundColor:'white',
            width:'100%',
            height:'auto',
            display:'flex',
            justifyContent:'center',
        },
        flashSale:{
            width:'100%',
            height:'auto',
            justifyContent:'center',
            alignItems:'center',
            paddingLeft:'20ch',
            paddingRight:'20ch',
        },
      
    }
})

export default useStyles;