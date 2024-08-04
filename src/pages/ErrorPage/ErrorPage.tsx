import s from './ErrorPage.module.scss';
import { type FC } from 'react';

export const ErrorPage: FC = () => {
    const reloadPage = (): void => {
        location.reload();
    };

    return (
        <div className={s.errorPage}>
            <p>Произошла непредвиденная ошибка</p>
            <button onClick={reloadPage}>Обновить страницу</button>
        </div>
    );
};
