import React, { useState } from 'react';
import { Trash, Edit, Eye, Plus } from 'lucide-react';

const Courses = () => {
    const [deleteModel, setDeleteModel] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const deleteCourse = (courseId) => {
        setSelectedCourse(courseId);
        setDeleteModel(true);
    };

    const confirmDelete = () => {
        // Perform deletion logic here
        console.log("Deleting course with ID:", selectedCourse);
        setDeleteModel(false);
        setSelectedCourse(null);
    };

    // Sample data for courses (replace with actual data from your backend)
    const courses = [
        {
            id: 1,
            name: "Introduction to Programming",
            instructor: "John Doe",
            duration: "8 weeks",
            price: "$99",
            category: "Computer Science",
            enrollmentStatus: "Open",
            startDate: "2024-04-01",
            endDate: "2024-05-31",
            image: "intro-to-programming.jpg"
        },
        // Add more courses as needed
    ];

    return (
        <div className='relative min-h-screen bg-gray-100'>
            <div className='w-full max-w-6xl mx-auto pt-8'> {/* Increased max-w to max-w-6xl */}
                <div className="flex justify-end mb-4">
                    <button className='bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-green-600 focus:outline-none focus:bg-green-600'>
                        <Plus size={20} />
                        <span className="ml-2">Create Course</span>
                    </button>
                </div>
                <table className='w-full bg-white shadow rounded-md'>
                    <thead className='bg-gray-200 text-gray-700'>
                        <tr>
                            <th className='px-4 py-3'>Course ID</th>
                            <th className='px-4 py-3'>Name</th>
                            <th className='px-4 py-3'>Instructor</th>
                            <th className='px-4 py-3'>Duration</th>
                            <th className='px-4 py-3'>Price</th>
                            <th className='px-4 py-3'>Institute</th>
                            <th className='px-4 py-3'>Enrollment Status</th>
                            <th className='px-4 py-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id} className='border-b hover:bg-gray-100'>
                                <td className='px-4 py-3'>{course.id}</td>
                                <td className='px-4 py-3'>{course.name}</td>
                                <td className='px-4 py-3'>{course.instructor}</td>
                                <td className='px-4 py-3'>{course.duration}</td>
                                <td className='px-4 py-3'>{course.price}</td>
                                <td className='px-4 py-3'>{course.category}</td>
                                <td className='px-4 py-3'>{course.enrollmentStatus}</td>
                                <td className='px-4 py-3 flex justify-center items-center gap-4'>
                                    <button>
                                        <Edit className='text-blue-500 p-2 rounded-full bg-blue-100 hover:bg-blue-200' size={40} />
                                    </button>
                                    <button>
                                        <Eye className='text-green-500 p-2 rounded-full bg-green-100 hover:bg-green-200' size={40} />
                                    </button>
                                    <button onClick={() => deleteCourse(course.id)}> {/* Fix here */}
                                        <Trash className='text-red-500 p-2 rounded-full bg-red-100 hover:bg-red-200' size={40} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {deleteModel && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-6 rounded-md shadow-md'>
                        <p className='text-lg font-semibold text-center mb-4'>Are you sure you want to delete?</p>
                        <div className='flex justify-center gap-4'>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 focus:outline-none focus:bg-red-600' onClick={() => setDeleteModel(false)}>Cancel</button>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600' onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
