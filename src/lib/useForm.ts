'use client';

import { useState, useCallback } from 'react';
import { submitBookSession, submitContactForm } from '@/app/actions';
import type { BookSessionInput } from '@/lib/schemas';

export function useBookSessionForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const submit = useCallback(
    async (data: BookSessionInput) => {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const result = await submitBookSession(data);

      if (result.success) {
        setSuccess(true);
        setError(null);
      } else {
        setError(result.error || result.message);
        setSuccess(false);
      }

      setIsLoading(false);
      return result;
    },
    []
  );

  return { submit, isLoading, error, success };
}

export function useContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const submit = useCallback(
    async (data: { name: string; email: string; message: string }) => {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const result = await submitContactForm(data);

      if (result.success) {
        setSuccess(true);
        setError(null);
      } else {
        setError(result.error || result.message);
        setSuccess(false);
      }

      setIsLoading(false);
      return result;
    },
    []
  );

  return { submit, isLoading, error, success };
}
