import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/index/IndexPage';

export const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<IndexPage />} />
            </Routes>
        </div>
    );
};
