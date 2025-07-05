import React from "react";
import styled from "@emotion/styled";
import {
  FaHeart,
  FaShieldAlt,
  FaRocket,
  FaHandshake,
  FaShare,
} from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";

// Styled Components
const PageWrapper = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Section = styled.section`
  padding: 50px 0;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: rgb(0, 0, 0);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: rgb(19, 19, 19);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
  text-align: center;
`;

const CardText = styled.p`
  color: rgb(20, 21, 21);
  line-height: 1.6;
  text-align: center;
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, rgb(52, 49, 49) 0%, rgb(52, 51, 51) 100%);
  color: white;
  padding: 80px 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div`
  padding: 2rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #f7fafc;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #cbd5e0;
`;

const TeamSection = styled.section`
  background: #f7fafc;
  padding: 80px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  opacity: 0;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover .team-overlay {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TeamImage = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const TeamInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TeamName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
`;

const TeamRole = styled.p`
  color: #718096;
  font-size: 0.9rem;
`;

const TeamDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const TeamSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
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

const AboutPage = () => {
  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <BreadcrumbSection>
        <BreadcrumbContainer>
          <div className="text-center">
            <h2 className="fw-bold">Giới Thiệu</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" style={{ textDecoration: "none", color: "#222" }}>
                    Trang Chủ
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Giới Thiệu
                </li>
              </ol>
            </nav>
          </div>
        </BreadcrumbContainer>
      </BreadcrumbSection>

      {/* About Section */}
      <Section>
        <Container>
          <SectionTitle>Câu Chuyện Của June Chúng Tôi</SectionTitle>
          <SectionSubtitle>
            Từ những ngày đầu thành lập, chúng tôi đã cam kết mang đến những sản
            phẩm thời trang chất lượng cao với giá cả hợp lý cho mọi người.
          </SectionSubtitle>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Us"
                className="img-fluid rounded-3 shadow"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h3 className="mb-4">Sứ Mệnh Của Chúng Tôi</h3>
                <p className="mb-3">
                  Chúng tôi tin rằng thời trang không chỉ là về vẻ ngoài, mà còn
                  là cách thể hiện cá tính và sự tự tin của mỗi người. Với sứ
                  mệnh này, chúng tôi không ngừng nỗ lực để tạo ra những sản
                  phẩm độc đáo, chất lượng cao.
                </p>
                <p className="mb-3">
                  Từ thiết kế đến sản xuất, mỗi bước đều được chúng tôi chăm
                  chút tỉ mỉ để đảm bảo mang đến trải nghiệm tốt nhất cho khách
                  hàng.
                </p>
                <p>
                  Chúng tôi cam kết sử dụng những nguyên liệu bền vững và thân
                  thiện với môi trường, góp phần bảo vệ hành tinh xanh cho thế
                  hệ tương lai.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section style={{ background: "#f7fafc" }}>
        <Container>
          <SectionTitle>Giá Trị Cốt Lõi</SectionTitle>
          <SectionSubtitle>
            Những giá trị định hình nên thương hiệu June và cách chúng tôi phục
            vụ khách hàng
          </SectionSubtitle>

          <Grid>
            <Card>
              <IconWrapper>
                <FaHeart />
              </IconWrapper>
              <CardTitle>Chất Lượng</CardTitle>
              <CardText>
                Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất,
                được kiểm soát nghiêm ngặt trong mọi khâu sản xuất.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaShieldAlt />
              </IconWrapper>
              <CardTitle>Uy Tín</CardTitle>
              <CardText>
                Xây dựng niềm tin với khách hàng thông qua sự minh bạch, trung
                thực trong mọi giao dịch và dịch vụ.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaRocket />
              </IconWrapper>
              <CardTitle>Đổi Mới</CardTitle>
              <CardText>
                Không ngừng sáng tạo và cập nhật xu hướng mới nhất để mang đến
                những sản phẩm hiện đại và độc đáo.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaHandshake />
              </IconWrapper>
              <CardTitle>Dịch Vụ</CardTitle>
              <CardText>
                Đặt khách hàng làm trung tâm, cung cấp dịch vụ chăm sóc khách
                hàng tận tâm và chuyên nghiệp.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <BiTargetLock />
              </IconWrapper>
              <CardTitle>Mục Tiêu</CardTitle>
              <CardText>
                Phấn đấu trở thành thương hiệu thời trang hàng đầu, được yêu
                thích và tin tưởng bởi mọi khách hàng.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <MdOutlineSupportAgent />
              </IconWrapper>
              <CardTitle>Hỗ Trợ</CardTitle>
              <CardText>
                Luôn sẵn sàng hỗ trợ khách hàng 24/7, giải đáp mọi thắc mắc và
                đảm bảo sự hài lòng tuyệt đối.
              </CardText>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <SectionTitle style={{ color: "white", marginBottom: "3rem" }}>
            Thành Tựu Của Chúng Tôi
          </SectionTitle>
          <StatsGrid>
            <StatItem>
              <StatNumber>1k+</StatNumber>
              <StatLabel>Khách Hàng Hài Lòng</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel>Sản Phẩm Độc Đáo</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>2+</StatNumber>
              <StatLabel>Năm Kinh Nghiệm</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>20+</StatNumber>
              <StatLabel>Đối Tác Uy Tín</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Team Section */}
      <TeamSection>
        <Container>
          <SectionTitle>Các Nhãn Hàng Thể Thao Hợp Tác</SectionTitle>
          <SectionSubtitle>
            Chúng tôi tự hào được hợp tác với những thương hiệu thể thao hàng
            đầu thế giới, mang đến những sản phẩm chất lượng cao nhất cho khách
            hàng
          </SectionSubtitle>

          <TeamGrid>
            <TeamCard>
              <TeamImage>
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Nike"
                />
                <TeamOverlay className="team-overlay">
                  <TeamDescription>
                    Thương hiệu thể thao hàng đầu thế giới với hơn 50 năm kinh
                    nghiệm. Nike mang đến những sản phẩm thể thao chất lượng cao
                    và thiết kế độc đáo.
                  </TeamDescription>
                  <TeamSocial>
                    <SocialLink href="#">
                      <FaHeart />
                    </SocialLink>
                    <SocialLink href="#">
                      <FaShare />
                    </SocialLink>
                  </TeamSocial>
                </TeamOverlay>
              </TeamImage>
              <TeamInfo>
                <TeamName>Nike</TeamName>
                <TeamRole>Thương Hiệu Thể Thao Hàng Đầu</TeamRole>
              </TeamInfo>
            </TeamCard>

            <TeamCard>
              <TeamImage>
                <img
                  src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                  alt="Adidas"
                />
                <TeamOverlay className="team-overlay">
                  <TeamDescription>
                    Adidas với hơn 70 năm lịch sử, chuyên về giày thể thao và
                    trang phục thể thao. Thương hiệu được yêu thích bởi vận động
                    viên trên toàn thế giới.
                  </TeamDescription>
                  <TeamSocial>
                    <SocialLink href="#">
                      <FaHeart />
                    </SocialLink>
                    <SocialLink href="#">
                      <FaShare />
                    </SocialLink>
                  </TeamSocial>
                </TeamOverlay>
              </TeamImage>
              <TeamInfo>
                <TeamName>Adidas</TeamName>
                <TeamRole>Thương Hiệu Thể Thao Đức</TeamRole>
              </TeamInfo>
            </TeamCard>

            <TeamCard>
              <TeamImage>
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80"
                  alt="Puma"
                />
                <TeamOverlay className="team-overlay">
                  <TeamDescription>
                    Puma nổi tiếng với thiết kế thời trang và hiệu suất cao.
                    Thương hiệu này kết hợp hoàn hảo giữa thể thao và thời
                    trang.
                  </TeamDescription>
                  <TeamSocial>
                    <SocialLink href="#">
                      <FaHeart />
                    </SocialLink>
                    <SocialLink href="#">
                      <FaShare />
                    </SocialLink>
                  </TeamSocial>
                </TeamOverlay>
              </TeamImage>
              <TeamInfo>
                <TeamName>Puma</TeamName>
                <TeamRole>Thể Thao & Thời Trang</TeamRole>
              </TeamInfo>
            </TeamCard>

            <TeamCard>
              <TeamImage>
                <img
                  src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Under Armour"
                />
                <TeamOverlay className="team-overlay">
                  <TeamDescription>
                    Under Armour chuyên về trang phục thể thao công nghệ cao.
                    Thương hiệu này nổi tiếng với các sản phẩm thoải mái và hiệu
                    suất vượt trội.
                  </TeamDescription>
                  <TeamSocial>
                    <SocialLink href="#">
                      <FaShare />
                    </SocialLink>
                    <SocialLink href="#">
                      <FaHeart />
                    </SocialLink>
                  </TeamSocial>
                </TeamOverlay>
              </TeamImage>
              <TeamInfo>
                <TeamName>Under Armour</TeamName>
                <TeamRole>Công Nghệ Thể Thao</TeamRole>
              </TeamInfo>
            </TeamCard>
          </TeamGrid>
        </Container>
      </TeamSection>
    </PageWrapper>
  );
};

export default AboutPage;
