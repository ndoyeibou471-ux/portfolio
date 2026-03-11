import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="flex items-center justify-center gap-2">
          Créé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> par Ibou Ndoye © 2026
        </p>
        <p className="text-gray-400 mt-2 text-sm">
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
export default Footer;