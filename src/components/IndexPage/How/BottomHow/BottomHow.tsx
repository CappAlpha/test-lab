import { type FC } from 'react';

import s from './BottomHow.module.scss';

export const BottomHow: FC = () => {
    return (
        <div className={s.root}>
            <div className={s.left}>
                <h3 className={s.header}>Круто, ты дошел до третьего блока</h3>
                <p className={s.description}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                    <br /> <br />
                    Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                </p>
            </div>
            <div className={s.right}>
                <img className={s.img} src="/img/how/man.png" alt='man' />
                <img className={s.backImg} src="/img/how/truck.png" alt='truck' />
            </div>
        </div>
    );
};