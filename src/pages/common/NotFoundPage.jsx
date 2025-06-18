import React, { useEffect, useState } from "react";

const NotFoundPage = () => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      window.location.href = "/";
      return;
    }
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <img
        src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/152356/Originals/error%20404.png"
        alt="404"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h3
          style={{
            color: "#b71c1c",
            fontSize: 20,
            marginBottom: 8,
            textAlign: "center",
            background: "rgba(255,255,255,0.7)",
            borderRadius: 8,
            padding: "4px 16px",
            display: "inline-block",
          }}
        >
          Bạn sẽ được chuyển về trang chủ sau <b>{count}</b> giây
        </h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
