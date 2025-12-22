import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:7250770449"
        className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-subtle"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/917250770449?text=Hi! I need AC/Appliance service."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp Now"
      >
        <MessageCircle className="w-6 h-6 text-success-foreground" />
      </a>
    </div>
  );
};

export default FloatingCTA;
