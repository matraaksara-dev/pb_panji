"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal harus 2 karakter"),
  institution: z.string().optional(),
  email: z.string().email("Format email tidak valid"),
  purpose: z.enum(["kolaborasi", "speaking", "konsultasi", "media", "lainnya"], {
    message: "Pilih salah satu keperluan",
  }),
  message: z.string().min(10, "Pesan minimal harus 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      institution: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow text-left">
      {status === "success" ? (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto animate-bounce" />
          <h3 className="font-serif font-bold text-xl text-foreground">
            Pesan Terkirim!
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
            Terima kasih telah menghubungi saya. Saya akan meninjau pesan Anda dan segera memberikan tanggapan melalui email.
          </p>
          <Button
            onClick={() => setStatus("idle")}
            className="rounded-full bg-primary hover:bg-primary/95 text-white"
          >
            Kirim Pesan Lain
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-600 rounded-xl p-4 flex gap-3 text-xs leading-relaxed items-start">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Gagal Mengirim Pesan</p>
                <p>Terjadi kesalahan teknis. Silakan kirim pesan langsung melalui email institusional di footer.</p>
              </div>
            </div>
          )}

          {/* Nama */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider">
              Nama Lengkap
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Masukkan nama Anda"
              className="w-full text-xs rounded-xl border border-border/60 bg-background px-4 py-3 focus:outline-none focus:border-primary text-foreground transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-[10px] font-semibold">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider">
              Alamat Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="nama@institusi.com"
              className="w-full text-xs rounded-xl border border-border/60 bg-background px-4 py-3 focus:outline-none focus:border-primary text-foreground transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] font-semibold">{errors.email.message}</p>
            )}
          </div>

          {/* Institusi */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider">
              Institusi / Perusahaan (Opsional)
            </label>
            <input
              {...register("institution")}
              type="text"
              placeholder="Universitas / Lembaga / PT"
              className="w-full text-xs rounded-xl border border-border/60 bg-background px-4 py-3 focus:outline-none focus:border-primary text-foreground transition-all"
            />
          </div>

          {/* Keperluan */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider">
              Keperluan Hubungan
            </label>
            <select
              {...register("purpose")}
              className="w-full text-xs rounded-xl border border-border/60 bg-background px-4 py-3 focus:outline-none focus:border-primary text-foreground transition-all"
            >
              <option value="">Pilih keperluan utama...</option>
              <option value="kolaborasi">Kolaborasi Riset / Summer Course</option>
              <option value="speaking">Undangan Pembicara / Dosen Tamu</option>
              <option value="konsultasi">Konsultasi Agroindustri / UMKM</option>
              <option value="media">Wawancara Media</option>
              <option value="lainnya">Lain-lain</option>
            </select>
            {errors.purpose && (
              <p className="text-red-500 text-[10px] font-semibold">{errors.purpose.message}</p>
            )}
          </div>

          {/* Pesan */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider">
              Pesan Anda
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Jelaskan secara singkat rencana kolaborasi atau pertanyaan Anda..."
              className="w-full text-xs rounded-xl border border-border/60 bg-background px-4 py-3 focus:outline-none focus:border-primary text-foreground transition-all"
            />
            {errors.message && (
              <p className="text-red-500 text-[10px] font-semibold">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl bg-primary hover:bg-primary/95 text-white flex items-center justify-center gap-2 py-3 text-xs font-bold transition-all uppercase tracking-wider"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Kirim Pesan
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
