import Link from 'next/link';
import { Shield, Search, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-card/50 backdrop-blur-lg sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <Shield className="h-8 w-8" />
              <span className="font-headline">CyberLearn</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 max-w-md items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for courses..."
                className="pl-10 bg-background/50"
                aria-label="Search all courses"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex" asChild>
              <Link href="/">Courses</Link>
            </Button>
            <Link href="/login">
              <Button>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
