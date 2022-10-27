import React from "react";

const Blogs = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-700 font-bold mb-10">Blogs</h2>
        {/*  */}
        <div className="space-y-4">
          <details
            className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                What is CORS?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Cross-origin resource sharing (CORS) is a browser mechanism which
              enables controlled access to resources located outside of a given
              domain. It extends and adds flexibility to the same-origin policy
              (SOP). However, it also provides potential for cross-domain
              attacks, if a website's CORS policy is poorly configured and
              implemented. CORS is not a protection against cross-origin attacks
              such as cross-site request forgery (CSRF).The role of a CORS
              policy is to maintain the integrity of a website and secure it
              from unauthorized access. The CORS protocol was defined to relax
              the default security policy called the Same-Origin Policy (SOP)
              used by the browsers to protect their resources. The Same-Origin
              Policy permits the browser to load resources only from a server
              hosted in the same-origin as the browser. The SOP was defined in
              the early years of the web and turned out to be too restrictive
              for the new age applications where we often need to fetch
              different kinds of resources from multiple origins. The CORS
              protocol is implemented by all modern browsers to allow controlled
              access to resources located outside of the browser’s origin.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                Why are you using firebase?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                How does Private Route Work?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                What is Node?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine and executes
              JavaScript code outside a web browser, which was designed to build
              scalable network applications.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                How does node work?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads. Thread is a sequence of instructions that
              the server needs to perform. It runs parallel on the server to
              provide the information to multiple clients. Node.js is an event
              loop single-threaded language. It can handle concurrent requests
              with a single thread without blocking it for one request.
            </p>
          </details>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Blogs;
