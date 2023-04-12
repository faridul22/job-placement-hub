import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-center bg-light pb-5'>Blogs</h3>
            <div className="container mx-auto row g-4 mt-5">
                <article className="col">
                    <div className="card h-100">
                        <div className="card-body p-5">
                            <h5 className="card-title text-center pb-3"> When should we use <strong>Context API</strong>
                            </h5>
                            <p className="card-text">When we want to avoid passing a props through multiple layers we will use Context API. Because, The React Context API provides a way to share data between components without having to pass props manually through every level of the component tree. This can be particularly useful for global state that needs to be accessed by many different components at different levels of the tree.By defining a context and providing it at the top level of our component tree using the <strong>Context.Provider</strong> component, any child component can consume the context data using the useContext hook or the Consumer component. This makes it easy to share data such as the current authenticated user, theme, or preferred language across our application without having to pass it as a prop to every component that needs it.Using the Context API can help simplify our code and make it more efficient by reducing the number of props that need to be passed through intermediate components.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blogs;