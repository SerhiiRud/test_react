import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from 'pages/CalendarPage';
import { ChoosedMonth } from './ChoosedMonth/ChoosedMonth';

export const App = () => {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarPage />}>
        <Route path="month/:currentDate" element={<ChoosedMonth />} />
        <Route path="day/:currentDate" element={<ChoosedMonth />} />
      </Route>
    </Routes>
  );
};
