import Image from "next/image";

interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  dateRange: string;
  skills: string[];
  imageUrl: string;
}

const imageHeight = 200;

const ExperienceCard = ({
  jobTitle,
  companyName,
  dateRange,
  skills,
  imageUrl,
}: ExperienceCardProps) => (
  <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
    <div
      className="relative w-full bg-white"
      style={{ height: `${imageHeight}px` }}
    >
      <Image
        src={imageUrl}
        alt={jobTitle}
        sizes="(max-width: 640px) 100vw, 640px"
        fill
        style={{ objectFit: "contain" }}
        className="bg-coverrounded-t-lg p-6"
      />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{jobTitle}</div>
      <p className="text-gray-700 text-base">{companyName}</p>
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

export default ExperienceCard;
