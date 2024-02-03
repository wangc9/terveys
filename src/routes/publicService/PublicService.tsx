import { Route, Routes } from 'react-router-dom';

export default function PublicService() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Public Service</h1>
            </main>
          }
        />
        <Route path="/palvelut" element={<h1>public service</h1>} />
        <Route path="/kuntalaisille" element={<h1>residents</h1>} />
        <Route path="/ota-yhteytta" element={<h1>Contact us</h1>} />
      </Routes>
    </div>
  );
}
