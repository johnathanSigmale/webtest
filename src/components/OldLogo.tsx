import { Heart } from "lucide-react";

export const OldLogo = () => {
    return (
        <div className="flex items-center gap-2 mb-6">
            <div className="bg-terracotta-100 p-2 rounded-full">
            <Heart className="h-5 w-5 text-terracotta-500 fill-terracotta-500" />
            </div>
            <span className="text-2xl font-heading font-bold text-charcoal-800">
            Punchway
            </span> 
        </div>
    );
};