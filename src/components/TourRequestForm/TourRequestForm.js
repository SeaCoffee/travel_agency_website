import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography, MenuItem, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import countries from '../countries/countries';
import emailjs from 'emailjs-com';
import { addDays } from 'date-fns';

import './TourRequestForm.css';


export const TourRequestForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            startDate: startDate ? startDate.toISOString().split('T')[0] : '',
            endDate: endDate ? endDate.toISOString().split('T')[0] : '',
        };

        console.log(formattedData)
        emailjs.send('service_0toutre', 'template_w4glizo', formattedData, 'K8tFAH5DsIj3ST2CM')
            .then((result) => {
                console.log(result, 'RESULT LOG');
                console.log(result.text);
                reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate className="form-container">
            <Typography variant="body2" style={{ textAlign: 'center', margin: '20px', fontSize: '25px', fontWeight: 'bold' }}>Підібрати тур:</Typography>
            <Box className="flex-row first-row-fields">
                <Box className="flex-item">
                    <TextField
                        fullWidth
                        select
                        label="Країна"
                        {...register('country', { required: "Це поле обов'язкове для заповнення" })}
                        error={Boolean(errors.country)}
                        helperText={errors.country?.message}
                        className="select-field"
                    >
                        {countries.map((country, index) => (
                            <MenuItem key={index} value={country}>{country}</MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box className="flex-item">
                    <TextField
                        fullWidth
                        select
                        label="Скільки туристів"
                        {...register('adults')}
                        className="select-field"
                    >
                        {[1, 2, 3, 4, 5].map((number) => (
                            <MenuItem key={number} value={number}>{number}</MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box className="flex-item">
                    <TextField
                        fullWidth
                        select
                        label="Скільки дітей"
                        {...register('children')}
                        className="select-field"
                    >
                        {Array.from({ length: 5 }, (_, i) => i).map((number) => (
                            <MenuItem key={number} value={number}>{number}</MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box className="flex-item date-fields">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={addDays(new Date(), 1)}
                        placeholderText="Дата початку туру"
                        className="date-picker"
                    />
                </Box>

                <Box className="flex-item date-fields">
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="Дата закінченя туру"
                        className="date-picker"
                    />
                </Box>
            </Box>

            {/* Второй ряд полей */}
            <Box className="flex-row second-row-fields">
                <Box className="flex-item">
                    <TextField
                        fullWidth
                        id="phoneNumber"
                        label="Номер телефону"
                        {...register('phoneNumber', {
                            required: "Це поле обов'язкове для заповнення",
                            pattern: {
                                value: /^\+?(?!0+$)\d{10,15}$/,
                                message: 'Неверный формат номера'
                            },
                        })}
                        error={Boolean(errors.phoneNumber)}
                        helperText={errors.phoneNumber?.message}
                        className="text-field select-field"
                    />
                </Box>

                <Box className="flex-item">
                    <TextField
                        fullWidth
                        id="name"
                        label="Ім'я"
                        {...register('name', { required: "Це поле обов'язкове для заповнення" })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                        className="text-field"
                    />
                </Box>

                <Box className="flex-item">
                    <TextField
                        fullWidth
                        id="additionalRequests"
                        label="Додаткові побажання, якщо є"
                        multiline
                        rows={1}
                        inputProps={{ maxLength: 300 }}
                        {...register('additionalRequests')}
                        className="text-field additional-requests-field"
                    />
                </Box>

                {/* Кнопка */}
                <Box className="flex-item button-container">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="submit-button"
                        style={{ backgroundColor: '#9DF1DF', color: '#000',
                            textShadow: '1px 1px 2px white', }}
                    >
                        Відправити
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}