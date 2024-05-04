import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import'./backButton.css'

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            style={{
                marginTop: '20px',  // Добавление отступа сверху
                padding: '8px 15px',  // Увеличение отступов для большего пространства вокруг текста
                fontSize: '18px',  // Изменение размера шрифта
                color: '#FFFFFF',  // Цвет текста
                backgroundColor: '#8DCBE6',  // Цвет фона
                borderRadius: '4px',  // Скругление углов
                textTransform: 'none'  // Отключение автоматического преобразования текста в заглавные буквы
            }}
        >
            Назад
        </Button>
    );
};

export default BackButton;
