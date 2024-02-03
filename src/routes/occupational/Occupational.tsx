import { Routes, Route } from 'react-router-dom';

export default function Occupational() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Occupational</h1>
            </main>
          }
        />
        <Route
          path="/tee-tyoterveyssopimus"
          element={<h1>Get occupational health</h1>}
        />
        <Route path="/tyokykyjohtaminen" element={<h1>Work management</h1>} />
        <Route
          path="/digitaaliset-palvelut"
          element={<h1>Digital services</h1>}
        />
      </Routes>
    </div>
  );
}
