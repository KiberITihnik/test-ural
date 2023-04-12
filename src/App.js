import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/routes';

import styles from './scss/App.module.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import QuestionForm from './pages/QuestionForm';
import Map from './pages/Map';

function App() {
    return (
        <div className={styles.wrapper}>
            <Router>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<QuestionCard />} />
                        <Route path={ROUTES.FORM} element={<QuestionForm />} />
                        <Route path={ROUTES.MAP} element={<Map />} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
