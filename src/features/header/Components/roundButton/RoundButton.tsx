import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  ServiceState,
  changeService,
  selectGroup,
  selectService,
} from '../../headerSlice';

export interface RoundButtonProps {
  name: ServiceState;
  link: string;
}

export default function RoundButton(props: RoundButtonProps) {
  const { name, link } = props;
  let destination: string;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const service = useAppSelector(selectService);
  const group = useAppSelector(selectGroup);
  switch (group) {
    case 'Henkilöasiakkaat':
      destination = `${link}`;
      break;
    case 'Työterveys yrityksille':
      destination = `/tyoterveys${link}`;
      break;
    case 'Julkiset palvelut':
      destination = `/julkiset-palvelut${link}`;
      break;
    case 'Yhtiö':
      destination = `/yhtio${link}`;
      break;
    default:
      destination = '';
  }

  return (
    <button
      className={`rounded-full px-2 py-1 font-medium text-light-blue hover:bg-secondary-blue transition-all duration-200 ${service === name && 'underline'}`}
      type="button"
      onClick={() => {
        dispatch(changeService(name));
        navigate(destination);
      }}
    >
      {name}
    </button>
  );
}
