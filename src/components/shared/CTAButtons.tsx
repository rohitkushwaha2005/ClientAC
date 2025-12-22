import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  variant?: "default" | "hero" | "compact";
  className?: string;
}

const CTAButtons = ({ variant = "default", className = "" }: CTAButtonsProps) => {
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  const whatsappUrl = "https://web.whatsapp.com/send?phone=917250770449&text=Hi!%20I%20need%20AC/Appliance%20service.";
  const whatsappMobileUrl = "https://api.whatsapp.com/send?phone=917250770449&text=Hi!%20I%20need%20AC/Appliance%20service.";

  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    window.open(isMobile ? whatsappMobileUrl : whatsappUrl, '_blank');
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button
        variant={isHero ? "hero" : "call"}
        size={isHero ? "xl" : isCompact ? "sm" : "default"}
        asChild
        className="group"
      >
        <a href="tel:7250770449">
          <Phone className={`${isHero ? "w-5 h-5" : "w-4 h-4"} group-hover:animate-bounce`} />
          Call Now
        </a>
      </Button>
      <Button
        variant="whatsapp"
        size={isHero ? "xl" : isCompact ? "sm" : "default"}
        onClick={handleWhatsAppClick}
        className="group"
      >
        <MessageCircle className={`${isHero ? "w-5 h-5" : "w-4 h-4"} group-hover:animate-bounce`} />
        WhatsApp Now
      </Button>
    </div>
  );
};

export default CTAButtons;
