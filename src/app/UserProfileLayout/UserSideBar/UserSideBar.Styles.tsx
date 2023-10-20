import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        sideBar: {
            width: '265px',
            color: '#ffffff',
            backgroundColor: '#1e1e2d',
            height: 'calc(100vh - 70px)',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
        },
        closeSideBar: {
            width: '70px !important',
        },
        profile: {
            gap: 15,
            display: 'flex',
            padding: '16px 25px',
            alignItems: 'center',
            borderBottom: '1px solid #2d2d43',
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
                color: theme.palette.secondary.dark
            }
        },
        closeProfile: {
            padding: '16px 10px',
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
            color: '#9D9DA6 !important',
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
                    color: '#9D9DA6 !important'
                }
            },
            '&:hover, &:hover svg': {
                color: theme.palette.primary.light + '!important'
            }
        },
        accordionBody: {
            color: '#9D9DA6',
            padding: '0 0 0 19px !important',
            '& p': {
                fontSize: '14px',
                lineHeight: '14px'
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
                        color: theme.palette.primary.light + '!important'
                    }
                }
            }
        },
        activeList: {
            backgroundColor: '#2A2A3C !important',
            '& svg, & p': {
                color: theme.palette.primary.light + '!important'
            }
        },
        activeLink: {
            '& svg': {
                color: theme.palette.primary.light + '!important'
            },
            '& a': {
                position: 'relative',
                color: theme.palette.primary.light + '!important'
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
            backgroundColor: '#2d2d43'
        }
    }
})

export default useStyles;