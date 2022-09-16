import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EmployeeModal from '../Modals/EmployeeModal';

const Employee = ({ id, name, email, company }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    const detailsHandler = async() => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json();

            const information = {
                phone: data.phone,
                website: data.website,
                street: data.address.street,
                city: data.address.city
            };

            setData(information);
            setOpen(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <EmployeeModal open={open} setOpen={setOpen} data={data}/>
        <Card sx={{ height: 400, width: 200, border: 0, boxShadow: 0 }} onClick={detailsHandler}>
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
        </>
    );
}

export default Employee;