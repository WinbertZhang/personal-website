import Image from "next/image";

interface ClubCardProps {
  position: string;
  clubName: string;
  dateRange: string;
  skills: string[];
  imageUrl: string;
}

const imageHeight = 200;

const ClubCard = ({
  position,
  clubName,
  dateRange,
  skills,
  imageUrl,
}: ClubCardProps) => (
  <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
    <div
      className="relative w-full bg-white"
      style={{ height: `${imageHeight}px` }}
    >
      <Image
        src={imageUrl}
        alt={position}
        sizes="(max-width: 640px) 100vw, 640px"
        fill
        style={{ objectFit: "contain" }}
        className="bg-coverrounded-t-lg p-6"
      />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{position}</div>
      <p className="text-gray-700 text-base">{clubName}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {dateRange}
      </span>
      <div className="pt-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-blue rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ClubCard;
