import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


export default function PokemonCard({ name, image, types }) {

    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                // height="220"
                image={image}
            />
            <CardContent>
                <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler()}
                    </Typography>
                </Box>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
