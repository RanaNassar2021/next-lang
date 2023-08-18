
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
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
                width: '100%',
                height: '90vh',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5
            },
        },
        theDesigner: {
            width: '55ch',
            height: 300,
            clipPath: 'polygon(0 0, 80% 0%, 100% 100%, 0% 100%)',
            marginRight: -25,
            [theme.breakpoints.down('md')]: {
                width: '100%',
                margin: 0,
                marginTop: '5ch',
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
                height: 60

            },
            '& h6': {
                fontWeight: 'normal',
                fontSize: '30px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                    fontSize: '20px'

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
                    fontSize: '12px',
                },
            },
        },
        picturaDesigns: {
            width: '90ch',
            height: 300,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12% 100%)',
            marginLeft: -25,
            position: 'relative',
            [theme.breakpoints.down('md')]: {
                marginLeft: 0,
                marginRight: 0,
                marginTop: '7ch',
                transform: "rotate(90deg)",
                width: '100%',
            },
        },
        picturaContent: {
            backgroundColor: '#03045e',
            position: 'absolute',
            top: 225,
            height: 75,
            opacity: 0.8,
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '12ch',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                height: 63,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                top: 235
            },
            '& h6': {
                fontWeight: 'normal',
                fontSize: '30px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                    fontSize: '20px',
                    marginLeft: '-60px'
                },
            },
            '& p': {
                fontWeight: 'normal',
                fontSize: '16px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                marginTop: 5,
                marginLeft: '2ch',
                [theme.breakpoints.down('md')]: {
                    fontSize: '12px',
                    marginLeft: '-50px'
                },
            },
        },
        bestSellerContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '20ch',
            paddingRight: '20ch',
            marginTop: 0,
            height:'auto',
            marginBottom: 40,
            width: '100%',
            [theme.breakpoints.down('md')]: {
                marginTop: 20,
                marginBottom: 20,
                paddingLeft: '1ch',
                paddingRight: '1ch',
                paddingBottom:40
            },
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            marginTop:40,
            marginBottom:40,
            [theme.breakpoints.down('md')]: {
                fontSize: '30px',
                marginBottom: 20
            },

        },
        slider: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: 0,
            [theme.breakpoints.down('md')]: {
                width: '100%',
                margin: 0
            },
            '& .splide__arrow': {
                backgroundColor: 'transparent !important',
                marginTop: 18,
                [theme.breakpoints.down('md')]: {
                    marginTop: 0,
                },
            },
            '& .splide__arrow--prev': {
                left: '-80px',
                fontSize: '25px',
                [theme.breakpoints.down('md')]: {
                    left: '10px',
                    fontSize: '18px'
                },
            },
            '& .splide__arrow--next': {
                backgroundColor: 'transparent !important',
                right: '-80px',
                fontSize: '25px',
                [theme.breakpoints.down('md')]: {
                    right: '10px',
                    fontSize: '18px',
                    backgroundColor: 'transparent !important'
                },
            },
        },
        sliderFlashSaleMobile: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: 0,
            [theme.breakpoints.down('md')]: {
                width: '100%',
                margin: 0,
                backgroundColor:'white'
            },
            '& .splide__arrow': {
                backgroundColor: 'transparent !important',
                marginTop: 18,
                [theme.breakpoints.down('md')]: {
                    marginTop: 0,
                },
            },
            '& .splide__arrow--prev': {
                left: '-80px',
                fontSize: '25px',
                [theme.breakpoints.down('md')]: {
                    left: '10px',
                    fontSize: '18px'
                },
            },
            '& .splide__arrow--next': {
                backgroundColor: 'transparent !important',
                right: '-80px',
                fontSize: '25px',
                [theme.breakpoints.down('md')]: {
                    right: '10px',
                    fontSize: '18px',
                    backgroundColor: 'transparent !important'
                },
            },
        },
        sliderCard: {
            display: 'flex',
            justifyContent: 'center'
        },
        cardTitle: {
            fontSize: '11px',
            textTransform: 'capitalize',
            fontWeight: 'bolder',
            alignContent: 'center',
        },
        cardContent: {
            alignItems: 'center',
            height: '60px',
            padding: '10px'
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
        flashSaleImage: {
            backgroundColor: 'white',
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]:{
               paddingBottom:20
            }
        },
        flashSale: {
            width: '100%',
            height: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '20ch',
            paddingRight: '20ch',
        },
        flashSaleSection: {
            marginTop:20,
            width:'100%',
            paddingLeft:'20ch',
            paddingRight: '20ch',
        },
        flashSaleSlider:{
            width:'100%',
            display:'flex',
            justifyContent:'center'
        },
        flashSaleContainer: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor:'white',
            justifyContent: 'center',
            paddingLeft: '20ch',
            paddingRight: '20ch',
            marginTop: 0,
            height:'auto',
            marginBottom: 40,
            width: '100%',
            [theme.breakpoints.down('md')]: {
                marginTop: 0,
                marginBottom: 20,
                paddingLeft: '1ch',
                paddingRight: '1ch',
                paddingBottom:40,
                backgroundColor:'white'
            },
        },
       
        sliderFlashSale: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            paddingLeft: 0,
            [theme.breakpoints.down('md')]: {
                width: '100%',
                marginTop: 0
            },
            '& .splide__arrow': {
                backgroundColor: 'transparent !important',
                marginTop: 8,
                [theme.breakpoints.down('md')]: {
                    marginTop: 0,
                },
            },
            '& .splide__arrow--prev': {
                left: '-80px',
                fontSize: '25px',
                [theme.breakpoints.down('md')]: {
                    left: '10px',
                    fontSize: '18px'
                },
            },
            '& .splide__arrow--next': {
                backgroundColor: 'transparent !important',
                right: '-80px',
                fontSize: '25px',
                [theme.breakpoints.down('md')]: {
                    right: '10px',
                    fontSize: '18px',
                    backgroundColor: 'transparent !important'
                },
            },
        },
      
        buyNow:{
            display:'flex',
            justifyContent:'center',
            height:80,
            marginTop:20,
            marginBottom: 40,
            [theme.breakpoints.down('md')]:{
                height:20,
                marginBottom:20
            }
        },
        buyNowBtn:{
            backgroundColor:'#FF6F61',
            borderRadius:'15px',
            height:'80px',
            [theme.breakpoints.down('md')]:{
                height:'40px'
            }
       
        },
        newTrendsContainer:{
            display:'flex',
            justifyContent:'center',
            paddingLeft:'20ch',
            paddingRight:'20ch',
            position:'relative',
            [theme.breakpoints.down('md')] : {
                backgroundColor:'red',
                paddingLeft:'1ch',
                paddingRight:'1ch',
                flexDirection:'row'
            }
        },
        newTrendsCard:{
            width:'100%',
            height:'100vh',
        },
        newTrendAbs: {
            position:'absolute',
            marginTop:'70vh',
            justifyContent:'center',
            '& h5':{
                color:'white',
                fontSize:'40px',
            }

        },
        newTrendAbsBtnContainer:{
                display:'flex',
                justifyContent:'center',
                marginTop:10
        },
        newTrendButton: {
            backgroundColor:'white',
            width:'100%',
            fontSize:'18px',
            fontWeight:'normal',
            '&: hover': {
                backgroundColor:'#FF6F61',
                color:'white'
            }
          
        },
        newTrendsContainerMobile:{
            display:'flex',
            width:'100%',
            flexDirection:'column',
            marginTop:100,
            justifyContent:'center'
        },
        newTrendCardMobile: {
            width:'100%',
            display:'flex',
            justifyContent:'center',
        },
        newTrendCardBtnContainer:{
            width: '100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            padding: '1ch',
            '& h6': {
                fontSize:'18px',
                display:'flex',
                alignItems:'center'
            }
        },
        newTrendBtn:{
            marginTop: 10,
            marginBottom: 10,
            border: 'groove 2px'
        },
        voteContainer: {
            paddingLeft:'20ch',
            paddingRight: '20ch',
            '& h6': {
                display:'flex',
                justifyContent:'center',
                fontSize:'35px',
                marginTop:40,
                fontWeight:'bold',
                [theme.breakpoints.down('md')]:{
                    marginTop:20,
                    fontSize:'30px'
                }
            },
            '& p':{
                display:'flex',
                justifyContent:'center',
                textAlign:'center',
                fontWeight:'bold',
                fontSize:'18px',
                marginBottom:40,
            },
            [theme.breakpoints.down('md')]:{
                paddingLeft:'1ch',
                paddingRight:'1ch',
                '& p':{
                    fontSize:'14px',
                    marginBottom:20
                }
            }

        },
        voteCardsContainer:{
            paddingLeft:'20ch',
            paddingRight:'20ch',
            display:'flex',
            flexDirection:'row',
            paddingBottom:40,
            gap:20,
            justifyContent:'space-between',
            [theme.breakpoints.down('md')]:{
                flexDirection:'column',
                justifyContent:'center',
                paddingLeft:'1ch',
                paddingRight:'1ch',
                overflow:'auto',
               
            }
        },
        voteBox:{
            position:'relative',
        },
        hoverBox:{
            color:'white',
            display:'flex',
            flexDirection:'column',
            position:'absolute',
            bottom:0,
            width:'100%',
            height:'50%',
            justifyContent:'center',
            alignItems:'center',
            padding: '1ch',
            '&: before': {
                content: '""',
                backgroundColor:'#1E2832',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.6,
            }
        },
        voteMobileContainer:{
                width:'100%',
                justifyContent:'center',
                marginTop:40,
                '& h6':{
                    display:'flex',
                    justifyContent:'center'
                },
                '& p':{
                    textAlign:'center',
                    marginBottom:10
                }
        },
        socialMediaContainer:{
            paddingLeft:'20ch',
            paddingRight: '20ch',
            backgroundColor:'#edede9',
            '& h6': {
                display:'flex',
                justifyContent:'center',
                fontSize:'35px',
                paddingTop:30,
                paddingBottom:30,
                fontWeight:'bold',
                [theme.breakpoints.down('md')]:{
                    marginTop:20,
                    paddingBottom:20,
                    fontSize:'25px',
                    textAlign:'center'
                }
            },
            [theme.breakpoints.down('md')]:{
                paddingLeft:'1ch',
                paddingRight:'1ch',
                '& p':{
                    fontSize:'14px',
                    paddingBottom:20,
                   
                }
            }
        },
        socialCardsContainer:{
            paddingLeft:'20ch',
            paddingRight: '20ch',
            paddingBottom:40,
            backgroundColor:'#edede9',
            display:'flex',
            FlexDirection:'row',
            justifyContent:'space-evenly',
            gap:20,
            [theme.breakpoints.down('md')]: {
                paddingLeft:'1ch',
                paddingRight:'1ch',
                paddingBottom:20,
                marginTop:0,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
                
            }
          
        },
        socialCard:{
            width:'20ch',
            position:'relative',
        },
        socialIcon:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top:0,
            backgroundColor:'transparent',
            width:'100%',
            height:'100%',
            '&: hover':{
                backgroundColor:'#edede9',
                opacity:0.4
            }
        },
        socialTiktok: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top:0,
            backgroundColor:'transparent',
            width:'100%',
            height:'100%',
            '&: hover':{
                backgroundColor:'#edede9',
                opacity:0.4
            }
        }

    }
})

export default useStyles;