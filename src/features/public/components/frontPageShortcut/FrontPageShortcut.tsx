import {
  RightShortArrow,
  ServiceIcon,
  baby,
  euro,
  person,
  redCross,
} from '../..';
import TransparentButton from '../transparentButton/TransparentButton';

export default function FrontPageShortcut(): React.JSX.Element {
  return (
    <div className="flex flex-col pb-8 self-center w-4/6">
      <p className="text-xl text-main-text font-medium pb-4">Oikopolut</p>
      <nav className="flex flex-row lg:flex-col 2xl:flex-row justify-between 2xl:justify-start py-4 w-full">
        <div className="flex flex-col lg:flex-row">
          <TransparentButton
            icon={redCross}
            name="Tapaturmapäivystys"
            link="/palvelut"
            arrow={false}
          />
          <TransparentButton
            icon={baby}
            name="Lasten Terveystalo"
            link="/lasten-paivystys"
            arrow={false}
          />
          <TransparentButton
            icon={ServiceIcon}
            name="Gynekologi"
            link="/palvelut"
            arrow={false}
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <TransparentButton
            icon={person}
            name="Töihin Terveystaloon"
            link="/yhtio"
            arrow={false}
          />
          <TransparentButton
            icon={euro}
            name="Hinnasto"
            link="/asiakkaalle/hinnasto"
            arrow={false}
          />
          <TransparentButton
            icon={RightShortArrow}
            name="Kaikki palvelut"
            link="/palvelut"
            arrow={false}
          />
        </div>
      </nav>
    </div>
  );
}
