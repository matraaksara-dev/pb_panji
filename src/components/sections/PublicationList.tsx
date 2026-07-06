"use client";

import React, { useState, useMemo } from "react";
import { Search, ExternalLink, Award, FileText, Tag } from "lucide-react";
import { publications, Publication } from "@/content/publications";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PublicationList() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"all" | "latest" | "popular">("all");

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.authors.toLowerCase().includes(search.toLowerCase()) ||
        pub.journal.toLowerCase().includes(search.toLowerCase()) ||
        pub.keywords.some((k) => k.toLowerCase().includes(search.toLowerCase()));

      const matchesType =
        filterType === "all" ||
        (filterType === "latest" && pub.type === "latest") ||
        (filterType === "popular" && pub.type === "popular");

      return matchesSearch && matchesType;
    });
  }, [search, filterType]);

  return (
    <div className="space-y-6">
      {/* Filters & Search Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Toggle Types */}
        <div className="flex bg-muted p-1 rounded-full w-full md:w-auto">
          {(["all", "latest", "popular"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filterType === type
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {type === "all" && "Semua Karya"}
              {type === "latest" && "Baru Terbit"}
              {type === "popular" && "Paling Banyak Dirujuk"}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari judul, penulis, kata kunci..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-full border-border/60 focus-visible:ring-primary w-full text-xs bg-card"
          />
        </div>
      </div>

      {/* List content */}
      <div className="space-y-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-card border border-border/40 hover:border-primary/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col md:flex-row justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                {/* Year and Sinta Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                    {pub.year}
                  </span>
                  {pub.sinta && (
                    <span className="flex items-center gap-1 font-sans text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <Award className="h-3 w-3" />
                      Sinta {pub.sinta}
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted">
                    {pub.type === "latest" ? "Terbaru" : "Terpopuler"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg md:text-xl text-foreground leading-snug hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs text-muted-foreground font-medium">
                  {pub.authors}
                </p>

                {/* Journal info */}
                <p className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-primary shrink-0" />
                  {pub.journal}
                </p>

                {/* Summary */}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pt-1">
                  {pub.summary}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pub.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-muted/50 border border-border/20 px-2 py-0.5 rounded-md"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons (DOI links) */}
              {pub.doi && (
                <div className="flex md:flex-col justify-end items-end shrink-0 pt-2 md:pt-0">
                  <a
                    href={pub.doiUrl || `https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs font-semibold border-primary/20 text-primary hover:bg-primary hover:text-white transition-all w-full flex items-center gap-1.5"
                    >
                      Kunjungi DOI
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-12 text-center bg-card border border-border/30 rounded-2xl">
            <p className="text-muted-foreground text-sm font-medium">
              Tidak ada artikel publikasi ditemukan. Coba kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
