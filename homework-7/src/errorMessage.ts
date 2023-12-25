type ErrorMessage = Record<string, string>;

export const errorMessage: ErrorMessage = {
    requiredText: 'Пожалуйста, заполните поле',
    // {{limitLength}} - маркер того, что это надо заменить на реальное значение,
    // которое нам приходит динамически         ↓ ↓ ↓ ↓ ↓
    minLength: 'Значение должно быть минимум {{limitLength}} символа',
    maxLength: 'Значение должно быть минимум {{limitLength}} символа', 
    validNumber: 'Введите валидное числовое значение',
    minAllowedNumber: 'Значение должно быть больше {{limitValue}}',
    maxAllowedNumber: 'Значение должно быть меньше {{limitValue}}', 
    minAllowedValue: 'Значение должно быть больше {{limitValue}}',
};
