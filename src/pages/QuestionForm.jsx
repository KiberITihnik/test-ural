import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../scss/QuestionForm.module.scss';
import classnames from 'classnames';
import { MaskField } from 'react-mask-field';

const QuestionForm = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [errorMsg, setErrorMsg] = useState(false);

    //Проверка файла весом не более 2мб
    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const validateSelectedFile = () => {
        const MAX_FILE_SIZE = 2048; // 2MB
        if (!selectedFile) {
            return;
        }
        const fileSizeKiloBytes = selectedFile.size / 1024;
        if (fileSizeKiloBytes > MAX_FILE_SIZE) {
            setErrorMsg('pdf, doc, docx, xls, xlsx, jpg, bmp, png не более 2мб');
            return;
        }
        setErrorMsg('');
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: 'onBlur' });

    // Без type="file"
    const onSubmit = async (data) => {
        const res = await fetch('http://localhost:4000/file', {
            // файл-обработчик
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // отправляеемые данные
            },
            body: JSON.stringify(data),
        })
            .then((res) => alert('Сообщение отправлено'))
            .catch((error) => console.error(error));
        console.log(data);
        reset();
    };
    // С type="file"
    // const onSubmit = async (data) => {
    //     const formData = new FormData();
    //     formData.append('file', data.files[0]);

    //     console.log(formData);
    //     const res = await fetch('http://localhost:4000/file', {
    //         method: 'POST',
    //         body: formData,
    //     }).then((res) => res.json());
    //     console.log(res);
    //     alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    //     reset();
    //     setSelectedFile(null);
    // };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label>
                Категория обращения<span>*</span>
                <select
                    {...register('category', { required: true })}
                    name="category"
                    className={classnames(styles.selectLength, {
                        [styles.errors]: errors.category,
                    })}>
                    <option className={styles.optionNone} selected disabled></option>
                    <option>Консультация</option>
                    <option>Проблема</option>
                    <option>Жалоба</option>
                </select>
                {errors?.category && <p className={styles.hint}>Поле обязательно к заполнению</p>}
            </label>
            <label>
                Тема обращения<span>*</span>
                <select
                    {...register('accountType', { required: true })}
                    name="accountType"
                    className={classnames(styles.selectLength, {
                        [styles.errors]: errors.accountType,
                    })}>
                    <option className={styles.optionNone} selected disabled></option>
                    <option>Работа сайта</option>
                    <option>Налоговый учет</option>
                    <option>Таможенное оформление</option>
                </select>
                {errors?.accountType && (
                    <p className={styles.hint}>Поле обязательно к заполнению</p>
                )}
            </label>
            <div className={styles.importance}>
                <label>
                    Повторяемость<span>*</span>
                    <select
                        className={classnames({
                            [styles.errors]: errors.recurrence,
                        })}
                        {...register('recurrence', { required: true })}
                        name="recurrence">
                        <option className={styles.optionNone} selected disabled></option>
                        <option>Первичное</option>
                        <option>Вторичное</option>
                    </select>
                    {errors?.recurrence && (
                        <p className={styles.hint}>Поле обязательно к заполнению</p>
                    )}
                </label>
                <label>
                    Срочность<span>*</span>
                    <select
                        className={classnames({
                            [styles.errors]: errors.timeliness,
                        })}
                        {...register('timeliness', { required: true })}
                        name="timeliness">
                        <option className={styles.optionNone} selected disabled></option>
                        <option>Высокая</option>
                        <option>Средняя</option>
                        <option>Низкая</option>
                    </select>
                    {errors?.timeliness && (
                        <p className={styles.hint}>Поле обязательно к заполнению</p>
                    )}
                </label>
            </div>
            <div>
                <h1>Контактное лицо</h1>
                <label>
                    ФИО<span>*</span>
                    <input
                        className={classnames({
                            [styles.errors]: errors.fullName,
                        })}
                        type="text"
                        {...register('fullName', {
                            required: 'Поле обязательно к заполнению',
                            pattern: {
                                value: /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/,
                            },
                        })}
                    />
                    <div>
                        {errors?.fullName && (
                            <p className={styles.hint}>
                                {errors?.fullName?.message || 'Пример: Иванов Иван Иванович'}
                            </p>
                        )}
                    </div>
                </label>

                <div className={styles.importance}>
                    <label>
                        Адрес электронной почты<span>*</span>
                        <input
                            className={classnames(styles.inputLength, {
                                [styles.errors]: errors.email,
                            })}
                            type="text"
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                },
                            })}
                        />
                        <div>
                            {errors?.email && (
                                <p className={styles.hint}>
                                    {errors?.email?.message ||
                                        'Некорректный email. Пример: none@pochta.name'}
                                </p>
                            )}
                        </div>
                    </label>
                    <label>
                        Телефон
                        <MaskField
                            className={styles.inputLength}
                            type="text"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="+7 (___)___-__-__"
                            {...register('phoneNumber', {
                                required: false,
                            })}
                            mask="+7 (___) ___-__-__"
                            replacement={{ _: /\d/ }}
                        />
                    </label>
                </div>
            </div>
            <div>
                <h1>Обращение</h1>
                <label>
                    Ваш вопрос<span>*</span>
                    <textarea
                        className={classnames({
                            [styles.errors]: errors.petition,
                        })}
                        {...register('petition', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 50,
                                message: 'Минимум 50 символов',
                            },
                        })}
                        name="petition"
                    />
                    {errors?.petition && (
                        <p className={styles.hint}>
                            {errors?.petition?.message || 'Поле обязательно к заполнению'}
                        </p>
                    )}
                </label>
                <label>
                    Прикрепить файл
                    <p>(pdf, doc, docx, xls, xlsx, jpg, bmp, png не более 2мб)</p>
                    <div>
                        <input
                            type="file"
                            id="file"
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.bmp,.png"
                            className={styles.file}
                            onChange={handleFileChange}
                            {...register('file', { required: false })}
                        />
                        <div
                            className={classnames(styles.fileBlock, {
                                [styles.errors]: errors.file,
                            })}>
                            <label className={styles.fileInput} htmlFor="file">
                                Выбрать файл
                            </label>
                        </div>
                        <p className={styles.hint}>{errorMsg}</p>
                    </div>
                </label>
            </div>

            <button className={styles.btn} onClick={validateSelectedFile}>
                Отправить
            </button>
        </form>
    );
};

export default QuestionForm;
