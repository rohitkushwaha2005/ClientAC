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
    <div className="group relative bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-border/50 hover:border-primary/50 hover:-translate-y-2 hover:scale-[1.02]">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="relative p-6">
        <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-xl">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        {showCTA && <CTAButtons variant="compact" />}
      </div>
    </div>
  );
};

export default ServiceCard;
