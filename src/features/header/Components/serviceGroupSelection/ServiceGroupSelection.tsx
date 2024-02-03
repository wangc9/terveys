import SquareButton from '../squareButton/SquareButton';

export default function ServiceGroupSelection() {
  return (
    <nav className="bg-main-grey" aria-label="Service group selection">
      <SquareButton name="Henkilöasiakkaat" link="/" />
      <SquareButton name="Työterveys yrityksille" link="/tyoterveys" />
      <SquareButton name="Julkiset palvelut" link="/julkiset-palvelut" />
      <SquareButton name="Yhtiö" link="yhtio" />
    </nav>
  );
}
