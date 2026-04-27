import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "lea.santosfrancopro@gmail.com",
        href: "mailto:lea.santosfrancopro@gmail.com"
    },
    {
        icon: Phone,
        label: "Tél",
        value: "+33 6 18 26 09 67",
        href: "tel:+33618260967"
    },
    {
        icon: MapPin,
        label: "Localisation",
        value: "Mérignac, France",
        href: "https://www.google.com/maps/place/Mérignac"
    }
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        try {
            const response = await fetch("https://formsubmit.co/ajax/lea.santosfrancopro@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitStatus({
                    type: "success",
                    message: "Message bien délivré, je reviens vers vous plus tard.",
                });
                setFormData({name: "", email: "", message: ""});
            } else {
                throw new Error(result.message || "Envoi échoué");
            }
        } catch (error) {
            console.error("FormSubmit error:", error);
            setSubmitStatus({
                type: "error",
                message: "Une erreur s'est produite. Veuillez réessayer.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 ">
          {/*Section header*/}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-base font-medium tracking-wider uppercase">
              Une idée,
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200">
              un projet,{" "}
              <span className="font-serif italic font-normal text-white">
                écrivons la suite ensemble !
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Vous avez un projet ou une opportunité à me proposer ? Envoyez-moi un message et je vous recontacterai dans les plus brefs délais.
            </p>
          </div>
          {/*Formulaire*/}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 "
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Votre nom.."
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all
                                            focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all
                                            focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 "
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Votre message.."
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border transition-all
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none
                                resize-none"
                  />
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-5 h-5"/>
                    </>
                  )}
                </Button>
                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl
                      ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <p className="text-sm ">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
            {/*Info contact*/}
            <div className="glass rounded-3xl p-8 animate-fade-in animation-delay-400">
              <h3 className="text-xl font-semibold mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    href={item.href}
                    key={i}
                    className="flex items-center gap-4 rounded-xl hover:bg-surface transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
