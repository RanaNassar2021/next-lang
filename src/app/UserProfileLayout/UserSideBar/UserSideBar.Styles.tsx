import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        sideBar: {
            width: '265px',
            backgroundColor: '#BDCAD3',
            height: 'calc(100vh - 70px)',
            overflow:'auto',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
        },
        closeSideBar: {
            width: '70px !important',
        },
        logo:{
            marginTop:'-20px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            borderBottom:'1px solid white',
            color:'#1E2832',
            '& img':{
                width:'150px',
                height:'150px',
            },
            '& p':{
                fontWeight:500
            }
         
        },
        closeLogo:{
            marginTop:0,
            '& img':{
                width:'50px',
                height:'50px',
                overflow: 'hidden',
                objectFit: 'cover',
            }
        },
        profile: {
            gap: 15,
            display: 'flex',
            flexDirection:'column',
            padding: '16px 25px',
            alignItems: 'center',
            borderBottom: '1px solid #ffffff',
            '& img': {
                width: '50px',
                height: '50px',
                overflow: 'hidden',
                objectFit: 'cover',
                borderRadius: '7px',
            },
            '& h5': {
                fontWeight: 600,
                fontSize: '14px',
                overflow: 'hidden',
                marginBottom: '2px',
                textOverflow: 'ellipsis',
            },
            '& h6': {
                fontWeight: 400,
                marginBottom: 0,
                fontSize: '12px',
                lineHeight: '14px',
            }
        },
        closeProfile: {
            padding: '16px 10px',
        },
        followers:{
            display:'flex',
            justifyContent:'space-evenly',
            gap:'5px',
            textAlign:'center'
        },
        listMenu: {
            gap: '5px',
            display: 'flex',
            overflow: 'auto',
            padding: '16px 10px',
            flexDirection: 'column',
            height: 'calc(100vh - 153px)'
        },
        accordion: {
            width: '100%',
            margin: '0 !important',
            boxShadow: 'none !important',
            backgroundColor: 'transparent !important',
            '&:before': {
                content: 'none'
            }
        },
        accordionTitle: {
            padding: '9px 13px',
            borderRadius: '4px',
            color: '#1E2832 !important',
            minHeight: 'auto !important',
            '& .MuiAccordionSummary-content': {
                gap: 7,
                display: 'flex',
                alignItems: 'center',
                margin: '0 !important',
                '& svg': {
                    width: '20px',
                    height: '20px'
                }
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
                fontSize: '7px',
                marginRight: '5px',
                '& svg': {
                    width: '18px !important',
                    height: '18px !important',
                    color: '#1E2832 !important'
                }
            },
            '&:hover, &:hover svg': {
                color: 'blue !important'
            }
        },
        accordionBody: {
            color: '#9D9DA6',
            padding: '0 0 0 19px !important',
            '& p': {
                fontSize: '10px',
                lineHeight: '12px'
            }
        },
        closeBody: {
            padding: '0 !important',
            '& svg': {
                margin: '0 !important'
            },
            '& a': {
                padding: '7px 13px !important'
            },
        },
        accordionList: {
            padding: '0 !important',
            '& li': {
                padding: '5px 0 0',
                '& a': {
                    width: '100%',
                    padding: '7px',
                    display: 'flex',
                    borderRadius: '5px',
                    alignItems: 'center',
                    transition: 'background-color .4s ease',
                    '& svg': {
                        width: '18px',
                        height: '18px',
                        marginRight: '10px'
                    },
                    '&:hover': {
                        color:  'blue !important'
                    }
                }
            }
        },
        activeList: {
            backgroundColor: 'transparent !important',
            '& svg, & p': {
                color:  '#0A183D !important'
            }
        },
        activeLink: {
            '& svg': {
                color:  '#0A183D !important'
            },
            '& a': {
                position: 'relative',
                color: '#0A183D !important'
            }
        },
        activeLinkBefore: {
            '& a:before': {
                left: '0',
                top: '50%',
                width: '5px',
                height: '5px',
                content: '""',
                borderRadius: '50%',
                position: 'absolute',
                transform: 'translateY(-50%)',
                backgroundColor: theme.palette.primary.main
            }
        },
        groupTitle: {
            color: '#A1A5B7',
            fontSize: '13px',
            padding: '26px 13px 7px',
            textTransform: 'uppercase'
        },
        footerButton: {
            padding: '11px',
            minWidth: 'auto',
            fontSize: '14px',
            color: '#A1A5B7',
            marginTop: 'auto',
            lineHeight: '17px',
            backgroundColor: '#2A2A3C',
            textTransform: 'capitalize',
            '& svg': {
                width: '18px',
                height: '18px'
            }
        },
        breakLine: {
            width: '100%',
            height: '1px',
            margin: '10px 0',
            backgroundColor: '#ffffff',
            color:'#ffffff'
        },
        tabs:{
            color: "#1E2832",
            padding:'7px 35px',
            '& p':{
                fontWeight:500,
                fontSize:'16px',
            }
        }
    }
})

export default useStyles;