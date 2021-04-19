import React from 'react';
import LineChartWidget from './LineChartWidget';

export default {
  title: 'components|component/widget', // 스토리북에서 보여질 그룹과 경로를 명시
  component: LineChartWidget // 어떤 컴포넌트를 문서화 할지 명시
};

export const linechart = () => <LineChartWidget/>;