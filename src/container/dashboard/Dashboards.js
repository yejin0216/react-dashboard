import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboards } from 'action/dashboard';
import store from 'store';

import Header from 'component/layout/Header';
import Content from 'component/layout/Content';
import ContentList from 'component/content/ContentList'

function Dashboards(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboards('delYn=N'));
  }, []);

  const list = useSelector((store) => store.dashboards.list || [{}]);

  return (
    <Content topButtonTitle="추가하기">
      <ContentList list={list} />
    </Content>
  );
}

export default Dashboards;