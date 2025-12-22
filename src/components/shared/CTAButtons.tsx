import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  variant?: "default" | "hero" | "compact";
  className?: string;
}

const CTAButtons = ({ variant = "default", className = "" }: CTAButtonsProps) => {
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button
        variant={isHero ? "hero" : "call"}
        size={isHero ? "xl" : isCompact ? "sm" : "default"}
        asChild
      >
        <a href="tel:7250770449">
          <Phone className={isHero ? "w-5 h-5" : "w-4 h-4"} />
          Call Now
        </a>
      </Button>
      <Button
        variant="whatsapp"
        size={isHero ? "xl" : isCompact ? "sm" : "default"}
        asChild
      >
        <a
          href="https://wa.me/917250770449?text=Hi! I need AC/Appliance service."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className={isHero ? "w-5 h-5" : "w-4 h-4"} />
          WhatsApp Now
        </a>
      </Button>
    </div>
  );
};

export default CTAButtons;
