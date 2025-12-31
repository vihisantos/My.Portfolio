import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    const phoneNumber = "5511986658103"; // Replace with actual number
    const message = "Olá! Gostaria de falar sobre um projeto.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-foreground px-4 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Vamos conversar?
            </span>
        </a>
    );
}
