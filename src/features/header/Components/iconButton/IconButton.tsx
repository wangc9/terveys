import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { changeMenuStatus, selectMenuStatus } from '../../headerSlice';
import MenuIcon from '../../../../assets/menu.svg';
import CloseIcon from '../../../../assets/close.svg';

export default function IconButton() {
  const menuStatus = useAppSelector(selectMenuStatus);
  const dispatch = useAppDispatch();

  return (
    <button
      className="flex flex-col place-content-center w-20"
      type="button"
      onClick={() => {
        dispatch(changeMenuStatus());
      }}
    >
      {menuStatus === true ? (
        <img
          src={CloseIcon}
          alt="close icon"
          className="pt-2 h-12 self-center"
        />
      ) : (
        <img src={MenuIcon} alt="menu icon" className="py-1 h-12 self-center" />
      )}
      {menuStatus === true ? (
        <p className="text-light-blue self-center">Sulje</p>
      ) : (
        <p className="text-light-blue self-center">Valikko</p>
      )}
    </button>
  );
}
