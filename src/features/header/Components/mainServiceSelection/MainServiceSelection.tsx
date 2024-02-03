import { useAppSelector } from '../../../../app/hooks';
import { selectGroup } from '../../headerSlice';
import RoundButton from '../roundButton/RoundButton';

export default function MainServiceSelection() {
  const groupState = useAppSelector(selectGroup);
  return (
    <div className="border-secondary-blue border">
      {groupState === 'Henkilöasiakkaat' && (
        <nav
          className="flex grow bg-inherit py-6"
          aria-label="Service selection in private customer group"
        >
          <div className="px-4">
            <RoundButton name="Palvelut" link="/palvelut" />
          </div>

          <div className="px-4">
            <RoundButton name="Toimipaikat" link="/toimipaikat" />
          </div>

          <div className="px-4">
            <RoundButton name="Asiantuntijat" link="/asiantuntijat" />
          </div>

          <div className="px-4">
            <RoundButton name="Asiakkaalle" link="/asiakkaalle" />
          </div>

          <div className="px-4">
            <RoundButton name="Tietoa terveydestä" link="/tietopaketit" />
          </div>
        </nav>
      )}
      {groupState === 'Työterveys yrityksille' && (
        <nav
          className="flex grow bg-inherit py-6"
          aria-label="Service selection in occupational health group"
        >
          <div className="px-4">
            <RoundButton
              name="Hanki työterveys"
              link="/tee-tyoterveyssopimus"
            />
          </div>

          <div className="px-4">
            <RoundButton name="Työkykyjohtaminen" link="/tyokykyjohtaminen" />
          </div>

          <div className="px-4">
            <RoundButton
              name="Digitaaliset palvelut"
              link="/digitaaliset-palvelut"
            />
          </div>

          <div className="px-4">
            <RoundButton name="Lisää" link="" />
          </div>
        </nav>
      )}
      {groupState === 'Julkiset palvelut' && (
        <nav
          className="flex grow bg-inherit py-6"
          aria-label="Service selection in municipality group"
        >
          <div className="px-4">
            <RoundButton name="Palvelut" link="/palvelut" />
          </div>

          <div className="px-4">
            <RoundButton name="Asukkaalle" link="/kuntalaisille" />
          </div>

          <div className="px-4">
            <RoundButton name="Ota yhteyttä meihin" link="/ota-yhteytta" />
          </div>
        </nav>
      )}
      {groupState === 'Yhtiö' && (
        <nav
          className="flex grow bg-inherit py-6"
          aria-label="Service selection in company group"
        >
          <div className="px-4">
            <RoundButton
              name="Töihin Terveystaloon"
              link="/toihin-terveystaloon"
            />
          </div>

          <div className="px-4">
            <RoundButton name="Sijoittajat" link="/sijoittajat" />
          </div>

          <div className="px-4">
            <RoundButton
              name="Laatu ja vastuullisuus"
              link="/laatu-ja-vastuullisuus"
            />
          </div>

          <div className="px-4">
            <RoundButton name="Uutishuone" link="/uutishuone" />
          </div>

          <div className="px-4">
            <RoundButton name="Lisää" link="" />
          </div>
        </nav>
      )}
    </div>
  );
}
