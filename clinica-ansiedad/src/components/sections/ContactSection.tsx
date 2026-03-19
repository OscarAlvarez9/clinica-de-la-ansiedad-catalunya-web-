"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, MapPin, ShieldCheck, Check, Send, ArrowUpRight, Globe2, Sparkles, ChevronDown } from "lucide-react";

interface FormData {
    nombre: string;
    contacto: string;
    modalidad: string;
    problema: string;
    descripcion: string;
    privacidad: boolean;
}

interface FormErrors {
    [key: string]: string;
}

const MOTIVOS_CONSULTA = [
    { id: "ansiedad", label: "Ansiedad" },
    { id: "depresion", label: "Depresión" },
    { id: "panico", label: "Crisis de Pánico" },
    { id: "celos", label: "Celos" },
    { id: "ludopatia", label: "Ludopatía" },
    { id: "relaciones", label: "Dificultades Relacionales" },
    { id: "otro", label: "Otro motivo" }
];

export default function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        contacto: "",
        modalidad: "online",
        problema: "",
        descripcion: "",
        privacidad: false
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
        if (!formData.contacto.trim()) newErrors.contacto = "Teléfono o email es requerido";
        if (!formData.problema) newErrors.problema = "Selecciona un motivo";
        if (!formData.privacidad) newErrors.privacidad = "Debes aceptar la política";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
        if (formData.contacto && !emailRegex.test(formData.contacto) && !phoneRegex.test(formData.contacto)) {
            newErrors.contacto = "Ingresa un contacto válido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setSubmitStatus("idle");

        // Prepare Template Parameters for EmailJS
        const templateParams = {
            from_name: formData.nombre,
            contact_info: formData.contacto,
            modality: formData.modalidad,
            subject: MOTIVOS_CONSULTA.find(m => m.id === formData.problema)?.label || formData.problema,
            message: formData.descripcion || "Sin descripción adicional."
        };

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.status === 200) {
                setSubmitStatus("success");
                // Reset form
                setFormData({
                    nombre: "",
                    contacto: "",
                    modalidad: "online",
                    problema: "",
                    descripcion: "",
                    privacidad: false
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsLoading(false);
            // Auto hide success message after 5 seconds
            if (submitStatus === "success") {
                setTimeout(() => setSubmitStatus("idle"), 5000);
            }
        }
    };

    const handleSelectOption = (id: string) => {
        setFormData(prev => ({ ...prev, problema: id }));
        setIsSelectOpen(false);
        if (errors.problema) setErrors(prev => ({ ...prev, problema: "" }));
    };

    return (
        <section id="contacto" className="relative bg-[#FAFAFA] py-32 lg:py-48 px-6 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-navy/5 blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20 lg:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-navy/5 text-navy text-sm font-bold mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        Atención personalizada y bilingüe
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-serif text-navy font-bold mb-8 tracking-tight"
                    >
                        Demos el primer paso <span className="text-primary italic font-light">juntos</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-navy/60 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Si la ansiedad está limitando tu vida, estudiaremos tu caso de forma confidencial.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-stretch">
                    
                    {/* Form Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:row-span-2 bg-white p-8 lg:p-16 rounded-[3rem] shadow-[0_32px_80px_-20px_rgba(44,110,138,0.1)] border border-navy/5"
                    >
                        <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <h3 className="text-3xl font-serif text-navy font-bold mb-2">Solicitud de contacto</h3>
                                <p className="text-navy/40 text-sm">Tratamiento estrictamente confidencial</p>
                            </div>
                            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold border border-emerald-100 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                CONFIDENCIAL
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            {/* Inputs Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-navy font-bold text-sm block ml-1">Nombre completo</label>
                                    <input 
                                        type="text"
                                        placeholder="Tu nombre..."
                                        value={formData.nombre}
                                        onChange={(e) => setFormData(p => ({ ...p, nombre: e.target.value }))}
                                        className={`w-full bg-navy/5 h-16 px-6 rounded-2xl outline-none transition-all border-2 text-navy ${errors.nombre ? 'border-red-200' : 'border-transparent focus:border-primary/20 focus:bg-white'}`}
                                    />
                                    {errors.nombre && <p className="text-red-500 text-xs ml-1">{errors.nombre}</p>}
                                </div>
                                <div className="space-y-3">
                                    <label className="text-navy font-bold text-sm block ml-1">Teléfono o Email</label>
                                    <input 
                                        type="text"
                                        placeholder="Email o Teléfono..."
                                        value={formData.contacto}
                                        onChange={(e) => setFormData(p => ({ ...p, contacto: e.target.value }))}
                                        className={`w-full bg-navy/5 h-16 px-6 rounded-2xl outline-none transition-all border-2 text-navy ${errors.contacto ? 'border-red-200' : 'border-transparent focus:border-primary/20 focus:bg-white'}`}
                                    />
                                    {errors.contacto && <p className="text-red-500 text-xs ml-1">{errors.contacto}</p>}
                                </div>
                            </div>

                            {/* Select and Radio Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3 relative">
                                    <label className="text-navy font-bold text-sm block ml-1">¿Qué te preocupa?</label>
                                    <div 
                                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                                        className={`w-full bg-navy/5 h-16 px-6 rounded-2xl flex items-center justify-between cursor-pointer border-2 transition-all ${errors.problema ? 'border-red-200' : 'border-transparent'} ${isSelectOpen ? 'bg-white border-primary/20' : ''}`}
                                    >
                                        <span className={formData.problema ? 'text-navy' : 'text-navy/30'}>
                                            {MOTIVOS_CONSULTA.find(m => m.id === formData.problema)?.label || "Selecciona un motivo"}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-navy/40 transition-transform ${isSelectOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                    
                                    <AnimatePresence>
                                        {isSelectOpen && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute z-50 top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-navy/10 overflow-hidden py-2"
                                            >
                                                {MOTIVOS_CONSULTA.map((motivo) => (
                                                    <div 
                                                        key={motivo.id}
                                                        onClick={() => handleSelectOption(motivo.id)}
                                                        className="px-6 py-4 hover:bg-navy/5 text-navy cursor-pointer transition-colors font-medium"
                                                    >
                                                        {motivo.label}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {errors.problema && <p className="text-red-500 text-xs ml-1">{errors.problema}</p>}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-navy font-bold text-sm block ml-1">Modalidad preferida</label>
                                    <div className="grid grid-cols-2 gap-3 p-2 bg-navy/5 rounded-2xl h-16">
                                        <button 
                                            type="button"
                                            onClick={() => setFormData(p => ({ ...p, modalidad: "online" }))}
                                            className={`rounded-xl text-sm font-bold transition-all ${formData.modalidad === "online" ? 'bg-white text-navy shadow-sm' : 'text-navy/40'}`}
                                        >
                                            Online
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={() => setFormData(p => ({ ...p, modalidad: "presencial" }))}
                                            className={`rounded-xl text-sm font-bold transition-all ${formData.modalidad === "presencial" ? 'bg-white text-navy shadow-sm' : 'text-navy/40'}`}
                                        >
                                            Presencial
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Textarea Row */}
                            <div className="space-y-3">
                                <label className="text-navy font-bold text-sm block ml-1">¿Cómo puedo ayudarte? (opcional)</label>
                                <textarea 
                                    placeholder="Cuéntame brevemente tu caso..."
                                    rows={4}
                                    value={formData.descripcion}
                                    onChange={(e) => setFormData(p => ({ ...p, descripcion: e.target.value }))}
                                    className="w-full bg-navy/5 p-6 rounded-2xl outline-none transition-all border-2 border-transparent focus:border-primary/20 focus:bg-white text-navy resize-none"
                                />
                            </div>

                            {/* Footer Row */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-navy/5">
                                <div className="flex flex-col">
                                    <label className="flex items-start gap-3 cursor-pointer group max-w-sm">
                                        <input 
                                            type="checkbox" 
                                            required
                                            checked={formData.privacidad}
                                            onChange={(e) => {
                                                setFormData(p => ({ ...p, privacidad: e.target.checked }));
                                                if (errors.privacidad) setErrors(prev => ({ ...prev, privacidad: "" }));
                                            }}
                                            className="sr-only"
                                        />
                                        <div className={`mt-1 w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center shrink-0 ${formData.privacidad ? 'bg-primary border-primary' : errors.privacidad ? 'border-red-400 bg-red-50' : 'border-navy/20 group-hover:border-primary/40'}`}>
                                            {formData.privacidad && <Check className="w-4 h-4 text-white" />}
                                        </div>
                                        <span className={`text-xs leading-relaxed italic transition-colors ${errors.privacidad ? 'text-red-600 font-medium' : 'text-navy/50'}`}>
                                            Acepto la Política de Privacidad y el tratamiento de mis datos de forma confidencial.
                                        </span>
                                    </label>
                                    {errors.privacidad && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-[10px] mt-2 ml-8 font-bold uppercase tracking-wider"
                                        >
                                            {errors.privacidad}
                                        </motion.p>
                                    )}
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full md:w-auto h-16 px-12 rounded-full bg-primary text-black font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                                >
                                    {isLoading ? "Enviando..." : "Enviar consulta"}
                                    {!isLoading && <Send className="w-5 h-5" />}
                                </button>
                            </div>
                        </form>

                        <AnimatePresence mode="wait">
                            {submitStatus === "success" && (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4 text-emerald-800"
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase tracking-widest text-xs mb-1">Éxito</p>
                                        <p className="font-medium">Mensaje enviado. Te contactaré en menos de 24h.</p>
                                    </div>
                                </motion.div>
                            )}
                            {submitStatus === "error" && (
                                <motion.div 
                                    key="error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-4 text-red-800"
                                >
                                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                                        <Check className="w-6 h-6 text-white rotate-45" />
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase tracking-widest text-xs mb-1">Error</p>
                                        <p className="font-medium">Ha ocurrido un error al enviar. Por favor, inténtalo de nuevo.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Contact Tiles */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <motion.button 
                            onClick={() => {
                                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-navy/5 shadow-xl shadow-navy/[0.02] group text-left w-full"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <Calendar className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <span className="text-navy/40 text-xs font-black uppercase tracking-widest block mb-1">Reserva tu cita</span>
                            <span className="text-navy text-2xl font-bold block mb-4">Agenda una sesión</span>
                            <div className="flex items-center gap-2 text-primary text-sm font-bold">
                                Ver disponibilidad <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </motion.button>

                        <motion.a 
                            href="mailto:joanramonsoto@gmail.com"
                            whileHover={{ y: -5 }}
                            className="bg-navy p-10 rounded-[2.5rem] text-white relative overflow-hidden group h-full flex flex-col justify-end min-h-[250px]"
                        >
                            <Globe2 className="absolute top-[-10%] right-[-10%] w-48 h-48 opacity-10 rotate-12" />
                            <div className="relative z-10">
                                <Mail className="w-10 h-10 text-primary mb-6" />
                                <span className="text-white/40 text-xs font-black uppercase tracking-widest block mb-1">Email</span>
                                <span className="text-white text-xl font-medium block mb-4 break-all">joanramonsoto@gmail.com</span>
                                <div className="flex items-center gap-2 text-primary text-sm font-bold bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
                                    Enviar email <Send className="w-3 h-3" />
                                </div>
                            </div>
                        </motion.a>
                    </div>

                    {/* Wide Location Tile */}
                    <motion.a 
                        href="https://www.google.com/maps/place/Cl%C3%ADnica+de+la+Ansiedad+Catalunya/@41.5955262,2.5789221,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-white p-8 lg:p-12 rounded-[3rem] border border-navy/5 shadow-xl shadow-navy/[0.02] flex flex-col md:flex-row items-center justify-between gap-8 group"
                    >
                        <div className="flex items-center gap-8">
                            <div className="w-20 h-20 rounded-[1.5rem] bg-navy/5 flex items-center justify-center shrink-0">
                                <MapPin className="w-10 h-10 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-navy/40 text-xs font-black uppercase tracking-widest mb-1">Presencial</h4>
                                <p className="text-navy text-2xl lg:text-3xl font-bold leading-tight">Ronda Dr. Anglès 74, Canet de Mar</p>
                                <p className="text-navy/50 mt-1">Maresme, Barcelona</p>
                            </div>
                        </div>
                        <div className="px-8 py-5 rounded-full bg-navy text-white font-bold text-lg flex items-center gap-4 group-hover:bg-primary transition-colors">
                            Google Maps <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
