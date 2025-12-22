import { LucideIcon } from "lucide-react";
import CTAButtons from "./CTAButtons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  showCTA?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, image, showCTA = false }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border/50 hover:-translate-y-1">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        {showCTA && <CTAButtons variant="compact" />}
      </div>
    </div>
  );
};

export default ServiceCard;
