import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = isMobile 
      ? "https://api.whatsapp.com/send?phone=917250770449&text=Hi!%20I%20need%20AC/Appliance%20service."
      : "https://web.whatsapp.com/send?phone=917250770449&text=Hi!%20I%20need%20AC/Appliance%20service.";
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:7250770449"
        className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-subtle group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
      </a>
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-slow group"
        aria-label="WhatsApp Now"
      >
        <MessageCircle className="w-6 h-6 text-success-foreground" />
      </button>
    </div>
  );
};

export default FloatingCTA;
