import { Route, Routes } from 'react-router-dom';
import placeholder from '../../placeholders.jpg';

export default function Personal() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Personal</h1>
            </main>
          }
        />
        <Route
          path="/palvelut"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
        <Route
          path="/toimipaikat"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
        <Route
          path="/asiantuntijat"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
        <Route
          path="/asiakkaalle"
          element={
            <img src={placeholder} width="100%" alt="Page under construction" />
          }
        />
        <Route
          path="/tietopaketit"
          element={
            <img
              src={placeholder}
              height="100%"
              alt="Page under construction"
            />
          }
        />
      </Routes>
    </div>
  );
}
