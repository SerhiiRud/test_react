import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Loader } from 'components/Loader/Loader';

export const CalendarPage = () => {
  return (
    <>
      <CalendarToolbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
