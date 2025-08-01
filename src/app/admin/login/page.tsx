'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldAlert } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = () => {
    // In a real application, you would make an API call to authenticate the user.
    // For this prototype, we are using hardcoded credentials.
    if (email === 'imtiazmahmudemon7@gmail.com' && password === 'Imtiaz1122@#&') {
      // In a real app, you would set a session cookie or token here.
      router.push('/admin/dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Please check your admin email and password and try again.",
        variant: "destructive",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md shadow-2xl shadow-destructive/20">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <ShieldAlert className="w-12 h-12 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-headline">Admin Access</CardTitle>
          <CardDescription>Enter your administrator credentials to manage courses.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Admin Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="admin@cyberlearn.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Admin Password</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button variant="destructive" className="w-full" onClick={handleLogin}>Sign In as Admin</Button>
          <p className="text-center text-sm text-muted-foreground">
            Not an admin?{' '}
            <Link href="/login" className="underline hover:text-primary">
              Return to user login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}