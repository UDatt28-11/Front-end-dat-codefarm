import React from "react";
import styled from "@emotion/styled";

// CSS chuyển từ BlogListPage.jsx
const PageWrapper = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  padding: 50px 0;
`;

const ContactPage = () => {
  return (
    <PageWrapper>
      <BreadcrumbSection>
        <BreadcrumbContainer>
          <div className="text-center">
            <h2 className="fw-bold">Liên Hệ</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" style={{ textDecoration: "none", color: "#222" }}>
                    Trang Chủ
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Liên Hệ
                </li>
              </ol>
            </nav>
          </div>
        </BreadcrumbContainer>
      </BreadcrumbSection>

      <MainContent>
        <Container>
          <div className="row mb-5">
            {/* Form liên hệ */}
            <div className="col-md-7 mb-4">
              <h4 className="fw-bold">Gửi Tin Nhắn Cho Chúng Tôi</h4>
              <p className="text-muted">
                Sử dụng biểu mẫu bên dưới để liên hệ với đội ngũ của chúng tôi.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Họ và tên *"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email của bạn *"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      placeholder="Nội dung tin nhắn *"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-dark px-4">
                      GỬI TIN NHẮN
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Thông tin liên hệ */}
            <div className="col-md-5">
              <h5 className="fw-bold">Cửa Hàng Của Chúng Tôi</h5>
              <p>Xóm 5 Vạn Kim Mỹ Đức Hà Nội</p>
              <p>
                <strong>Điện thoại:</strong> + 84 33596870
              </p>
              <p>
                <strong>Email:</strong> udat2811@gmail.com
              </p>

              <h5 className="fw-bold mt-4">Giờ Mở Cửa</h5>
              <ul className="list-unstyled">
                <li>Thứ 2 - Thứ 6: 7:30 – 20:00</li>
                <li>Thứ 7: 8:00 – 18:00</li>
                <li>Chủ Nhật: 9:00 – 17:00</li>
              </ul>
            </div>
          </div>
        </Container>
      </MainContent>
      {/* Google Map */}
      <div className="w-100" style={{ height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1024140570785!2d105.7256114751052!3d21.0285877806208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x838936f7130173b5%3A0xad8c5740e51b5222!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gQ8O0bmcgbmdo4buHIHbDoCBHacOhbyBk4bulYyBDb2RlRmFybQ!5e0!3m2!1svi!2s!4v1750927336926!5m2!1svi!2s"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ Google"
        ></iframe>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
