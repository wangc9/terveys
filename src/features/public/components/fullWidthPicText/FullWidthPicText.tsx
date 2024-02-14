import WhiteMainButton from '../whiteMainButton/WhiteMainButton';

export interface FullWidthPicTextProps {
  pic: string;
  alt: string;
  title: string;
  subtitle: string;
  button: string;
  link: string;
  reversed: boolean;
  blue: boolean;
}

export default function FullWidthPicText(
  props: FullWidthPicTextProps,
): React.JSX.Element {
  const { pic, alt, title, subtitle, button, link, reversed, blue } = props;
  return (
    <div className="w-full flex flex-col lg:flex-row">
      {reversed ? (
        <div
          className={`flex flex-col px-10 py-12 justify-center ${blue && 'bg-back-blue'}`}
        >
          <p className="text-light-blue font-serif font-bold text-6xl pb-6">
            {title}
          </p>
          <p className="text-main-text font-sans pt-6 pb-12 text-xl">
            {subtitle}
          </p>
          <WhiteMainButton name={button} link={link} />
        </div>
      ) : (
        <img
          src={pic}
          className="w-full lg:w-1/2 lg:max-xl:aspect-square"
          alt={alt}
        />
      )}
      {reversed ? (
        <img
          src={pic}
          className="w-full lg:w-1/2 lg:max-xl:aspect-square"
          alt={alt}
        />
      ) : (
        <div
          className={`flex flex-col px-10 py-12 justify-center ${blue && 'bg-back-blue'}`}
        >
          <p className="text-light-blue font-serif font-bold text-6xl pb-6">
            {title}
          </p>
          <p className="text-main-text font-sans pt-6 pb-12 text-xl">
            {subtitle}
          </p>
          <WhiteMainButton name={button} link={link} />
        </div>
      )}
    </div>
  );
}
