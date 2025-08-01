'use client';

import { useState, useMemo, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getCourseById, getCoursesByIds } from '@/lib/courses';
import type { Course, Lesson } from '@/lib/courses';
import YoutubePlayer from '@/components/courses/YoutubePlayer';
import CourseCard from '@/components/courses/CourseCard';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = useMemo(() => getCourseById(params.courseId), [params.courseId]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    if (course && course.lessons.length > 0) {
      setCurrentLesson(course.lessons[0]);
    }
  }, [course]);

  if (!course) {
    notFound();
  }
  
  const relatedCourses = getCoursesByIds(course.relatedCourses || []);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-1 rounded-xl shadow-lg">
            {currentLesson ? (
              <YoutubePlayer videoId={currentLesson.videoId} />
            ) : (
              <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Select a lesson to begin.</p>
              </div>
            )}
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold font-headline mb-2">{course.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{course.level}</Badge>
              <p className="text-sm text-muted-foreground">By {course.instructor}</p>
            </div>
            <p className="text-muted-foreground">{course.longDescription}</p>
          </div>
        </div>

        <div className="lg:col-span-1 bg-card rounded-lg shadow-md h-fit sticky top-20">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold font-headline">Course Content</h2>
          </div>
          <ScrollArea className="h-[500px]">
            <div className="p-2">
              {course.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => setCurrentLesson(lesson)}
                  className={cn(
                    "w-full text-left p-3 rounded-md flex items-start gap-4 transition-colors",
                    currentLesson?.id === lesson.id
                      ? "bg-primary/20 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <div className="text-primary/80 mt-1">
                    {currentLesson?.id === lesson.id ? (
                      <PlayCircle className="w-5 h-5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground/50" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{`Part ${index + 1}: ${lesson.title}`}</p>
                    <span className="text-xs text-muted-foreground">Video Lesson</span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      
      {relatedCourses.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold font-headline mb-6">Related Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map((relatedCourse: Course) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
