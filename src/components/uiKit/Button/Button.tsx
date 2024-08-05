import cn from 'classnames';
import { type FC, type MouseEvent, type ReactNode } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
    color?: 'blue';
    href?: string;
    onClick?: (event: MouseEvent) => void;
    children?: ReactNode;
    className?: string;
    targetBlank?: boolean;
}

export const Button: FC<ButtonProps> = ({
    color,
    href = '',
    onClick,
    children,
    className,
    targetBlank = false
}) => {
    return href
        ? (
            <a
                className={cn(
                    styles.root,
                    color && styles[`color_${color}`],
                    className
                )}
                href={href}
                target={targetBlank ? '_blank' : ''}
                rel={targetBlank ? 'noreferrer' : ''}
            >
                {children}
            </a>
        ) : (
            <button
                className={cn(
                    styles.root,
                    color && styles[`color_${color}`],
                    className
                )}
                onClick={onClick}
            >
                {children}
            </button>
        );
};
