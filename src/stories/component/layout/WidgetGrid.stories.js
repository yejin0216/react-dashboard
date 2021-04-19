import React from 'react';
import WidgetGrid from './WidgetGrid';

export default {
  title: 'components|component/layout', // 스토리북에서 보여질 그룹과 경로를 명시
  component: WidgetGrid // 어떤 컴포넌트를 문서화 할지 명시
};

export const widgetgrid = () => <WidgetGrid/>;