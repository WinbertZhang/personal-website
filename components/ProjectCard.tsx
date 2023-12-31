import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const imageHeight = 200;

const ProjectCard = ({
  name,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => (
  <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
    <div
      className="relative w-full bg-white"
      style={{ height: `${imageHeight}px` }}
    >
      <Link href={link} target="_">
        <Image
          src={imageUrl}
          alt={name}
          sizes="(max-width: 640px) 100vw, 640px"
          fill
          style={{ objectFit: "contain" }}
          className="bg-coverrounded-t-lg mt-2"
        />
      </Link>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2"></div>
  </div>
);

export default ProjectCard;
