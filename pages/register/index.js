import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logodec.jpg";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const initialState = { email: "", password: "", confirmPassword: "" };
  const route = useRouter();

  //state
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);

  return (
    <div>
      <Head>
        <title>تسجيل الدخول</title>
        <meta
          name="description"
          content="Self Education Academy login اكاديمية التعليم الذاتي تسجيل الدخول"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container className="container">
          <Content_login className="row">
            <div className="col-md-6">
              <Info_Section className="info">
                <Col_line />
                <Info_Content>
                  <Logo>
                    <Image src={logo} alt="logo" />
                  </Logo>
                </Info_Content>
              </Info_Section>
            </div>
            <div className="col-md-6 rtl">
              <Title className="mb-4">تسجيل حساب جديد</Title>
              <form action="">
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <Form_Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={input.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">كلمة المرور</label>
                  <Form_Control
                    type="password"
                    name="password"
                    value={input.password}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">تأكيد كلمة المرور</label>
                  <Form_Control
                    type="password"
                    name="password"
                    value={input.password}
                  />
                </div>
                <Inputs_Wrong>{error}</Inputs_Wrong>
                <div>
                  <Forget to="/getpassword">نسيت كلمة المرور</Forget>
                </div>

                <Button_Login className="btn mt-3">تسجيل الدخول</Button_Login>

                <div className="mt-3">
                  لا تمتلك حساباً؟ ,<Link href="/signup">سجّل الآن</Link>
                </div>
              </form>
            </div>
          </Content_login>
        </Container>
      </div>
    </div>
  );
}

// Styled Component

const Container = styled.div``;

const Content_login = styled.div`
  margin: 8%;
  background-color: #fff;
  padding: 4rem 1rem 4rem 1rem;
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 10%);
`;

const Info_Section = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const Col_line = styled.span`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 765px) {
    display: none;
  }
`;

const Info_Content = styled.span`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: 765px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600 !important;
`;

const Form_Control = styled.input`
  display: block;
  width: 80%;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: var(--min-color-) !important;
  border-style: solid !important;
  border-width: 0 0 1px 0 !important;
  padding: 0px !important;
  color: #495057;
  height: auto;
  border-radius: 0;
  background-color: var(--login-socende-color-);
  background-clip: padding-box;

  @media (max-width: 664px) {
    width: 100%;
  }

  :focus {
    color: #495057;
    background-color: var(--login-socende-color-);
    border-color: var(--login-socende-color-);
    outline: none;
    box-shadow: none;
  }
`;

const Inputs_Wrong = styled.div`
  height: 11px;
  color: red;
  font-size: 11px;
  font-weight: 400;
`;

const Forget = styled.a`
  font-size: 12px;
  display: block;
  margin: 10px 0 0 0;
`;

const Button_Login = styled.button`
  border-color: var(--min-color-);
  color: var(--min-color-);

  :hover {
    background-color: var(--min-color-);
    color: #fff;
  }
`;
const Logo = styled.div`
  width: 75%;
`;
