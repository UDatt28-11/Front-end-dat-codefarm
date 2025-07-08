import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerApi } from "../../api/authApi";
import { message } from "antd";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";

// Lấy CSS từ BlogListPage.jsx
const PageWrapper = styled.div`
  // min-height: 100vh;
`;

const Container = styled.div`
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

const RegisterGrid = styled.div`
  display: flex;
  gap: 40px;
  background: #fff;
  border-radius: 18px;
  padding: 40px 24px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 24px 8px;
    gap: 18px;
  }
`;

const RegisterLeft = styled.div`
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

const RegisterRight = styled.div`
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

const RegisterTitle = styled.div`
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
    // transition: border 0.2s, box-shadow 0.2s;
    outline: none;
    &:focus {
      border-color: rgb(0, 0, 0);
    }
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

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await registerApi({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
      message.success("Đăng ký thành công! Vui lòng xác nhận email.");
      setTimeout(() => {
        navigate("/api/auth/login");
      }, 1000);
    } catch (error) {
      message.error(error.response?.data?.message || "Đăng ký thất bại!");
    }
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <BreadcrumbSection>
          <BreadcrumbContainer>
            <div className="text-center">
              <h2 className="fw-bold">Đăng Ký</h2>
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
                    Đăng Ký
                  </li>
                </ol>
              </nav>
            </div>
          </BreadcrumbContainer>
        </BreadcrumbSection>
        <MainContent>
          <Container>
            <RegisterGrid>
              <RegisterLeft>
                <RegisterTitle>Register</RegisterTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <InputGroup>
                    <input
                      type="text"
                      placeholder="Username fullName *"
                      className="form-control"
                      {...register("fullName", {
                        required: "Vui lòng nhập họ tên",
                      })}
                    />
                    {errors?.fullName && (
                      <span className="text-danger">
                        {errors.fullName.message}
                      </span>
                    )}
                  </InputGroup>
                  <InputGroup>
                    <input
                      type="email"
                      placeholder="Email *"
                      className="form-control"
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
                      placeholder="Password *"
                      className="form-control"
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
                  <InputGroup>
                    <input
                      type="password"
                      placeholder="Confirm Password *"
                      className="form-control"
                      {...register("confirmPassword", {
                        required: "Vui lòng nhập lại mật khẩu",
                        validate: (value) =>
                          value === password || "Mật khẩu không khớp",
                      })}
                    />
                    {errors?.confirmPassword && (
                      <span className="text-danger">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </InputGroup>
                  <ButtonBlock>
                    <StyledButton type="submit">REGISTER</StyledButton>
                  </ButtonBlock>
                </form>
              </RegisterLeft>
              <RegisterRight>
                <TextContent>
                  <RegisterTitle>Already Have An Account?</RegisterTitle>
                  <SubText>
                    Welcome back. Sign in to access your personalized
                    experience, saved preferences, and more. We're thrilled to
                    have you with us again!
                  </SubText>
                  <ButtonBlock>
                    <StyledLinkBtn to="/api/auth/login">LOGIN</StyledLinkBtn>
                  </ButtonBlock>
                </TextContent>
              </RegisterRight>
            </RegisterGrid>
          </Container>
        </MainContent>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default RegisterPage;
