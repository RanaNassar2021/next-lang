import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        footer: {
            width: '100%',
            height: '55px',
            display: 'flex',
            flex: '1 0 55px',
            padding: '0 30px',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            justifyContent: 'space-between'
        },
        copyRight: {
            gap: 10,
            display: 'flex',
            alignItems: 'center',
            '& a': {
                margin: 0,
                fontWeight: 'bolder',
                textTransform: 'uppercase',
                transition: 'color .2s ease',
                '&:hover': {
                    color: theme.palette.primary.main + '!important'
                }
            }
        },
        footerMenuList: {
            gap: 15,
            display: 'flex',
            alignItems: 'center',
            padding: '0 !important',
            '& li': {
                padding: 0,
                '& a': {
                    fontSize: '13px',
                    transition: 'color .2s ease'
                },
                '&:hover a': {
                    color: theme.palette.primary.main + '!important'
                }
            }
        }
    }
})

export default useStyles;