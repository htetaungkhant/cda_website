'use client';

import React from 'react';

import { AuthProvider } from '@/hooks/use-auth';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
