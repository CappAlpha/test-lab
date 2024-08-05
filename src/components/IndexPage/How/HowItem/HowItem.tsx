import { type FC, type ReactNode } from 'react';

import s from './HowItem.module.scss';
import { Delivery, Money, Secure, Waiting } from '@/shared/components/Icon';

export type HowTypes = 'waiting' | 'delivery' | 'secure' | 'money';

const icons: Record<HowTypes, ReactNode> = {
    waiting: <Waiting />,
    delivery: <Delivery />,
    secure: <Secure />,
    money: <Money />
};

export interface Props {
    type: HowTypes;
    title: string;
    description: string;
}

export const HowItem: FC<Props> = ({ type, title, description }) => {
    return (
        <li className={s.root}>
            <div className={s.icon}>{icons[type]}</div>
            <div>
                <h6 className={s.header}>{title}</h6>
                <p className={s.description}>{description}</p>
            </div>
        </li>
    );
};