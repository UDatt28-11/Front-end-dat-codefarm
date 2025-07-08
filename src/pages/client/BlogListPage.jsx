import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

// Styled Components
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
  padding: 60px 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BlogCategory = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const BlogContent = styled.div`
  padding: 2rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
  line-height: 1.4;

  &:hover {
    color: #667eea;
  }
`;

const BlogExcerpt = styled.p`
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #a0aec0;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BlogActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const ReadMoreButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: #f7fafc;
  }
`;

const Sidebar = styled.aside`
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const SidebarSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.75rem;
`;

const CategoryLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #718096;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #f7fafc;
    color: #667eea;
  }
`;

const CategoryCount = styled.span`
  background: #e2e8f0;
  color: #4a5568;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const PopularPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PopularPost = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #f7fafc;
  }
`;

const PopularPostImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  flex-shrink: 0;
`;

const PopularPostContent = styled.div`
  flex: 1;
`;

const PopularPostTitle = styled.h6`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #2d3748;
  line-height: 1.4;
`;

const PopularPostDate = styled.p`
  font-size: 0.8rem;
  color: #a0aec0;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
`;

const PageButton = styled.button`
  background: ${(props) =>
    props.active ? "linear-gradient(135deg, #222 0%, #222 100%)" : "white"};
  color: ${(props) => (props.active ? "white" : "#4a5568")};
  border: 1px solid #e2e8f0;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "linear-gradient(135deg, #222 0%, #222 100%)" : "#f7fafc"};
    transform: translateY(-2px);
  }
`;

// Mock data
const blogPosts = [
  {
    id: 1,
    title: "Xu hướng thời trang mùa hè 2024: Những điều bạn cần biết",
    excerpt:
      "Khám phá những xu hướng thời trang nổi bật nhất trong mùa hè 2024, từ màu sắc đến kiểu dáng đang được ưa chuộng...",
    category: "Xu hướng",
    author: "Nguyễn Thị A",
    date: "15/12/2024",
    views: 1250,
    likes: 89,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 2,
    title: "Cách phối đồ với áo sơ mi trắng cho mọi dịp",
    excerpt:
      "Áo sơ mi trắng là item không thể thiếu trong tủ đồ của mọi người. Hãy cùng khám phá cách phối đồ đa dạng...",
    category: "Styling",
    author: "Trần Văn B",
    date: "12/12/2024",
    views: 980,
    likes: 67,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Hướng dẫn chọn size quần áo online chính xác",
    excerpt:
      "Mua sắm online đang trở nên phổ biến, nhưng việc chọn size phù hợp vẫn là thách thức. Bài viết này sẽ giúp bạn...",
    category: "Mẹo hay",
    author: "Lê Thị C",
    date: "10/12/2024",
    views: 2100,
    likes: 156,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Thời trang bền vững: Xu hướng của tương lai",
    excerpt:
      "Với sự quan tâm ngày càng tăng về môi trường, thời trang bền vững đang trở thành xu hướng chính...",
    category: "Bền vững",
    author: "Phạm Văn D",
    date: "08/12/2024",
    views: 890,
    likes: 78,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    title: "Các kiểu tóc phù hợp với từng khuôn mặt",
    excerpt:
      "Kiểu tóc có thể thay đổi hoàn toàn vẻ ngoài của bạn. Hãy tìm hiểu cách chọn kiểu tóc phù hợp với khuôn mặt...",
    category: "Làm đẹp",
    author: "Hoàng Thị E",
    date: "05/12/2024",
    views: 1650,
    likes: 112,
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: 6,
    title: "Phong cách thời trang tối giản cho người bận rộn",
    excerpt:
      "Với cuộc sống bận rộn, phong cách tối giản giúp bạn tiết kiệm thời gian mà vẫn luôn đẹp và tự tin...",
    category: "Phong cách",
    author: "Vũ Văn F",
    date: "03/12/2024",
    views: 1340,
    likes: 95,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const categories = [
  { name: "Xu hướng", count: 15 },
  { name: "Styling", count: 23 },
  { name: "Mẹo hay", count: 18 },
  { name: "Bền vững", count: 8 },
  { name: "Làm đẹp", count: 12 },
  { name: "Phong cách", count: 20 },
];

const popularPosts = [
  { id: 1, title: "10 cách phối đồ với quần jean nam", date: "20/12/2024" },
  { id: 2, title: "Xu hướng màu sắc mùa thu 2024", date: "18/12/2024" },
  { id: 3, title: "Cách chọn giày phù hợp với trang phục", date: "16/12/2024" },
  { id: 4, title: "Thời trang công sở cho phái nữ", date: "14/12/2024" },
];

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <BreadcrumbSection>
        <BreadcrumbContainer>
          <div className="text-center">
            <h2 className="fw-bold">Tin Tức</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" style={{ textDecoration: "none", color: "#222" }}>
                    Trang Chủ
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Tin Tức
                </li>
              </ol>
            </nav>
          </div>
        </BreadcrumbContainer>
      </BreadcrumbSection>

      {/* Main Content */}
      <MainContent>
        <Container>
          <ContentGrid>
            {/* Blog Posts */}
            <div>
              <BlogGrid>
                {currentPosts.map((post) => (
                  <BlogCard key={post.id}>
                    <BlogImage>
                      <img src={post.image} alt={post.title} />
                      <BlogCategory>{post.category}</BlogCategory>
                    </BlogImage>
                    <BlogContent>
                      <BlogTitle>{post.title}</BlogTitle>
                      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                      <BlogMeta>
                        <MetaItem>
                          <FaUser />
                          {post.author}
                        </MetaItem>
                        <MetaItem>
                          <FaCalendarAlt />
                          {post.date}
                        </MetaItem>
                        <MetaItem>
                          <FaEye />
                          {post.views} lượt xem
                        </MetaItem>
                      </BlogMeta>
                      <BlogActions>
                        <ReadMoreButton>Đọc thêm</ReadMoreButton>
                        <ActionButtons>
                          <ActionButton>
                            <FaHeart />
                          </ActionButton>
                          <ActionButton>
                            <FaShare />
                          </ActionButton>
                        </ActionButtons>
                      </BlogActions>
                    </BlogContent>
                  </BlogCard>
                ))}
              </BlogGrid>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PageButton
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Trước
                  </PageButton>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PageButton
                        key={page}
                        active={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PageButton>
                    )
                  )}
                  <PageButton
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Sau
                  </PageButton>
                </Pagination>
              )}
            </div>

            {/* Sidebar */}
            <Sidebar>
              {/* Categories */}
              <SidebarSection>
                <SidebarTitle>
                  <BiCategory />
                  Danh Mục
                </SidebarTitle>
                <CategoryList>
                  {categories.map((category) => (
                    <CategoryItem key={category.name}>
                      <CategoryLink href="#">
                        {category.name}
                        <CategoryCount>{category.count}</CategoryCount>
                      </CategoryLink>
                    </CategoryItem>
                  ))}
                </CategoryList>
              </SidebarSection>

              {/* Popular Posts */}
              <SidebarSection>
                <SidebarTitle>
                  <FaEye />
                  Bài Viết Nổi Bật
                </SidebarTitle>
                <PopularPosts>
                  {popularPosts.map((post) => (
                    <PopularPost key={post.id}>
                      <PopularPostImage />
                      <PopularPostContent>
                        <PopularPostTitle>{post.title}</PopularPostTitle>
                        <PopularPostDate>{post.date}</PopularPostDate>
                      </PopularPostContent>
                    </PopularPost>
                  ))}
                </PopularPosts>
              </SidebarSection>
            </Sidebar>
          </ContentGrid>
        </Container>
      </MainContent>
    </PageWrapper>
  );
};

export default BlogListPage;
