import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';
import { resetAlertsAction } from 'modules/alerts';

function GlobalAlert() {
  // color, message, visible 반환
  const alert = useSelector(state => state.alert, shallowEqual);

  // 모달 닫기
  const dispatch = useDispatch();
  const onDismiss = () => {
    dispatch(resetAlertsAction());
  };
  setTimeout(() => dispatch(resetAlertsAction()), 3000);

  return (
    <Alert color={alert.color} isOpen={alert.visible} toggle={onDismiss}>
      {alert.message}
    </Alert>
  );
}

export default GlobalAlert;
