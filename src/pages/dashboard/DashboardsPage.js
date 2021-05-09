import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { dashboardsAction } from 'modules/dashboards';
import * as type from 'modules/utils/dashboardsType';

import ContentAreaTop from 'components/contents/ContentAreaTop';
import ContentArea from 'components/contents/ContentArea';
import ContentList from 'components/contents/ContentList';
import AddButton from 'components/buttons/AddButton';
import ModalContents from 'components/modals/ModalContents';
import { Modal, Form, FormGroup, Label, Input } from 'reactstrap';
import { IfFulfilled, useAsync } from 'react-async';
import { getCategories } from 'apis/common';

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

  // 모달
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // 모달 외부 닫기 버튼
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '670px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  // 카테고리 목록 조회
  const categories = useAsync(getCategories);

  return (
    <>
      <ContentAreaTop>
        <AddButton title="추가하기" onClick={toggle} />
      </ContentAreaTop>
      <ContentArea>
        <ContentList list={list} />
      </ContentArea>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop="static"
        zIndex="310"
        className="custom-modal"
        contentClassName="modal-wrapper"
        external={externalCloseBtn}
      >
        <ModalContents>
          <Form>
            <FormGroup>
              <Label for="theme">대시보드 테마</Label>
              <Input type="select" name="select" id="theme">
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
              />
            </FormGroup>
          </Form>
        </ModalContents>
      </Modal>
    </>
  );
}

export default DashboardsPage;
