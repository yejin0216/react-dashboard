import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { dashboardsAction } from 'modules/dashboards';
import * as type from 'modules/utils/dashboardsType';

import ContentAreaTop from 'components/contents/ContentAreaTop';
import ContentArea from 'components/contents/ContentArea';
import ContentList from 'components/contents/ContentList';
import AddButton from 'components/buttons/AddButton';
import CustomModal from 'components/modals/CustomModal';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { IfFulfilled, useAsync } from 'react-async';
import { getCategories } from 'apis/common';

// 버튼 이름
const buttonTitle = '추가하기';

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

  // 모달 toggle 상태
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // 모달 입력값 상태 정의
  const [name, setName] = useState('');
  const [cats, setCats] = useState('');

  // 모달 입력값 상태 수정
  const updateName = e => {
    setName(e.target.value);
  };
  const updateCategory = e => {
    setCats(e.target.value);
  };

  // 모달 입력값 저장
  const saveContents = () => {
    dispatch(
      dashboardsAction(type.POST_DASHBOARD, {
        name,
        categoryType: cats,
        connectionType: 'NOCYCLE',
      }),
    );
  };
  // 모달 입력값 삭제
  const deleteContents = () => {
    dispatch(
      dashboardsAction(type.POST_DASHBOARD, {
        name,
        categoryType: cats,
        connectionType: 'NOCYCLE',
      }),
    );
  };

  // 카테고리 목록 조회
  const categories = useAsync(getCategories);

  return (
    <>
      <ContentAreaTop>
        <AddButton title={buttonTitle} onClick={toggle} />
      </ContentAreaTop>
      <ContentArea>
        <ContentList list={list} />
      </ContentArea>
      <CustomModal
        isOpen={modal}
        toggle={toggle}
        saveContents={saveContents}
        deleteContents={deleteContents}
        title={buttonTitle}
      >
        <Form>
          <FormGroup>
            <Label for="theme">대시보드 테마</Label>
            <Input
              type="select"
              name="select"
              id="theme"
              onChange={updateCategory}
            >
              <option>선택</option>
              <IfFulfilled state={categories}>
                {data =>
                  data.data.map(item => (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  ))
                }
              </IfFulfilled>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">대시보드 이름</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="대시보드 이름"
              onChange={updateName}
            />
          </FormGroup>
        </Form>
      </CustomModal>
    </>
  );
}

export default DashboardsPage;
