"use client";

import { ReactNode } from "react";

interface SupabaseProviderProps {
  children: ReactNode;
}

// For demo: no real Supabase client, just render children.
const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  return <>{children}</>;
};

export default SupabaseProvider;
