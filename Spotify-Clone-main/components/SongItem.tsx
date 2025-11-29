import React from "react";

interface SongItemProps {
  data: any;              // the full song object
  onClick?: () => void;   // called when the item is clicked
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  // Try to read title/artist from data, with fallbacks
  const title = data?.title ?? "Song";
  const artist = data?.artist ?? "";

  return (
    <div onClick={onClick} className="p-2 cursor-pointer">
      <div className="font-semibold">{title}</div>
      {artist && (
        <div className="text-sm text-neutral-400">
          {artist}
        </div>
      )}
    </div>
  );
};

export default SongItem;
