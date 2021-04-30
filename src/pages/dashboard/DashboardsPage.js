import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { dashboardsAction } from 'modules/dashboards';
import * as type from 'modules/utils/dashboardsType';

import Content from 'components/contents/Content';
import ContentList from 'components/contents/ContentList';

function DashboardsPage() {
  // 대시보드 목록 조회 요청
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardsAction(type.GET_DASHBOARDS, 'delYn=N'));
  }, [dispatch]);

  // 대시보드 목록 세팅
  const list = useSelector(state => {
    return state.dashboards.dashboards.response || [];
  }, shallowEqual);

  return (
    <Content topButtonTitle="추가하기">
      <ContentList list={list} />
    </Content>
  );
}

export default DashboardsPage;
