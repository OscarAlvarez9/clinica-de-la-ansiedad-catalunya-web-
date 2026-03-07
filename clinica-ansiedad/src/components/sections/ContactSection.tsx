"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea, Checkbox, Button, RadioGroup, Radio } from "@heroui/react";
import { Phone, Mail, MapPin, Map, ShieldCheck, Check, AlertCircle, Loader } from "lucide-react";

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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
        if (!formData.contacto.trim()) newErrors.contacto = "Teléfono o email es requerido";
        if (!formData.problema) newErrors.problema = "Selecciona un tipo de problema";
        if (!formData.privacidad) newErrors.privacidad = "Debes aceptar la política de privacidad";

        // Validar formato de email o teléfono
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
        if (!emailRegex.test(formData.contacto) && !phoneRegex.test(formData.contacto)) {
            newErrors.contacto = "Ingresa un email o teléfono válido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
        }));
        // Limpiar error cuando el usuario empieza a escribir
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleProblemaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData(prev => ({ ...prev, problema: value }));
        if (errors.problema) {
            setErrors(prev => ({ ...prev, problema: "" }));
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData(prev => ({ ...prev, modalidad: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setFormData(prev => ({ ...prev, privacidad: checked }));
        if (errors.privacidad) {
            setErrors(prev => ({ ...prev, privacidad: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setSubmitStatus("idle");

        try {
            // Simular envío del formulario (reemplazar con API real)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Aquí iría la llamada a API real
            console.log("Formulario enviado:", formData);

            setSubmitStatus("success");
            setIsSubmitted(true);

            // Limpiar formulario después de 3 segundos
            setTimeout(() => {
                setFormData({
                    nombre: "",
                    contacto: "",
                    modalidad: "online",
                    problema: "",
                    descripcion: "",
                    privacidad: false
                });
                setIsSubmitted(false);
            }, 3000);
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contacto" className="bg-cream py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Info Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-navy font-bold mb-4">
                            Hablemos
                        </h2>
                        <div className="w-16 h-1 bg-gold mb-6" />
                        <p className="text-navy/70 text-lg leading-relaxed max-w-md">
                            Si la ansiedad está limitando tu vida, no dudes en escribirnos o llamarnos. Estudiaremos tu caso de forma confidencial.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/30">
                                <Phone className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="text-navy font-bold mb-1">Teléfono Directo</h4>
                                <a href="tel:+34629794365" className="text-navy/80 hover:text-gold transition-colors text-lg">
                                    +34 629 79 43 65
                                </a>
                                <p className="text-navy/50 text-sm mt-1">Horario de atención: Lunes a Viernes de 9h a 20h.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/30">
                                <Mail className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="text-navy font-bold mb-1">Email Privado</h4>
                                <a href="mailto:joanramonsoto@gmail.com" className="text-navy/80 hover:text-gold transition-colors text-lg" style={{ wordBreak: 'break-all' }}>
                                    joanramonsoto@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/30">
                                <MapPin className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="text-navy font-bold mb-1">Consulta Presencial</h4>
                                <p className="text-navy/80 leading-relaxed max-w-xs">
                                    Ronda Dr. Anglès 74<br />
                                    08360 Canet de Mar<br />
                                    Barcelona (Maresme)
                                </p>
                                <a
                                    href="https://goo.gl/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-gold text-sm font-bold uppercase tracking-wider mt-2 hover:text-gold-light"
                                >
                                    <Map className="w-3 h-3" /> Ver en el mapa
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(44,95,120,0.1)] border border-navy/5 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-bl-full -z-0"></div>

                        <div className="relative z-10 flex items-center gap-2 mb-8 bg-sage/10 text-sage-dark w-fit px-4 py-2 rounded-full text-sm font-semibold border border-sage/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Confidencialidad absoluta</span>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div>
                                <Input
                                    isRequired
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    label="Nombre completo"
                                    labelPlacement="outside"
                                    placeholder="E.g. María García"
                                    variant="bordered"
                                    radius="md"
                                    size="lg"
                                    isInvalid={!!errors.nombre}
                                    color={errors.nombre ? "danger" : "default"}
                                    classNames={{
                                        label: "text-navy font-semibold text-sm pb-1",
                                        inputWrapper: "border-navy/20 hover:border-gold focus-within:!border-gold bg-white shadow-sm transition-colors",
                                        input: "text-navy placeholder:text-navy/30"
                                    }}
                                />
                                {errors.nombre && (
                                    <div className="flex items-center gap-1 mt-2 text-danger text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.nombre}
                                    </div>
                                )}
                            </div>

                            <div>
                                <Input
                                    isRequired
                                    name="contacto"
                                    value={formData.contacto}
                                    onChange={handleChange}
                                    label="Teléfono o Email de contacto"
                                    labelPlacement="outside"
                                    placeholder="Donde prefiera que le contactemos"
                                    variant="bordered"
                                    radius="md"
                                    size="lg"
                                    isInvalid={!!errors.contacto}
                                    color={errors.contacto ? "danger" : "default"}
                                    classNames={{
                                        label: "text-navy font-semibold text-sm pb-1",
                                        inputWrapper: "border-navy/20 hover:border-gold focus-within:!border-gold bg-white shadow-sm transition-colors",
                                        input: "text-navy placeholder:text-navy/30"
                                    }}
                                />
                                {errors.contacto && (
                                    <div className="flex items-center gap-1 mt-2 text-danger text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.contacto}
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="text-navy font-semibold text-sm pb-1">Tipo de problema</div>
                                <select
                                    name="problema"
                                    value={formData.problema}
                                    onChange={handleProblemaChange}
                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors font-medium text-navy bg-white shadow-sm ${
                                        errors.problema
                                            ? "border-red-500"
                                            : "border-navy/20 hover:border-gold focus:border-gold"
                                    }`}
                                >
                                    <option value="">Selecciona el tipo de problema</option>
                                    <option value="ansiedad">Ansiedad</option>
                                    <option value="depresion">Depresión</option>
                                    <option value="panico">Crisis de Pánico</option>
                                    <option value="relaciones">Problemas Relacionales</option>
                                    <option value="otro">Otro</option>
                                </select>
                                {errors.problema && (
                                    <div className="flex items-center gap-1 mt-2 text-danger text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.problema}
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="text-navy font-semibold text-sm pb-3">Modalidad preferida</div>
                                <RadioGroup
                                    value={formData.modalidad}
                                    onChange={handleRadioChange}
                                    orientation="horizontal"
                                    classNames={{
                                        wrapper: "gap-4"
                                    }}
                                >
                                    <Radio
                                        value="presencial"
                                        classNames={{
                                            base: "m-0 inline-flex items-center justify-between flex-row-reverse w-full max-w-[200px] cursor-pointer rounded-lg border-2 border-transparent bg-navy/5 p-4 hover:bg-navy/10 data-[selected=true]:border-gold shadow-sm",
                                            labelWrapper: "ml-0",
                                            label: "text-navy font-medium text-sm",
                                            control: "bg-white border-navy/30 text-gold"
                                        }}
                                    >
                                        Presencial (Canet)
                                    </Radio>
                                    <Radio
                                        value="online"
                                        classNames={{
                                            base: "m-0 inline-flex items-center justify-between flex-row-reverse w-full max-w-[200px] cursor-pointer rounded-lg border-2 border-transparent bg-navy/5 p-4 hover:bg-navy/10 data-[selected=true]:border-gold shadow-sm",
                                            labelWrapper: "ml-0",
                                            label: "text-navy font-medium text-sm",
                                            control: "bg-white border-navy/30 text-gold"
                                        }}
                                    >
                                        Online (Videollamada)
                                    </Radio>
                                </RadioGroup>
                            </div>

                            <div>
                                <Textarea
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    label="Breve descripción del motivo de consulta (opcional)"
                                    labelPlacement="outside"
                                    placeholder="Si lo desea, puede explicar brevemente su situación general."
                                    variant="bordered"
                                    radius="md"
                                    minRows={4}
                                    classNames={{
                                        label: "text-navy font-semibold text-sm pb-1",
                                        inputWrapper: "border-navy/20 hover:border-gold focus-within:!border-gold bg-white shadow-sm transition-colors",
                                        input: "text-navy placeholder:text-navy/30"
                                    }}
                                />
                            </div>

                            <div>
                                <Checkbox
                                    isRequired
                                    checked={formData.privacidad}
                                    onChange={handleCheckboxChange}
                                    radius="sm"
                                    color="warning"
                                    classNames={{
                                        base: "items-start",
                                        label: "text-xs text-navy/70 leading-relaxed ml-1",
                                        wrapper: `mt-1 before:border-navy/30 ${errors.privacidad ? "before:border-danger" : ""}`
                                    }}
                                >
                                    He leído y acepto la Política de Privacidad y el tratamiento confidencial de mis datos.
                                </Checkbox>
                                {errors.privacidad && (
                                    <div className="flex items-center gap-1 mt-2 text-danger text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.privacidad}
                                    </div>
                                )}
                            </div>

                            <Button
                                type="submit"
                                isLoading={isLoading}
                                isDisabled={isLoading}
                                size="lg"
                                className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-7 text-lg shadow-xl shadow-navy/20 hover:shadow-navy/40 transition-all duration-300 transform hover:-translate-y-1 rounded-xl mt-4"
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        Enviar solicitud protegida
                                    </div>
                                )}
                            </Button>

                            {submitStatus === "success" && isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-sage/20 text-sage-dark border border-sage/30 rounded-xl flex items-start gap-3 font-medium shadow-sm mt-4"
                                >
                                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">¡Mensaje enviado correctamente!</p>
                                        <p className="text-sm mt-1">Le contactaremos en breve para iniciar su proceso terapéutico.</p>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-start gap-3 font-medium shadow-sm mt-4"
                                >
                                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Error al enviar el mensaje</p>
                                        <p className="text-sm mt-1">Por favor, intenta de nuevo o contacta directamente por teléfono.</p>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
