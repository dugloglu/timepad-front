import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {url} from "../utils/api";
import {Event} from "../types/Event";
import Button from "@mui/material/Button";
const EventCard: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Event[]>(`${url}/api/events`);
                setEvents(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async(id:number)=>{
        try {
            const resonse = axios.delete(`${url}/api/events/${id}`)
        }catch (e) {
            console.error(e)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px',justifyContent:'center',alignItems:'center' }}>
            {events.map((event) => (
                <Card key={event.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={event.img}
                        alt={event.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {event.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {event.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Location: {event.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Date: {new Date(event.date).toLocaleDateString()}
                        </Typography>
                        <Button variant='contained'>Подробнее</Button><br/><br/>
                        <Button variant='contained'>Записаться</Button><br/><br/>
                        <Button onClick={() => handleDelete(event.id)} variant='contained'>Удалить</Button><br/><br/>

                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default EventCard;
