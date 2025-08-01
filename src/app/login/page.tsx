import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md shadow-2xl shadow-primary/10">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Welcome to CyberLearn</CardTitle>
          <CardDescription>Enter your credentials to access your courses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="hacker@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Sign In</Button>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="outline">Google</Button>
            <Button variant="outline">GitHub</Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Don&apos;t have an account?{' '}
              <Link href="#" className="underline hover:text-primary">
                Sign up
              </Link>
            </p>
            <p>
              Are you an administrator?{' '}
              <Link href="/admin/login" className="underline hover:text-primary">
                Login here
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
