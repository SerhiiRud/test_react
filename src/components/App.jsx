import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from 'pages/CalendarPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarPage />} />
    </Routes>
  );
};
