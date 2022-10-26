import React from "react";

const Faq = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-700 font-bold mb-10">
          Frequently Ask Questions
        </h2>
        {/*  */}
        <div className="space-y-4">
          <details
            className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                iAcademy-এর কোর্সগুলো মূলত কাদের জন্য প্রযোজ্য?
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
              সফটওয়্যার কোম্পানি বা আইটি জব বা ফ্রিল্যান্সিং করতে চান, তাদের
              জন্য সাজানো হয়েছে আমাদের কোর্সগুলো। একদম শূন্য থেকে একজন যোগ্য
              ক্যান্ডিডেট হতে সাহায্য করাই আমাদের কাজ। যারা প্রোগ্রামিং বা যারা
              ইঞ্জিনিয়ারিং সম্পর্কে জানেন না তাদের জন্য যেমন কোর্স রয়েছে তেমনি
              যারা কম্পিউটার সায়েন্স এ পড়াশুনা করেছেন তাদের জন্য ও কোর্স রয়েছে।
              প্রত্যেক কোর্স এর মধ্যে টার্গেট অডিয়েন্স লিখা আছে কোন কোর্স কাদের
              করা উচিত।
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                কোর্সগুলো করতে কি কোনো পূর্ব অভিজ্ঞতার প্রয়োজন আছে?
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
              আমাদের প্রত্যেক কোর্স এর মধ্যে প্রি-রিকুইসাইট লিখা আছে। বিগিনার
              লেভেল এর কিছু কোর্স যেমন কম্পিউটার থাকলেই করা যাবে, তেমনি
              অ্যাডভান্সড কোর্স করতে আপনার যথেষ্ট জ্ঞান থাকতে হবে।
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                কোর্স করতে শিক্ষাগত যোগ্যতা কেমন থাকা দরকার?
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
              1) কম্পিউটার থাকা এবং কম্পিউটার চালানো জানলে আমাদের বিগিনার লেভেল
              এর বেশিরভাগ কোর্স করতে পারবে। 2) intermediate লেভেল এর কোর্স করতে:
              বিগিনার লেভেল এর জ্ঞান থাকার পাশে pre-রিকুইসাইট এর জ্ঞান প্রয়োজন।
              3) এডভান্সড লেভেল এর কোর্স এর জন্য ভালো মানের নলেজ প্রয়োজন। আমরা
              এইসব কোর্স করতে সবাইকে encourage করি না। যে নিজে ঐটুকু এক্সপার্ট
              তার করা উচিত। আমরা এডভান্সড কোর্স এর জন্য এনরোলেমেন্ট টেস্ট দিয়ে
              থাকি। কিছু intermediate লেভেল কোর্স এর মধ্যে ও দিব ভবিষ্যতে।
              এনরোলেমেন্ট টেস্ট এর জন্য pre-requisite এর নলেজ হবে প্রস্তুতি এর
              জন্য। প্রাতিষ্ঠানিক শিক্ষা কোন টপিক এ সেটা এখানে mandatory নয়। তবে
              প্রাতিষ্ঠানিক শিক্ষা থাকলে আপনার জন্য অনেক কিছু শিখা সহজ হবে।
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                আপনাদের কোর্স করতে কি কি লাগবে?
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
              আমাদের প্রত্যেক কোর্স এর জন্য আলাদা রিকোইরেমেন্টস বা
              প্রি-রিকুইসাইট রয়েছে, কিছু কোর্স করতে যেমন কম্পিউটার চালানোর ধারণা
              থাকা প্রয়োজন তেমনি কিছু কোর্স এ উচ্চতর জ্ঞান থাকা প্রয়োজন। তবে
              আপনার হাতে সময় না থাকলে কোর্স করা উচিত হবে না।
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-step rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                আমার জন্য কোন কোর্স করা উচিত আমি কিভাবে বুঝব?
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
              আপনি ডিসিশন নিতে না পারলে কোন কোর্স করা উচিত আমাদের ফ্রী মেন্টরিং
              সার্ভিস এ রেজিস্ট্রেশন করুন।
            </p>
          </details>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Faq;
