import MainLayout from '@/layout/main.layout';
import React, { ReactElement } from 'react';

function Events() {
  return <div>Event</div>;
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Events;
