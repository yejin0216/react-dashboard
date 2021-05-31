import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from 'modules/auth';
import logo from 'assets/images/geri-logo.png';
import loginBg from 'assets/images/login/login-bg.png';

function Login() {
  // state : 로그인 사용자 정보
  const [user, updateUser] = useState({ username: '', password: '' });

  // method : 사용자 입력 정보 업데이트
  function changeUserInfo(flag, e) {
    if (flag === 'username') {
      updateUser({ ...user, username: e.target.value });
    } else {
      updateUser({ ...user, password: e.target.value });
    }
  }

  // method : 로그인
  const dispatch = useDispatch();
  function login(e) {
    e.preventDefault();
    dispatch(loginAction(user));
  }

  return (
    <div className="login-body">
      <section className="wrapper-login">
        <div className="login">
          <div className="login-left">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="tit">Login</div>
            <form className="login-form">
              <div className="login-wrap">
                <input
                  type="text"
                  className="input-login id"
                  onChange={e => changeUserInfo('username', e)}
                  placeholder="ID"
                />
              </div>
              <div className="login-wrap">
                <input
                  type="password"
                  className="input-login pd"
                  onChange={e => changeUserInfo('password', e)}
                  placeholder="Password"
                />
              </div>
              <div className="login-wrap s-i">
                <label htmlFor="save-id" className="save-id">
                  <input type="checkbox" id="save-id" />
                  아이디 저장
                </label>
              </div>
              <div className="btn-login-area">
                <button type="submit" onClick={login} className="btn btn-login">
                  LOG IN
                </button>
              </div>
            </form>
          </div>
          <div className="login-right">
            <div className="txt-wrap">
              <div className="t-1">
                Welcome to <span className="bold">DashboardPro</span>
              </div>
              <div className="t-2">Login in to your account</div>
            </div>
            <div className="illust">
              <img src={loginBg} alt="Welcome to DashboardPro" />
            </div>
          </div>
        </div>
      </section>
      <footer className="wrapper-login-footer">
        <div className="find-account">
          회원정보를 잊으셨나요?
          <a href="#none" className="btn-find-id">
            아이디 찾기
          </a>
          <span className="div" />
          <a href="#none" className="btn-find-pd">
            비밀번호 찾기
          </a>
        </div>
        <div className="login-footer">
          <ul>
            <li>
              <a href="#none">이용약관</a>
            </li>
            <li className="div" />
            <li>
              <a href="#none">개인정보처리방침</a>
            </li>
            <li className="div" />
            <li>
              <a href="#none">오픈소스 라이선스</a>
            </li>
            <li className="copy">
              Copyright © 2021 KT Corp. All rights reserved.
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Login;
