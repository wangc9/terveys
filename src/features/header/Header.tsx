import MainServiceSelection from './Components/mainServiceSelection/MainServiceSelection';
import ServiceGroupSelection from './Components/serviceGroupSelection/ServiceGroupSelection';

export default function Header() {
  return (
    <header>
      <ServiceGroupSelection />
      <MainServiceSelection />
    </header>
  );
}
