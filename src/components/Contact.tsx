import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import constantData from '@/constant/constant.ts'
import emailjs from '@emailjs/browser';
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation


    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
      } else {


        await emailjs.send(
          "service_klxdcdi",
          "template_3kglbhp",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Muhammad Anwar",
          },
          "oeoBWer0W5Jch4Puu"
        );

        toast({
          title: "Success",
          description: "Thank you! I'll get back to you within 24 hours.",
          variant: "destructive",
        });
        // toast.success("Thank you! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please email directly at anwardines786@gmail.com",
        variant: "destructive",
      });
    } finally {
    }

  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's talk</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <Card className="p-6 shadow-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{constantData.personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{constantData.personalInfo.phoneNumber1}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{constantData.personalInfo.address.city} {constantData.personalInfo.address.state}, {constantData.personalInfo.address.country}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary text-white shadow-elegant hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
