import React from 'react';

const Blog = () => {
    return (
        <div className='bg-info text-white'>
          <div className='text-center m-2 p-4'>
            <h2 className='p-4 text-xl text-center'>How will you improve the performance of a React Application?</h2>
            <p>To optimize React rendering, you need to make sure that components receive only necessary props.<br></br>
            1. Keeping component state local where necessary.<br></br>
            2. Keeping component state local where necessary.<br></br>
            3. Code-splitting in React using dynamic import().<br></br>
            4. Windowing or list virtualization in React.
            </p>
          </div>
          <div className='text-center m-2 p-4'> 
              <h2 className='p-4 text-xl text-center'>How does prototypical inheritance work?</h2>
              <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
          </div>
          <div className='text-center m-2 p-4'>
            <h2 className='p-4 text-xl text-center'>What is a unit test? Why should write unit tests?</h2>
            <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.<br></br>
            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
            </p>
          </div>
          <div className='text-center m-2 p-4'>
            <h2 className='p-4 text-xl text-center'>What are the different ways to manage a state in a React application?</h2> 
            <p>Use useReducer, custom hooks, and more. React gives developers complete freedom over how state is managed within a component. React has two types of components: class components and functional components, which were introduced in React v16. Class components use methods to manage state, such as this.Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. </p> 
         </div>  
        </div>
    );
};

export default Blog;