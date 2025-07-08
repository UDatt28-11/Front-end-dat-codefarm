import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../api/authApi";
import { message } from "antd";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";

// Lấy CSS từ BlogListPage.jsx
const PageWrapper = styled.div`
  // min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 110px;
`;

const BreadcrumbSection = styled.div`
  background: white;
  padding: 2rem 0;
  border-bottom: 1px solid #e2e8f0;
`;

const BreadcrumbContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainContent = styled.div`
  padding: 60px 0;
`;

const LoginGrid = styled.div`
  display: flex;
  gap: 40px;
  border-radius: 18px;
  padding: 0px 24px;
  padding-top: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 24px 8px;
    gap: 18px;
  }
`;

const LoginLeft = styled.div`
  flex: 1;
  border-right: 1.5px solid #e5e7eb;
  padding-right: 80px;
  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1.5px solid #e5e7eb;
    padding-right: 0;
    padding-bottom: 24px;
  }
`;

const LoginRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  @media (max-width: 900px) {
    padding-left: 0;
    padding-top: 18px;
  }
`;

const LoginTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 18px;
`;

const InputGroup = styled.div`
  margin-bottom: 18px;
  input {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1.5px solid #e5e7eb;
    font-size: 1rem;
    width: 100%;
    transition: border 0.2s, box-shadow 0.2s;
    outline: none;
    &:focus {
      border-color: rgb(0, 0, 0);
    }
  }
`;

const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ForgotLink = styled.a`
  color: #222;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: rgb(22, 22, 22);
  }
`;

const ButtonBlock = styled.div`
  margin-top: 12px;
`;

const StyledButton = styled.button`
  min-width: 140px;
  padding: 12px 0;
  background: #222;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 14px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  &:hover {
    background: #111;
    transform: translateY(-2px) scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const TextContent = styled.div`
  width: 100%;
  text-align: center;
`;

const SubText = styled.div`
  margin-top: 12px;
  color: #666;
  font-size: 1.08rem;
`;

const StyledLinkBtn = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  padding: 12px 32px;
  background: #222;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 14px;
  box-shadow: 0 2px 8px 0 #6366f122;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  &:hover {
    background: #111;
    transform: translateY(-2px) scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await loginApi(data);
      console.log(res);
      localStorage.setItem("accessToken", res.data.data.accessToken);
      message.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      message.error(error.response?.data?.message || "Đăng nhập thất bại !");
    }
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <BreadcrumbSection>
          <BreadcrumbContainer>
            <div className="text-center">
              <h2 className="fw-bold">Đăng Nhập</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      Trang Chủ
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Đăng Nhập
                  </li>
                </ol>
              </nav>
            </div>
          </BreadcrumbContainer>
        </BreadcrumbSection>
        <MainContent>
          <Container>
            <LoginGrid>
              <LoginLeft>
                <LoginTitle>Đăng Nhập</LoginTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <InputGroup>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Tên khoản Email *"
                      {...register("email", {
                        required: "Vui lòng nhập email",
                      })}
                    />
                    {errors?.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </InputGroup>
                  <InputGroup>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Mật khẩu *"
                      {...register("password", {
                        required: "Vui lòng nhập mật khẩu",
                      })}
                    />
                    {errors?.password && (
                      <span className="text-danger">
                        {errors.password.message}
                      </span>
                    )}
                  </InputGroup>
                  <RowBetween>
                    <CheckboxGroup>
                      <input
                        type="checkbox"
                        id="remember"
                        style={{ marginRight: 6 }}
                      />
                      <label htmlFor="remember" style={{ cursor: "pointer" }}>
                        Ghi nhớ đăng nhập
                      </label>
                    </CheckboxGroup>
                    <ForgotLink href="#">Quên mật khẩu?</ForgotLink>
                  </RowBetween>
                  <ButtonBlock>
                    <StyledButton type="submit">ĐĂNG NHẬP</StyledButton>
                  </ButtonBlock>
                </form>
              </LoginLeft>
              <LoginRight>
                <TextContent>
                  <LoginTitle>Khách Hàng Mới</LoginTitle>
                  <SubText>
                    Hãy trở thành thành viên mới của chúng tôi! Đăng ký ngay để
                    nhận ưu đãi, khuyến mãi và trải nghiệm cá nhân hóa dành
                    riêng cho bạn.
                  </SubText>
                  <ButtonBlock>
                    <StyledLinkBtn to="/api/auth/register">
                      ĐĂNG KÝ
                    </StyledLinkBtn>
                  </ButtonBlock>
                </TextContent>
              </LoginRight>
            </LoginGrid>
          </Container>
        </MainContent>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default LoginPage;
