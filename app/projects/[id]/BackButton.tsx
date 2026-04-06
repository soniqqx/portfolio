'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      style={{
        display: 'inline-block',
        marginBottom: '2rem',
        color: 'var(--accent-color)',
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}
    >
      &larr; Back to Projects
    </a>
  );
}
