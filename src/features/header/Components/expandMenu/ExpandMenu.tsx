import { useState } from 'react';
import MenuGroupSelectButton from '../menuGroupSelectButton/MenuGroupSelectButton';
import ExpandIcon from '../../../../assets/expand.svg';
import ShrinkIcon from '../../../../assets/shrink.svg';
import { GroupState, selectGroup } from '../../headerSlice';
import MenuItemWithIcon from '../menuItemWithIcon/MenuItemWithIcon';
import {
  BoxIcon,
  HeartIcon,
  LocationPin,
  PeopleIcon,
  ServiceIcon,
} from '../../../public';
import { useAppSelector } from '../../../../app/hooks';
import {
  ajankohtaista,
  asiakkaalle,
  asiantuntijat,
  asukkalle,
  digitaaliset,
  hanki,
  henkilöPalvelut,
  johtamisen,
  julkisetPalvelut,
  tietoa,
  toimipaikat,
  työkykyjohtaminen,
  töihin,
  yhteyttä,
} from '../../../../routes';

export interface ExpandMenuProps {
  name: GroupState;
}

export default function ExpandMenu(props: ExpandMenuProps): React.JSX.Element {
  const { name } = props;
  const groupStatus = useAppSelector(selectGroup);
  const [openStatus, setOpenStatus] = useState<boolean>(groupStatus === name);

  return (
    <div className="flex flex-col">
      <div className="relative flex justify-between w-full">
        <MenuGroupSelectButton name={name} />
        <button
          type="button"
          onClick={() => {
            setOpenStatus(!openStatus);
          }}
          className="px-4 hover:bg-secondary-blue transition-all duration-200"
        >
          {openStatus ? (
            <img src={ShrinkIcon} className="h-4" alt={`close ${name}`} />
          ) : (
            <img src={ExpandIcon} className="h-4" alt={`expand ${name}`} />
          )}
        </button>
      </div>
      {openStatus && name === 'Henkilöasiakkaat' && (
        <nav className="flex flex-col">
          <MenuItemWithIcon
            group="Henkilöasiakkaat"
            name="Palvelut"
            icon={ServiceIcon}
            link={henkilöPalvelut}
          />
          <MenuItemWithIcon
            group="Henkilöasiakkaat"
            name="Toimipaikat"
            icon={LocationPin}
            link={toimipaikat}
          />
          <MenuItemWithIcon
            group="Henkilöasiakkaat"
            name="Asiantuntijat"
            icon={PeopleIcon}
            link={asiantuntijat}
          />
          <MenuItemWithIcon
            group="Henkilöasiakkaat"
            name="Asiakkaalle"
            icon={HeartIcon}
            link={asiakkaalle}
          />
          <MenuItemWithIcon
            group="Henkilöasiakkaat"
            name="Tietoa terveydestä"
            icon={BoxIcon}
            link={tietoa}
          />
        </nav>
      )}
      {openStatus && name === 'Työterveys yrityksille' && (
        <nav className="flex flex-col">
          <MenuItemWithIcon
            group="Työterveys yrityksille"
            name="Hanki työterveys"
            icon={undefined}
            link={hanki}
          />
          <MenuItemWithIcon
            group="Työterveys yrityksille"
            name="Työkykyjohtaminen"
            icon={undefined}
            link={työkykyjohtaminen}
          />
          <MenuItemWithIcon
            group="Työterveys yrityksille"
            name="Digitaaliset palvelut"
            icon={undefined}
            link={digitaaliset}
          />
          <MenuItemWithIcon
            group="Työterveys yrityksille"
            name="Johtamisen ja työyhteisön kehittäminen"
            icon={undefined}
            link={johtamisen}
          />
          <MenuItemWithIcon
            group="Työterveys yrityksille"
            name="Ajankohtaista"
            icon={undefined}
            link={ajankohtaista}
          />
        </nav>
      )}
      {openStatus && name === 'Julkiset palvelut' && (
        <nav className="flex flex-col">
          <MenuItemWithIcon
            group="Julkiset palvelut"
            name="Palvelut"
            icon={undefined}
            link={julkisetPalvelut}
          />
          <MenuItemWithIcon
            group="Julkiset palvelut"
            name="Asukkaalle"
            icon={undefined}
            link={asukkalle}
          />
          <MenuItemWithIcon
            group="Julkiset palvelut"
            name="Ota yhteyttä meihin"
            icon={undefined}
            link={yhteyttä}
          />
        </nav>
      )}
      {openStatus && name === 'Yhtiö' && (
        <nav className="flex flex-col">
          <MenuItemWithIcon
            group="Yhtiö"
            name="Töihin Terveystaloon"
            icon={undefined}
            link={töihin}
          />
        </nav>
      )}
    </div>
  );
}
