import React from "react";
import { Box, Typography ,Card,CardContent, CardMedia } from "@mui/material";

// styles
import useStyles from "./Card.Styles";

// images
import HoodyWomen from '../Assets/Images/hoodyWomen.jpg'

export default function ProductCard () {
    const {classes} = useStyles()

    return(
        <React.Fragment>
            <Box className={classes.container}>
            <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyWomen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
            </Box>    
        </React.Fragment>
    )
}