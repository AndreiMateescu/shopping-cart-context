import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Employee = ({ id, name, email, company }) => {
    return (
        <Card sx={{ height: 400, width: 200, border: 0, boxShadow: 0 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://robohash.org/${id}?200x200`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {company}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Employee;