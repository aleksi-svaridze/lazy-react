interface Iprops {
  thumbnailUrl: string;
  title: string;
}

function ShowData({ thumbnailUrl, title }: Iprops) {
  return (
    <div className="border-b mb-4 flex">
      <img src={thumbnailUrl} className="w-28 h-28" />
      <p>{title}</p>
    </div>
  );
}

export default ShowData;
