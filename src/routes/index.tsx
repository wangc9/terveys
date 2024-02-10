import { Routes, Route } from 'react-router-dom';
import Personal from './personal/Personal';
import Occupational from './occupational/Occupational';
import PublicService from './publicService/PublicService';
import Company from './company/Company';

const henkilöPalvelut = '/palvelut';
const toimipaikat = '/toimipaikat';
const asiantuntijat = '/asiantuntijat';
const asiakkaalle = '/asiakkaalle';
const asiointiohjeet = '/asiakkaalle/asiointiohjeet';
const hinnasto = '/asiakkaalle/hinnasto';
const digipalvelut = '/asiakkaalle/digipalvelut-ja-etaasiointi';
const lapsenAsiointi = '/asiakkaalle/lapsen-asiointi';
const asiakasedut = '/asiakkaalle/asiakasedut';
const palaute = '/asiakkaalle/palaute';
const varatun = '/asiakkaalle/varatun-ajan-peruminen';
const asiakaspalvelu = '/asiakkaalle/asiakaspalvelu-ja-yhteystiedot';
const tietoa = '/tietopaketit';
const artikkelit = '/artikkelit';
const työnantajat = '/tyoterveys';
const hanki = '/tyoterveys/tee-tyoterveyssopimus';
const työkykyjohtaminen = '/tyoterveys/tyokykyjohtaminen';
const digitaaliset = '/tyoterveys/digitaaliset-palvelut';
const johtamisen = '/tyoterveys/johtamisen-ja-tyoyhteison-kehittaminen';
const ajankohtaista = '/tyoterveys/ajankohtaista';
const julkisetPalvelut = '/julkiset-palvelut/palvelut';
const asukkalle = '/julkiset-palvelut/kuntalaisille';
const yhteyttä = '/julkiset-palvelut/ota-yhteytta';
const töihin = '/yhtio/toihin-terveystaloon';

export {
  henkilöPalvelut,
  toimipaikat,
  asiantuntijat,
  asiakasedut,
  asiakaspalvelu,
  asiakkaalle,
  asiointiohjeet,
  hinnasto,
  digipalvelut,
  lapsenAsiointi,
  palaute,
  varatun,
  tietoa,
  artikkelit,
  työkykyjohtaminen,
  työnantajat,
  hanki,
  digitaaliset,
  johtamisen,
  ajankohtaista,
  julkisetPalvelut,
  asukkalle,
  yhteyttä,
  töihin,
};

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
