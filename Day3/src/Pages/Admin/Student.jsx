import React, { useState } from 'react';
import { MailPlus, Trash, Edit, Eye } from 'lucide-react';

const Students = () => {
    const [deleteModel, setDeleteModel] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const deleteStudent = (studentId) => {
        setSelectedStudent(studentId);
        setDeleteModel(true);
    };

    const confirmDelete = () => {
        // Perform deletion logic here
        console.log("Deleting student with ID:", selectedStudent);
        setDeleteModel(false);
        setSelectedStudent(null);
    };

    return (
        <>
             <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-semibold absolute top-8 right-8'>
                Create Student
            </button>
            <div style={{ marginTop: '60px' }}> {/* Adjust margin-top value as needed */}

        <div className='container mx-auto py-5'>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white shadow-md rounded-lg'>
                    <thead className='bg-gray-200 text-gray-700'>
                        <tr>
                            <th className='px-6 py-3'>Student ID</th>
                            <th className='px-6 py-3'>Name</th>
                            <th className='px-6 py-3'>Phone</th>
                            <th className='px-6 py-3'>Email</th>
                            <th className='px-6 py-3'>Gender</th>
                            <th className='px-6 py-3'>Date of Birth</th>
                            <th className='px-6 py-3'>Address</th>
                            <th className='px-6 py-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b hover:bg-gray-100'>
                            <td className='px-6 py-4'>1001</td>
                            <td className='px-6 py-4'>John Doe</td>
                            <td className='px-6 py-4'>9876543210</td>
                            <td className='px-6 py-4'>john.doe@example.com</td>
                            <td className='px-6 py-4'>Male</td>
                            <td className='px-6 py-4'>1995-03-15</td>
                            <td className='px-6 py-4'>123 Main St, Anytown, USA</td>
                            <td className='px-6 py-4 flex justify-center gap-4'>
                                {/* <button>
                                    <MailPlus className='text-purple-500 p-2 rounded-full bg-purple-100 hover:bg-purple-200' size={34} />
                                </button> */}
                                <button>
                                    <Edit className='text-blue-500 p-2 rounded-full bg-blue-100 hover:bg-blue-200' size={40} />
                                </button>
                                <button>
                                    <Eye className='text-green-500 p-2 rounded-full bg-green-100 hover:bg-green-200' size={40} />
                                </button>
                                <button onClick={() => deleteStudent(1001)}>
                                    <Trash className='text-red-500 p-2 rounded-full bg-red-100 hover:bg-red-200' size={40} />
                                </button>
                            </td>
                        </tr>
                        {/* Add more rows with student data */}
                    </tbody>
                </table>
            </div>

            {deleteModel && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-6 rounded-md shadow-md'>
                        <p className='text-lg font-semibold text-center mb-4'>Are you sure you want to delete?</p>
                        <div className='flex justify-center gap-4'>
                            <button className='bg-red-500 text-white px-6 py-3 rounded-md font-semibold' onClick={() => setDeleteModel(false)}>Cancel</button>
                            <button className='bg-blue-500 text-white px-6 py-3 rounded-md font-semibold' onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
        </>
    );
};

export default Students;
