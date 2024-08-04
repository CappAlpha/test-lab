import { type FC } from 'react';

import s from './Main.module.scss';
import { Button } from '../../uiKit/Button';

export const Main: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.background}>
        <img  src='../img/main.jpg' alt='Задний фон' />
      </div>
      <h1 className={s.header}>Говорят, никогда не поздно сменить профессию</h1>
      <p className={s.description}>Сделай круто тестовое задание и у тебя получится</p>
      <Button>
        Проще простого!
      </Button>
    </div>
  );
};
