'use client';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react';

const Home = () => {
  const { isSignedIn, isLoaded } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    
    if (isLoaded && !isSignedIn) {
      router.push('/sign-up');
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded || !isSignedIn) {
    return <div>Redirecting to signup...</div>;
  }

  return (
    <div>
      Home
      {/* <UserButton /> */}
    </div>
  );
};

export default Home;
