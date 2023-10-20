import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        header: {
            top: 0,
            left: 0,
            zIndex: 2,
            width: '100%',
            height: '70px',
            display: 'flex',
            position: 'fixed',
            backgroundColor: '#ffffff',
            boxShadow: '0px 10px 30px 0px rgba(82, 63, 105, 0.05);',
        },
        logo: {
            width: '265px',
            height: '100%',
            display: 'flex',
            color: '#ffffff',
            alignItems: 'center',
            padding: '0 0 0 25px',
            backgroundColor: '#1e1e2d',
            justifyContent: 'space-between',
            borderBottom: '1px solid #2d2d43',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            '& img': {
                maxWidth: '120px',
                maxHeight: '50px'
            },
            '& button': {
                padding: '6px',
                borderRadius: '5px',
                transform: 'translateX(50%)',
                color: theme.palette.secondary.dark,
                backgroundColor: theme.palette.primary.light,
                boxShadow: '0px 0px 10px rgba(113, 121, 136, 0.1)',
                '& svg': {
                    width: '18px',
                    height: '18px'
                },
                '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.light
                }
            }
        },
        closeLogo: {
            padding: '0 20px',
            width: '70px !important',
            '& img': {
                flex: '1 0 30px',
                maxWidth: '30px',
                maxHeight: '50px'
            },
            '& button': {
                transform: 'translateX(90%)',
                border: '1px solid' + theme.palette.secondary.main
            },
            '& svg': {
                transform: 'rotateZ(180deg)'
            },
        },
        menu: {
            height: '100%',
            display: 'flex',
            padding: '0 30px',
            alignItems: 'center',
            width: 'calc(100vw - 265px)',
            justifyContent: 'space-between',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
        },
        closeMenu: {
            padding: '0 30px 0 50px',
            width: 'calc(100vw - 70px)',
        },
        menuList: {
            gap: 8.5,
            display: 'flex',
            alignItems: 'center',
            padding: '0 !important',
            '& li': {
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                borderRadius: '6px',
                padding: '10px 13px',
                transition: 'color .2s ease',
                color: theme.palette.secondary.dark,
                '& svg': {
                    width: '23px',
                    height: '23px',
                    color: theme.palette.secondary.contrastText
                },
                '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.secondary.light,
                    '& svg': {
                        color: theme.palette.primary.main
                    }
                }
            }
        },
        menuIcons: {
            padding: '8px 9px !important'
        },
        menuProfile: {
            height: '39px',
            flex: '1 0 39px',
            padding: '0 !important',
            '& img': {
                width: '39px',
                height: '39px',
                objectFit: 'cover',
                overflow: 'hidden',
                borderRadius: '5px'
            }
        }
    }
})

export default useStyles;