import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Course } from '@/lib/courses';
import { Lock, Shield, Network } from 'lucide-react';

const icons = {
  Beginner: <Lock className="w-4 h-4 mr-1" />,
  Intermediate: <Network className="w-4 h-4 mr-1" />,
  Advanced: <Shield className="w-4 h-4 mr-1" />,
};

interface CourseCardProps {
  course: Course;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const aiHint = course.id === '1' ? 'cyber security' : course.id === '2' ? 'network servers' : course.id === '3' ? 'source code' : 'digital security';

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} className="block" aria-label={`View course: ${course.title}`}>
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={aiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant="secondary" className="mb-2 flex items-center w-fit">
          {icons[course.level]}
          {course.level}
        </Badge>
        <CardTitle className="text-lg leading-tight mb-2 font-headline">
          <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/courses/${course.id}`} className="w-full" tabIndex={-1}>
          <Button variant="outline" className="w-full">
            View Course
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
