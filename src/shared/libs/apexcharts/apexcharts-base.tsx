'use client';

import dynamic from 'next/dynamic';

import type { Props as ApexChartsProps } from 'react-apexcharts';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export const ApexchartsBase = (props: ApexChartsProps) => {
  return (
    <>
      <ApexCharts {...props} />
    </>
  );
};
