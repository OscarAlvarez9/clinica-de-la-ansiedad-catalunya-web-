import OptimizedImage from './OptimizedImage';

export default function ExpertBio() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(44,95,120,0.1)] border border-navy/5">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-cream">
                <OptimizedImage
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop"
                    alt="Joan Ramon Soto - Psicoterapeuta psicoanalítico"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
            </div>
            <div>
                <h3 className="font-serif text-2xl text-navy font-bold mb-1">Joan Ramon Soto</h3>
                <p className="text-gold font-bold tracking-wider text-sm uppercase mb-3">Psicoterapeuta psicoanalítico</p>
                <p className="text-text/80 text-base leading-relaxed">
                    Fundador de la Clínica de la Ansiedad Catalunya en 1993. Más de 30 años de experiencia clínica especializada en el tratamiento profundo de la ansiedad, depresión y malestar emocional mediante el psicoanálisis directo.
                </p>
            </div>
        </div>
    );
}
