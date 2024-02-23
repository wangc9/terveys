export interface InformationCardProps {
  img: string;
  title: string;
  subtitle: string;
}

export default function InformationCard(
  props: InformationCardProps,
): React.JSX.Element {
  const { img, title, subtitle } = props;

  return (
    <div className="w-480 h-800 flex flex-col">
      <img className="w-full" src={img} alt={title} />
      <div className="px-10 py-8 flex flex-col flex-grow bg-white">
        <span className="font-semibold text-text-black text-3xl pb-6">
          {title}
        </span>
        <span className="text-text-black pt-6">{subtitle}</span>
      </div>
    </div>
  );
}
