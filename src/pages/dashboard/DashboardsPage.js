import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { dashboardsAction } from 'modules/dashboards';
import * as type from 'modules/utils/dashboardsType';

import ContentAreaTop from 'components/contents/ContentAreaTop';
import ContentArea from 'components/contents/ContentArea';
import ContentList from 'components/contents/ContentList';
import LargeButton from 'components/buttons/LargeButton';
import CustomModal from 'components/modals/CustomModal';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { IfFulfilled, useAsync } from 'react-async';
import { getCategories } from 'apis/common';

// 버튼 이름
const buttonName = '추가하기';

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
  const [content, setContents] = useState({
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
      setContents(
        list.filter(data => {
          return data.id === selectedId;
        })[0],
      );
    } else {
      setContents({
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
    if (content.id) {
      dispatch(dashboardsAction(type.PUT_DASHBOARD, content));
    } else {
      dispatch(dashboardsAction(type.POST_DASHBOARD, content));
    }
    setModal(false); // 모달 close
  };
  // 모달 입력값 삭제
  const deleteContents = () => {
    dispatch(dashboardsAction(type.DELETE_DASHBOARD, content.id));
    setContents({ id: '', name: '', theme: '' });
    setModal(false); // 모달 close
  };

  // 카테고리 목록 조회
  const categories = useAsync(getCategories);

  return (
    <>
      <ContentAreaTop>
        <LargeButton name={buttonName} action={toggle} type="btn-add-obj" />
      </ContentAreaTop>
      <ContentArea>
        <ContentList list={list} action={toggle} />
      </ContentArea>
      <CustomModal
        isOpen={modal}
        toggle={toggle}
        saveContents={saveContents}
        deleteContents={deleteContents}
        title={buttonName}
      >
        <Form>
          <FormGroup>
            <Label for="theme">대시보드 테마</Label>
            <Input
              type="select"
              name="select"
              id="theme"
              value={content.categoryType}
              onChange={e =>
                setContents({ ...content, categoryType: e.target.value })
              }
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
              value={content.name}
              placeholder="대시보드 이름"
              onChange={e => setContents({ ...content, name: e.target.value })}
            />
          </FormGroup>
        </Form>
      </CustomModal>
    </>
  );
}

export default DashboardsPage;
