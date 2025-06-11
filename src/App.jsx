// import React, { useState } from "react";

// const studentsData = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// const App = () => {
//   const [students, setStudents] = useState(studentsData);
//   const handleChange = (e) => {
//     let textSearch = e.target.value.toLowerCase();
//     if (textSearch) {
//       setStudents(
//         studentsData.filter((item) =>
//           item.name.toLowerCase().includes(textSearch)
//         )
//       );
//     } else {
//       setStudents(studentsData);
//     }
//   };
//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <ol>
//         {students.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default App;
// // Vòng đời của component: Mouunting , Updating, Unmounting
import React from "react";
import AppRouter from "./router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
