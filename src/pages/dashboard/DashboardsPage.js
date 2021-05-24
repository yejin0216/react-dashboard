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
    dispatch(dashboardsAction(type.GET_DASHBOARDS, 'deleted=N'));
  }, []);

  // 대시보드 목록 세팅
  const list = useSelector(state => {
    return state.dashboards.dashboards.response || [];
  }, shallowEqual);

  // 모달 입력값 수정
  const [item, setItem] = useState({
    id: '',
    name: '',
    categoryType: '',
    connectionType: 'NOCYCLE',
  });

  // 모달 toggle 상태
  const [modal, setModal] = useState(false);

  // 모달 출력
  const toggle = (e, selectedId) => {
    // 수정하기 위해 모달을 열 경우에만 출력된다.
    if (
      !modal &&
      selectedId !== 'undefined' &&
      typeof selectedId !== 'undefined'
    ) {
      setItem(
        list.filter(data => {
          return data.id === selectedId;
        })[0],
      );
    } else {
      setItem({
        id: '',
        name: '',
        categoryType: '',
        connectionType: 'NOCYCLE',
      });
    }
    setModal(!modal);
  };

  // 모달 입력값 저장, 수정
  const saveContents = () => {
    if (item.id) {
      dispatch(dashboardsAction(type.PUT_DASHBOARD, item));
    } else {
      dispatch(dashboardsAction(type.POST_DASHBOARD, item));
    }
    setModal(false); // 모달 close
  };
  // 모달 입력값 삭제
  const deleteContents = () => {
    dispatch(dashboardsAction(type.DELETE_DASHBOARD, item.id));
    setItem({ id: '', name: '', theme: '' });
    setModal(false); // 모달 close
  };

  // 카테고리 목록 조회
  const categories = useAsync(getCategories);

  return (
    <>
      <ContentAreaTop>
        <AddButton title={buttonTitle} onClick={toggle} />
      </ContentAreaTop>
      <ContentArea>
        <ContentList list={list} onClick={toggle} />
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
              value={item.categoryType}
              onChange={e => setItem({ ...item, categoryType: e.target.value })}
            >
              <option>선택</option>
              <IfFulfilled state={categories}>
                {resp =>
                  resp.data.map(theme => (
                    <option key={theme.code} value={theme.code}>
                      {theme.label}
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
              value={item.name}
              placeholder="대시보드 이름"
              onChange={e => setItem({ ...item, name: e.target.value })}
            />
          </FormGroup>
        </Form>
      </CustomModal>
    </>
  );
}

export default DashboardsPage;
