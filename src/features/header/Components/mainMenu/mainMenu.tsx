import ExpandMenu from '../expandMenu/ExpandMenu';
import IconButton from '../iconButton/IconButton';
import LogoButton from '../logoButton/LogoButton';
import MenuLink from '../menuLink/MenuLink';

export default function MainMenu() {
  return (
    <nav
      aria-label="main menu"
      className="w-90 h-[calc(100%-3rem)] fixed z-10 top-12 left-0 bg-white border border-secondary-blue flex flex-col overflow-y-auto"
    >
      <div className="flex items-center">
        <div className="hover:bg-secondary-blue transition-all duration-200 pb-2">
          <IconButton />
        </div>
        <div className="px-4 flex place-content-center">
          <LogoButton />
        </div>
      </div>
      <MenuLink
        title="Varaa aika"
        subtitle="Yksityisasiakas, työterveysaisakas, vakuutus"
        link="/ajanvaraus"
      />
      <ExpandMenu name="Henkilöasiakkaat" />
      <ExpandMenu name="Työterveys yrityksille" />
      <ExpandMenu name="Julkiset palvelut" />
      <ExpandMenu name="Yhtiö" />
    </nav>
  );
}
