import SquareButton from '../squareButton/SquareButton';

export default function ServiceGroupSelection() {
  return (
    <nav className="bg-main-grey" aria-label="Service group selection">
      <SquareButton name="Henkilöasiakkaat" />
      <SquareButton name="Työterveys yrityksille" />
      <SquareButton name="Julkiset palvelut" />
      <SquareButton name="Yhtiö" />
    </nav>
  );
}
