import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-center bg-light pb-5'>Blogs</h3>
            <div className="container mx-auto g-4 mt-5">
                <article className="">
                    <div className="card h-100">
                        <div className="card-body p-5">
                            <h5 className="card-title text-center pb-3"> When should we use <strong className='text-success'>Context API</strong>
                            </h5>
                            <p className="card-text">When we want to avoid passing a props through multiple layers we will use Context API. Because, The React Context API provides a way to share data between components without having to pass props manually through every level of the component tree. This can be particularly useful for global state that needs to be accessed by many different components at different levels of the tree.By defining a context and providing it at the top level of our component tree using the <strong>Context.Provider</strong> component, any child component can consume the context data using the useContext hook or the Consumer component. This makes it easy to share data such as the current authenticated user, theme, or preferred language across our application without having to pass it as a prop to every component that needs it.Using the Context API can help simplify our code and make it more efficient by reducing the number of props that need to be passed through intermediate components.</p>
                        </div>
                    </div>
                </article>

                <article className="my-5">
                    <div className="card h-100">
                        <div className="card-body p-5">
                            <h5 className="card-title text-center pb-3"> What is <strong className='text-info'>Custom hook</strong>
                            </h5>
                            <p className="card-text">When we need to reuse logic that's associated with a component, we can extract that logic into a custom hook. A custom hook is essentially a function that encapsulates some behavior or logic that can be reused across multiple components in a React application.By creating a custom hook, we can share stateful logic, such as data fetching, form handling, or event handling, between different components in our application. We can use the built-in React hooks, such as useState, useEffect, useRef, and so on, to implement this behavior.Custom hooks allow we to abstract away complex logic and provide a clean and reusable interface for working with that logic. We can create a custom hook once and use it in multiple components throughout our application, which can help reduce duplication and make our code more concise and maintainable.</p>
                        </div>
                    </div>
                </article>
                <article className="my-5">
                    <div className="card h-100">
                        <div className="card-body p-5">
                            <h5 className="card-title text-center pb-3"> What is <strong className='text-success'>useRef</strong>
                            </h5>
                            <p className="card-text">React's useRef hook is a way to create a mutable reference to a value that persists across re-renders. It's commonly used to access and modify DOM elements in a component, but it can also be used to store any other mutable value that needs to persist between re-renders.One of the main use cases for useRef is accessing DOM elements in a component. We can use useRef to create a reference to a DOM element and then pass that reference to other parts of our code, such as event handlers or animations. For example, we might use useRef to create a reference to a canvas element and then use that reference to draw graphics on the canvas.useRef can also be used to store other mutable values that need to persist between re-renders, such as counters or timers. Unlike useState, useRef does not trigger a re-render when its value changes, which makes it useful for storing values that do not affect the visual representation of the component.However, it's important to note that useRef should not be used to trigger re-renders or update the state of a component. Updating a useRef value does not trigger a re-render, and modifying the value directly can cause bugs and unexpected behavior. Instead, use useState or useReducer to manage the state of our component.</p>
                        </div>
                    </div>
                </article>

                <article className="my-5">
                    <div className="card h-100">
                        <div className="card-body p-5">
                            <h5 className="card-title text-center pb-3"> What is <strong className='text-info'>useMemo</strong>
                            </h5>
                            <p className="card-text">useMemo is a React Hook that lets we cache the result of a calculation between re-renders.By default, every time a React component re-renders, all of its code is executed again from scratch. This includes any calculations or functions that are called within the component. In some cases, these calculations or functions can be expensive, meaning they take a long time to execute. If the same calculation is executed on every re-render, it can slow down our application and make it less responsive.useMemo allows we to "memoize" the result of a calculation so that it only needs to be executed when certain dependencies change. The first argument to useMemo is a function that performs the calculation, and the second argument is an array of dependencies that the calculation depends on. If none of the dependencies have changed since the last time the calculation was executed, the cached result is returned instead of executing the function again.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blogs;