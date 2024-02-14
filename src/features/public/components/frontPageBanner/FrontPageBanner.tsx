import BlueMainButton from '../blueMainButton/BlueMainButton';
import TransparentButton from '../transparentButton/TransparentButton';
import { HeadPhone } from '../..';

export interface FrontPageBannerProps {
  title: string;
  subtitle: string;
  button: string;
}

export default function FrontPageBanner(
  props: FrontPageBannerProps,
): React.JSX.Element {
  const { title, subtitle, button } = props;

  return (
    <div className="pt-8 pb-16 flex justify-center">
      <div className="flex flex-col w-fit pr-6">
        <p className="text-4xl text-light-blue font-serif font-bold">{title}</p>
        <p className=" text-main-text font-sans pt-4 text-xl">{subtitle}</p>
      </div>
      <div className="flex flex-col w-fit pl-6">
        <BlueMainButton name={button} link="/ajanvaraus" />
        <div className="pt-2">
          <TransparentButton
            name="Ota yhteys asiakaspalvuluun"
            icon={HeadPhone}
            link="/asiakkaalle"
            arrow
          />
        </div>
      </div>
    </div>
  );
}
