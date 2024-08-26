import axios from 'axios';

const getStudentsByClassName = async (className) => {
  try {
    // Format the className to match the URL format, replacing spaces with hyphens
    const formattedClassName = className.replace(/\s+/g, '-');
    
    // Make a GET request to your Express server
    const response = await axios.get(`http://localhost:8080/students/class/${formattedClassName}`);
    console.log(response);
    
    // Return the list of students
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

export default getStudentsByClassName;