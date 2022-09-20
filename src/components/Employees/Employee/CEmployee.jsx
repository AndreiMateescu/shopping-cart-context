import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EmployeeModal from '../../Modals/EmployeeModal';

class CEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            data: {}
        };
    }

    async detailsHandler() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`);
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

            this.setState({ data: information, open: true });
        } catch (error) {
            console.log(error);
        }
    }
    
    closeModal() { //value = false
        this.setState({ open: false });
    }

    render() {
        return (<>
        <EmployeeModal open={this.state.open} data={this.state.data} closeModal={() => this.closeModal()}/>
        <Card sx={{ height: 400, width: 200, border: 0, boxShadow: 0 }} onClick={() => this.detailsHandler()}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://robohash.org/${this.props.id}?200x200`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.company}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>)
    }
}

export default CEmployee;