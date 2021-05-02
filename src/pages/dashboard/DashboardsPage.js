import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { dashboardsAction } from 'modules/dashboards';
import * as type from 'modules/utils/dashboardsType';

import ContentAreaTop from 'components/contents/ContentAreaTop';
import ContentArea from 'components/contents/ContentArea';
import ContentList from 'components/contents/ContentList';
import AddButton from 'components/buttons/AddButton';

function DashboardsPage() {
  // 대시보드 목록 조회 요청
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardsAction(type.GET_DASHBOARDS, 'delYn=N'));
  }, []);

  // 대시보드 목록 세팅
  const list = useSelector(state => {
    return state.dashboards.dashboards.response || [];
  }, shallowEqual);

  return (
    <>
      <ContentAreaTop>
        <AddButton title="추가하기" />
      </ContentAreaTop>
      <ContentArea>
        <ContentList list={list} />
      </ContentArea>
    </>
  );
}

export default DashboardsPage;
