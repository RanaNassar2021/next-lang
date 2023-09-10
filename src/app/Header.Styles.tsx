import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => {
    return {
        root: {
            margin: 0
        },
        header: {
            display:'flex',
            marginLeft: '20ch',
            marginRight: '20ch',
            [theme.breakpoints.down('md')]: {
                marginLeft:'1ch',
                marginRight:'1ch'
            },
        },
        topHeader: {
            width:'33.33%',
            paddingTop: '2ch',
        },
        btn: {
            fontSize: '8px',
            color:'black'
        },
        logo: {
            width:'33.33%',
            display:'flex',
            justifyContent: 'center',
        },
        endHeader: {
            width:'33.33%',
            position:'relative',
        },
        register: {
            position:'absolute',
            bottom:0,
            width: '100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems: 'center'
        },
        btnR:{
            fontSize:'14px',
            color: 'black',
            fontWeight:'500'
        },
        bottomHeader:{
            marginLeft:'20ch',
            marginRight:'20ch',
            marginTop:'1ch',
            display:'flex',
            justifyContent:'space-between',
        },
        btnB: {
            width:'15%',
            color: 'black',
            fontSize:'12px',
            height:'35px',
        },
        mobile: {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center',
            gap:'2ch',
            margin: 0
        },
        mobileIcons: {
        }
    }
})

export default useStyles;
