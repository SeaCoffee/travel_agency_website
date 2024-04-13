import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
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
            {/* Первый ряд полей */}
            <Box className="flex-row first-row-fields">
                <Box className="flex-item">
                    <TextField
                        fullWidth
                        select
                        label="Страна"
                        {...register('country', { required: 'Это поле обязательно' })}
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
                        label="Взрослых"
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
                        label="Детей"
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
                        placeholderText="Дата начала тура"
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
                        placeholderText="Дата конца тура"
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
                        label="Номер телефона"
                        {...register('phoneNumber', {
                            required: 'Это поле обязательно',
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
                        label="Имя"
                        {...register('name', { required: 'Это поле обязательно' })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                        className="text-field"
                    />
                </Box>

                <Box className="flex-item">
                    <TextField
                        fullWidth
                        id="additionalRequests"
                        label="Дополнительные пожелания"
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
                    >
                        Отправить заявку
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}