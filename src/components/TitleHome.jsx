import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const WhatNewSection = styled.section`
  padding-top: 2.5rem;

  @media (min-width: 768px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeadingTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #222;
`;

const MenuTab = styled.div`
  background-color: #f1f1f1;
  border-radius: 9999px;
  padding: 0.5rem;
  margin-bottom: 2rem;
  width: fit-content;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 9999px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
`;

const TabItem = styled.div`
  position: relative;
  color: ${({ active }) => (active ? "#111" : "#666")};
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Danh sách tab
const tabs = ["top", "t-shirt", "dress", "sets", "shirt"];

const TitleHome = () => {
  const [activeTab, setActiveTab] = useState("top");
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

  useEffect(() => {
    const activeElement = tabRefs.current[activeTab];
    const indicator = indicatorRef.current;

    if (activeElement && indicator) {
      const { offsetLeft, offsetWidth } = activeElement;
      indicator.style.left = `${offsetLeft}px`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  return (
    <WhatNewSection>
      <Container>
        <Heading>
          <HeadingTitle>What's new</HeadingTitle>
          <MenuTab>
            <Menu>
              <Indicator ref={indicatorRef} />
              {tabs.map((tab) => (
                <TabItem
                  key={tab}
                  ref={(el) => (tabRefs.current[tab] = el)}
                  active={tab === activeTab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </TabItem>
              ))}
            </Menu>
          </MenuTab>
        </Heading>
      </Container>
    </WhatNewSection>
  );
};

export default TitleHome;
