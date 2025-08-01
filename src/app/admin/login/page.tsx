import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldAlert } from 'lucide-react';

export default function AdminLoginPage() {
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
            <Input id="email" type="email" placeholder="admin@cyberlearn.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Admin Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button variant="destructive" className="w-full">Sign In as Admin</Button>
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
