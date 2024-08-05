import { type FC } from 'react';
import { Main } from '@/components/IndexPage/Main';
import { How } from '@/components/IndexPage/How';
import { how } from './mocks/how';

export const IndexPage: FC = () => {
    return (
        <>
            <Main />
            <How items={how} />
        </>
    );
};
