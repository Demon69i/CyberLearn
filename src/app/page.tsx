"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { courses } from '@/lib/courses';
import type { Course } from '@/lib/courses';
import CourseCard from '@/components/courses/CourseCard';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <section className="text-center bg-card p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">Master Cyber Security</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your journey to becoming an ethical hacking expert starts here. Explore our comprehensive courses.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for courses like 'Penetration Testing'..."
              className="w-full p-6 pl-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search courses"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-6">All Courses</h2>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course: Course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-lg">
            <p className="text-muted-foreground">No courses found for your search term.</p>
          </div>
        )}
      </section>
    </div>
  );
}
