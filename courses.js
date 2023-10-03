import  express  from 'express';
export const get = (request, response) => {
    response.json(courses);
  }; 

 export const post = (request, response) => {
    const { id } = request.params;
    const { name } = request.query; 
    const courses = { id, name };

    if (!courses) {
      return res.status(400).json({message: 'Course not found'});
    }

    response.json(courses);
  }
