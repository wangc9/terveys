import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { changeGroup, changeService } from '../../headerSlice';

export default function LogoButton() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(changeGroup('Henkilöasiakkaat'));
        dispatch(changeService(undefined));
        navigate('/');
      }}
    >
      <h5 className="text-2xl text-light-blue font-bold font-sans">
        Terveystalo
      </h5>
    </button>
  );
}
