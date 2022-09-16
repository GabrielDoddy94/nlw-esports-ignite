interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt={props.title} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        <strong className="font-bold text-white block mb-1">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
