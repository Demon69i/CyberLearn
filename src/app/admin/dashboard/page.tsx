'use client';

import { useState } from 'react';
import { courses as initialCourses } from '@/lib/courses';
import type { Course, Lesson } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PlusCircle, Trash2, Edit, Save, XCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboardPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const { toast } = useToast();

  const handleAddCourse = () => {
    const newCourse: Course = {
      id: `${Date.now()}`,
      title: 'New Course Title',
      description: 'A short description for the new course.',
      longDescription: 'A longer, more detailed description for the course.',
      thumbnail: 'https://placehold.co/600x400',
      instructor: 'New Instructor',
      level: 'Beginner',
      lessons: [],
    };
    setEditingCourse(newCourse);
  };

  const handleDeleteCourse = (courseId: string) => {
    setCourses(courses.filter(c => c.id !== courseId));
    toast({
        title: "Course Deleted",
        description: "The course has been successfully removed.",
    });
  };

  const handleSaveCourse = () => {
    if (!editingCourse) return;
    
    const index = courses.findIndex(c => c.id === editingCourse.id);
    if (index > -1) {
      const updatedCourses = [...courses];
      updatedCourses[index] = editingCourse;
      setCourses(updatedCourses);
    } else {
      setCourses([editingCourse, ...courses]);
    }
    setEditingCourse(null);
    toast({
        title: "Course Saved",
        description: "Your changes have been saved successfully.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingCourse) return;
    const { name, value } = e.target;
    setEditingCourse({ ...editingCourse, [name]: value });
  };
  
  const handleLessonChange = (lessonIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingCourse) return;
    const { name, value } = e.target;
    const updatedLessons = [...editingCourse.lessons];
    updatedLessons[lessonIndex] = { ...updatedLessons[lessonIndex], [name]: value };
    setEditingCourse({ ...editingCourse, lessons: updatedLessons });
  };

  const handleAddLesson = () => {
    if (!editingCourse) return;
    const newLesson: Lesson = { id: `${Date.now()}`, title: 'New Lesson', videoId: '' };
    setEditingCourse({ ...editingCourse, lessons: [...editingCourse.lessons, newLesson]});
  };

  const handleRemoveLesson = (lessonIndex: number) => {
    if (!editingCourse) return;
    const updatedLessons = editingCourse.lessons.filter((_, i) => i !== lessonIndex);
    setEditingCourse({ ...editingCourse, lessons: updatedLessons });
  };


  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Manage Courses</h1>
        <Button onClick={handleAddCourse}>
          <PlusCircle className="mr-2" />
          Add New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{course.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setEditingCourse(JSON.parse(JSON.stringify(course)))}>
                <Edit />
                Edit
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <Trash2 />
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                  </DialogHeader>
                  <p>This action will permanently delete the course "{course.title}".</p>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button variant="destructive" onClick={() => handleDeleteCourse(course.id)}>
                        Confirm Delete
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {editingCourse && (
         <Dialog open={!!editingCourse} onOpenChange={(isOpen) => !isOpen && setEditingCourse(null)}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{courses.some(c => c.id === editingCourse.id) ? 'Edit Course' : 'Add New Course'}</DialogTitle>
              </DialogHeader>
              <div className="max-h-[70vh] overflow-y-auto p-4 space-y-4">
                <Input name="title" value={editingCourse.title} onChange={handleInputChange} placeholder="Course Title" className="text-lg font-bold" />
                <Textarea name="description" value={editingCourse.description} onChange={handleInputChange} placeholder="Short Description" />
                <Textarea name="longDescription" value={editingCourse.longDescription} onChange={handleInputChange} placeholder="Long Description" rows={5}/>
                <Input name="instructor" value={editingCourse.instructor} onChange={handleInputChange} placeholder="Instructor Name" />
                <select name="level" value={editingCourse.level} onChange={handleInputChange} className="w-full p-2 border rounded-md bg-card">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                
                <h3 className="font-bold text-xl mt-4 border-t pt-4">Lessons</h3>
                <div className="space-y-3">
                  {editingCourse.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border rounded-md">
                      <Input name="title" value={lesson.title} onChange={(e) => handleLessonChange(index, e)} placeholder="Lesson Title" className="flex-grow"/>
                      <Input name="videoId" value={lesson.videoId} onChange={(e) => handleLessonChange(index, e)} placeholder="YouTube Video ID" />
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveLesson(index)}>
                        <XCircle className="text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
                 <Button variant="outline" onClick={handleAddLesson} className="mt-2">
                    <PlusCircle className="mr-2" /> Add Lesson
                </Button>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setEditingCourse(null)}>Cancel</Button>
                <Button onClick={handleSaveCourse}><Save className="mr-2" />Save Course</Button>
              </DialogFooter>
            </DialogContent>
         </Dialog>
      )}

    </div>
  );
}