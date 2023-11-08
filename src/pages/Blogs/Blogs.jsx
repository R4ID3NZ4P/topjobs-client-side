import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const Blogs = () => {
    return (
        <div className="px-10 lg:px-32">
            <Helmet>
                <title>{titles.blogs}</title>
            </Helmet>
            <h1 className="text-center text-3xl font-bold my-6">Blogs</h1>
            <div className="w-9/12">
                <h3 className="text-xl font-semibold mb-4">What is an access token and refresh token? How do they work and where should we
                    store them on the client-side?</h3>
                <p>
                A token or an access token is an unique approval given to you (more like a digital signature) for accessing any resource. The application issues it to you once you have authenticated yourself with valid credentials. These tokens are generally short-lived, i.e., valid only for a short amount of time (say 5-15 minutes). This is plenty for you to perform a particular task requiring validation but makes it harder for individuals with malicious intent to get their hands on confidential resources. Now, until the token expires, the user would not have to enter the credentials again.
                </p>
                <p>
                A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. This method provides an enhanced user experience all while keeping a robust security interface.
                </p>
                <p>
                When a browser makes a request to an API endpoint to use a resource provided only to authenticated users, the application would require the credentials of the user. And upon authentication (login), the application on the user&apos;s browser is granted access to the resource. This access is provided by sharing an access token with the user&apos;s browser so that subsequent API calls from the browser which requires the credentials can be sent without any hassle.
                </p>
                <p>
                    As cookies are a much safer way than any other storage on server side, that is why we should store tokens on cookies on the client side.
                </p>
            </div>
            <hr className="my-12" />
            <div className="w-9/12">
                <h3 className="text-xl font-semibold mb-4">What is express js? What is Nest JS? </h3>
                <p>
                Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                </p>
                <p>
                Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
                </p>
            </div>
            <hr className="my-12" />
            <div className="w-9/12 mb-52">
                <h3 className="text-xl font-semibold mb-4"> Explanation of my code </h3>
                <p>
                    I used ReactJS, Tailwindcss, DaisyUI Component Library, React-Router, and some React components on the front-end part of this project, and I used Node.js, Express.js on the backend part with MongoDB as database.
                </p>
                <p>
                    On the front-end part, I made and used various small to large scale React components to make a single page application. I used axios to perform the HTTP requests and transfer data between front-end and backend.
                </p>
                <p>On the backend part, I used Node.js and Express.js to make a simple API, which provided me with the data that is needed on the front-end side. I used various middlewares to make the application run smoothly. And, MongoDB served me as the database for all my data.</p>
            </div>
        </div>
    );
};

export default Blogs;