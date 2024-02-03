import { Routes, Route } from 'react-router-dom';
import Personal from './personal/Personal';
import Occupational from './occupational/Occupational';
import PublicService from './publicService/PublicService';
import Company from './company/Company';

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Personal />} />
        <Route path="/tyoterveys/*" element={<Occupational />} />
        <Route path="/julkiset-palvelut/*" element={<PublicService />} />
        <Route path="/yhtio/*" element={<Company />} />
      </Routes>
    </div>
  );
}
