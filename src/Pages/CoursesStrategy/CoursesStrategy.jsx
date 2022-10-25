import React from "react";
import strategy from "../../assets/computer.png";
import "./CoursesStrategy.css";
const CoursesStrategy = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <img src={strategy} alt="" />
          </div>
          <div>
            <h2 className="text-4xl text-gray-700 font-bold mb-10">
              Syllabus of courses
            </h2>
            {/*  */}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-step"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-step" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-step">
                  Videos from professionals
                </p>
                <p className="text-gray-400">
                  Our specialists will help you create any website. With our
                  help, you can handle any task, also you get a personalized
                  consultation.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-step"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-step" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-step">
                  Practical independent work
                </p>
                <p className="text-gray-400">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest.
                  Michael Knight a young loner.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-step"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-step" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold text-step">
                  Feedback from specialists
                </p>
                <p className="text-gray-500">
                  Structure and visualize new knowledge. You send the practical
                  work to the reviewing specialists and receive individual
                  feedback.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-green-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-lg font-bold text-step">Success</p>
                <p className="text-gray-700" />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesStrategy;
