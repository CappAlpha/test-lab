import { type FC } from 'react';
import { HowItem, Props as Item } from './HowItem'

import s from './How.module.scss';
import { BottomHow } from './BottomHow';

export interface Props {
    items: Item[];
}

export const How: FC<Props> = ({ items }) => {
    return (
        <div className={s.root}>
            <h2 className={s.header}>Как это работает</h2>
            <ul className={s.items}>
                {items.map(({ type, title, description }) => (
                    <HowItem key={type} type={type} title={title} description={description} />
                ))}
            </ul>
            <BottomHow />
        </div>
    );
};
