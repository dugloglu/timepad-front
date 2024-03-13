import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import Header from "../components/Header";
import {url} from '../utils/api'
import {EventData} from "../types/AddEvent";
import {useNavigate} from "react-router-dom";

export const AddEvent: React.FC = () => {
    const navigate = useNavigate()
    const [eventData, setEventData] = useState<EventData>({
        name: "",
        description: "",
        img: "",
        date: "",
        status: false,
        location: "",
        members: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Отправка данных на сервер
            await axios.post(`${url}/api/events`, eventData);
            navigate('/')
            // Успешно отправлено
            console.log("Данные успешно отправлены:", eventData);
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
        }
    };

    return (
        <>
            <Header/>
            <br/>
        <form onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Название"
                value={eventData.name}
                onChange={handleChange}
                required
            />  <br/>  <br/>
            <TextField
                name="description"
                label="Описание"
                value={eventData.description}
                onChange={handleChange}
                required
            />  <br/>  <br/>
            <TextField
                name="img"
                label="Изображение"
                value={eventData.img}
                onChange={handleChange}
                required
            />  <br/>  <br/>
            <TextField
                name="date"
                label="Дата"
                type="date"
                value={eventData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
            />  <br/>  <br/>
            <FormControlLabel
                control={
                    <Checkbox
                        name="status"
                        checked={eventData.status}
                        onChange={handleCheckboxChange}
                        color="primary"
                    />
                }
                label="Статус"
            />  <br/>  <br/>
            <TextField
                name="location"
                label="Местоположение"
                value={eventData.location}
                onChange={handleChange}
                required
            />  <br/>  <br/>

            <Button type="submit" variant="contained" color="primary">
                Создать событие
            </Button>
        </form>
        </>
    );
};

export default AddEvent;
