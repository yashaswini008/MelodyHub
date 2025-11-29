"use client";

import { ReactNode } from "react";

interface SupabaseProviderProps {
  children: ReactNode;
}

// For the demo, we disable Supabase and just render children.
// This avoids runtime errors when SUPABASE env vars are missing.
const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  return <>{children}</>;
};

export default SupabaseProvider;
