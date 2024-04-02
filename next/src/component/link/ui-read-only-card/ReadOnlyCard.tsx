import { useState } from "react";
import Card from "component/sharing/ui-card/Card";
import CardContent from "component/sharing/ui-card-content/CardContent";
import CardImage from "component/sharing/ui-card-image/CardImage";

interface ReadOnlyCardProps {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string | number;
  description: string;
  createdAt: string | number;
}
export const ReadOnlyCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: ReadOnlyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
};
