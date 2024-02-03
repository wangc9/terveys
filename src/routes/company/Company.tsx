import { Route, Routes } from 'react-router-dom';

export default function Company() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Company</h1>
            </main>
          }
        />
        <Route path="/toihin-terveystaloon" element={<h1>Work for us</h1>} />
        <Route path="/sijoittajat" element={<h1>Investors</h1>} />
        <Route
          path="/laatu-ja-vastuullisuus"
          element={<h1>Quality and responsibility</h1>}
        />
        <Route path="/uutishuone" element={<h1>news</h1>} />
      </Routes>
    </div>
  );
}
