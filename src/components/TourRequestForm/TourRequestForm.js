import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Typography, MenuItem, TextField } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import { addDays } from 'date-fns';

import './TourRequestForm.css';


export const TourRequestForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm();
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [submitting, setSubmitting] = React.useState(false);
    const [error, setError] = React.useState(false);
    const countries = [
        'Єгипет',
        'Туреччина',
        'Болгарія',
        'Греція/Кіпр',
        'Чорногорія',
        'Албанія/Хорватія',
        'Туніс',
        'ОАЕ',
        'Домінікана/Мексика',
        'Мальдіви/Сейшели',
        'Іспанія/Італія/Португалія',
        'Танзанія/Кенія',
        'Таїланд/Шрі Ланка',
        "Індонезія/Малайзія/В'єтнам",
        'Ізраіль/Іорданія',
        'Угорщина/Словенія',
        'інше',
    ];


    const onSubmit = (data) => {
        setSubmitting(true);
        const formattedData = {
            ...data,
            startDate: startDate ? startDate.toISOString().split('T')[0] : '',
            endDate: endDate ? endDate.toISOString().split('T')[0] : '',
        };

        emailjs.send('service_0toutre', 'template_w4glizo', formattedData, 'K8tFAH5DsIj3ST2CM')
            .then((result) => {
                reset(); // Сброс формы
                setStartDate(null);
                setEndDate(null);
                setSubmitting(false);
                setError(false);
            }, (error) => {
                setError(true);
                setSubmitting(false);
            });
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate className="form-container">
            <Typography variant="body2" style={{ textAlign: 'center', margin: '20px', fontSize: '25px', fontWeight: 'bold' }}>Підібрати тур:</Typography>
            {error && <Typography color="error" style={{ textAlign: 'center' }}>Помилка при відправці. Будь ласка, спобуйте ще раз.</Typography>}
            {submitting && <Typography style={{ textAlign: 'center' }}>Відправка даних...</Typography>}

            <Box className="flex-row first-row-fields">
                <Box className="flex-item">
                    <Controller
                        name="country"
                        control={control}
                        rules={{ required: "Це поле обов'язкове для заповнення" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                select
                                label="Країна"
                                error={Boolean(errors.country)}
                                helperText={errors.country?.message}
                                className="select-field"
                            >
                                {countries.map((country, index) => (
                                    <MenuItem key={index} value={country}>{country}</MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </Box>

                <Box className="flex-item">
                    <Controller
                        name="adults"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                select
                                label="Скільки туристів"
                                className="select-field"
                            >
                                {[1, 2, 3, 4, 5].map(number => (
                                    <MenuItem key={number} value={number}>{number}</MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </Box>

                <Box className="flex-item">
                    <Controller
                        name="children"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                select
                                label="Скільки дітей"
                                className="select-field"
                            >
                                {Array.from({ length: 5 }, (_, i) => i).map(number => (
                                    <MenuItem key={number} value={number}>{number}</MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </Box>

                <Box className="flex-item date-fields">
                    <Controller
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                {...field}
                                selected={startDate}
                                onChange={(date) => {
                                    field.onChange(date);
                                    setStartDate(date);
                                }}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={addDays(new Date(), 1)}
                                placeholderText="Дата початку туру"
                                className="date-picker"
                                popperClassName="custom-datepicker-popper"
                                popperPlacement="top"
                                portalId="portal-root"
                            />
                        )}
                    />
                </Box>

                <Box className="flex-item date-fields">
                    <Controller
                        name="endDate"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                {...field}
                                selected={endDate}
                                onChange={(date) => {
                                    field.onChange(date);
                                    setEndDate(date);
                                }}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                placeholderText="Дата закінчення туру"
                                className="date-picker"
                                popperClassName="custom-datepicker-popper"
                                popperPlacement="top"
                                portalId="portal-root"
                            />
                        )}
                    />
                </Box>

            </Box>

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
                        className="text-field"
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
                        className="text-field"
                    />
                </Box>

                <Box className="flex-item button-container">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={submitting}
                        className="submit-button"
                        style={{ backgroundColor: '#9DF1DF', color: '#000', textShadow: '1px 1px 2px white' }}
                    >
                        Відправити
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}