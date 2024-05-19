'use client';

import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { Props as ApexChartsProps } from 'react-apexcharts';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export const ApexchartsBase: FC<ApexChartsProps> = props => {
  return (
    <>
      <ApexCharts {...props} />
    </>
  );
};
