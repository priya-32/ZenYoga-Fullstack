import React, { useState } from 'react';
import { Trash, Edit, Eye, Plus } from 'lucide-react';

const Courses = () => {
    const [deleteModel, setDeleteModel] = useState(false);
    const [selectedInstitute, setSelectedInstitute] = useState(null);

    const deleteInstitute = (instituteId) => {
        setSelectedInstitute(instituteId);
        setDeleteModel(true);
    };

    const confirmDelete = () => {
        // Perform deletion logic here
        console.log("Deleting institute with ID:", selectedInstitute);
        setDeleteModel(false);
        setSelectedInstitute(null);
    };

    // Sample data for institutes (replace with actual data from your backend)
    const institutes = [
        {
            id: 1,
            name: "ABC Institute",
            location: "City A",
            director: "John Doe",
            website: "https://example.com/abc",
            image: "abc-institute.jpg"
        },
        // Add more institutes as needed
    ];

    return (
        <div className='relative min-h-screen bg-gray-100'>
            <div className='w-full max-w-6xl mx-auto pt-8'>
                <div className="flex justify-end mb-4">
                    <button className='bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-green-600 focus:outline-none focus:bg-green-600'>
                        <Plus size={20} />
                        <span className="ml-2">Create Institute</span>
                    </button>
                </div>
                <table className='w-full bg-white shadow rounded-md'>
                    <thead className='bg-gray-200 text-gray-700'>
                        <tr>
                            <th className='px-4 py-3'>Institute ID</th>
                            <th className='px-4 py-3'>Name</th>
                            <th className='px-4 py-3'>Location</th>
                            <th className='px-4 py-3'>Director</th>
                            <th className='px-4 py-3'>Website</th>
                            <th className='px-4 py-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {institutes.map(institute => (
                            <tr key={institute.id} className='border-b hover:bg-gray-100'>
                                <td className='px-4 py-3'>{institute.id}</td>
                                <td className='px-4 py-3'>{institute.name}</td>
                                <td className='px-4 py-3'>{institute.location}</td>
                                <td className='px-4 py-3'>{institute.director}</td>
                                <td className='px-4 py-3'><a href={institute.website} target="_blank" rel="noopener noreferrer">{institute.website}</a></td>
                                <td className='px-4 py-3 flex justify-center items-center gap-4'>
                                    <button>
                                        <Edit className='text-blue-500 p-2 rounded-full bg-blue-100 hover:bg-blue-200' size={40} />
                                    </button>
                                    <button>
                                        <Eye className='text-green-500 p-2 rounded-full bg-green-100 hover:bg-green-200' size={40} />
                                    </button>
                                    <button onClick={() => deleteInstitute(institute.id)}>
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
