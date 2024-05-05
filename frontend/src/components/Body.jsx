import React from "react";
import { Link } from "react-router-dom";

class BodyHeader extends React.Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col items-center justify-center pb-10">
        <div className="lg:flex-row lg:items-center bg-secondary md:px-10 flex flex-col items-center gap-10 px-3 py-20">
          <div className="lg:w-1/2 md:items-start md:w-auto flex flex-col items-center gap-5">
            <h1 className="text-light md:text-start md:leading-snug text-4xl font-bold leading-normal text-center">
              Welcome to FBF: <br /> Your Feedback Matters{" "}
            </h1>
            <p className="text-light md:text-start text-lg font-light text-center">
              We value your opinion and strive to continuously improve our
              services. Please take a moment to share your feedback with us
            </p>

            <div className="pt-4">
              <button className="bg-secondaryLight text-light hover:scale-105 hover:bg-primary w-full px-8 py-3 text-center capitalize transition rounded-full">
                <Link to="/forms">Start Now</Link>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex">
            <img
              src="https://s3-alpha-sig.figma.com/img/c62e/9d75/c727e8ff90b0b9030ab175be0246e0d1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zw~siZ1nEFl~2xKBlq-0TXOaJs-swM7QywWDj2E7Y6PT3zbjkRkp7BfxpwkXJQ0GVn8sc6trBjY28XeZsruCSmcBZUAiBdQXXnsn2fzaBvvadAx3~3GJ1-AU4HBqoeCdeAVArGnjEkwvJZyAcxV4Ei6Pp3hH5RzPJZ8FSu6-S68LjAiE-xS35leUimmkb6nB7kBupsvbNi-Q6PX43DET~oV0IQuHNZEGKNOdSYnV8O3HWCKU7E1Jz-GpZ2NiuvmmHVakvTquSsxjHKao3d3fx-gb6punqX3Sdmfl91PlbVf6z3DNoNF8oba9GtyBdwye8TL9kVtBw7guOMFoNf4B4w__"
              alt="Welcome Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="text-light flex flex-col items-center justify-center pt-20">
          <div className="md:px-auto flex flex-col items-center justify-center gap-4 px-5">
            <h3 className="md:text-xl text-2xl text-center">
              Help us improve by sharing your feedback.
            </h3>

            <h2 className="md:text-6xl md:leading-none md:tracking-normal py-2 text-[42px] font-semibold leading-tight tracking-wide text-center">
              Our app makes it easy and quick!
            </h2>
          </div>

          <div className="md:flex-row md:justify-center md:max-w-5xl md:px-auto flex flex-col items-center w-full gap-8 px-5 py-10 mx-auto">
            <div className="bg-secondary flex flex-col gap-3 p-6 rounded-md shadow-xl">
              <h2 className="text-xl font-semibold">Easy Submission</h2>
              <p className="text-sm font-normal">
                Submit your feedback effortlessly through our user-friendly
                form.
              </p>
            </div>

            <div className="bg-secondary flex flex-col gap-3 p-6 rounded-md shadow-xl">
              <h2 className="text-xl font-semibold">Customizable</h2>
              <p className="text-sm font-normal">
                Tailor your Feedback based on specific categories or aspects
              </p>
            </div>

            <div className="bg-secondary flex flex-col gap-3 p-6 rounded-md shadow-xl">
              <h2 className="text-xl font-semibold">Real-Time Updates</h2>
              <p className="text-sm font-normal">
                Receive instant confirmation upon submitting your feedback
              </p>
            </div>
          </div>

          <div className="justify-center py-5">
            <button className="bg-secondaryLight text-light hover:scale-105 hover:bg-secondary px-10 py-3 text-center transition rounded-full">
              <Link to="/forms">Start Providing Feedback</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyHeader;
