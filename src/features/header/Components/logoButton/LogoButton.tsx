import { useNavigate } from 'react-router-dom';

export default function LogoButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate('/');
      }}
    >
      <h5 className="text-2xl text-light-blue font-bold font-sans">
        Terveystalo
      </h5>
    </button>
  );
}
