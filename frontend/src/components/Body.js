import React from "react";

class BodyHeader extends React.Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start h-screen">
          <div className="lg:w-1/2 pl-10 pt-40 ">
            <h1 className="text-4xl font-bold">Welcome to FBF:</h1>
            <h1 className="text-4xl font-bold mb-4">Your Feedback Matters</h1>
            <p className="text-lg text-gray-700 mb-4">
              We value your opinion and strive to continuously improve our
              services. Please take a moment to share your feedback with us
            </p>
            <div className="justify-centre">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Now
              </button>
            </div>
          </div>
          <div className=" lg:w-1/2 flex">
            <img
              src="https://s3-alpha-sig.figma.com/img/c62e/9d75/c727e8ff90b0b9030ab175be0246e0d1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zw~siZ1nEFl~2xKBlq-0TXOaJs-swM7QywWDj2E7Y6PT3zbjkRkp7BfxpwkXJQ0GVn8sc6trBjY28XeZsruCSmcBZUAiBdQXXnsn2fzaBvvadAx3~3GJ1-AU4HBqoeCdeAVArGnjEkwvJZyAcxV4Ei6Pp3hH5RzPJZ8FSu6-S68LjAiE-xS35leUimmkb6nB7kBupsvbNi-Q6PX43DET~oV0IQuHNZEGKNOdSYnV8O3HWCKU7E1Jz-GpZ2NiuvmmHVakvTquSsxjHKao3d3fx-gb6punqX3Sdmfl91PlbVf6z3DNoNF8oba9GtyBdwye8TL9kVtBw7guOMFoNf4B4w__"
              alt="Welcome Image"
              className=" w-50 p-10 h-screen"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="justify-center items-center">
            <h1
              style={{ fontSize: "36px" }}
              className="text-center font-nunito"
            >
              Help us improve by sharing your feedback.
            </h1>
            <h1 style={{ fontSize: "64px" }}>
              Our app makes it easy and quick!
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
            <div className="lg:w-1/4 p-4">
              <h1>Easy Submission</h1>
              <p>
                Submit your feedback effortlessly through our user-friendly
                form.
              </p>
            </div>
            <div className="lg:w-1/4 p-4 bg-red">
              <h1>Easy Submission</h1>
              <p>
                Submit your feedback effortlessly through our user-friendly
                form.
              </p>
            </div>
            <div className="lg:w-1/4 p-4 bg-yellow">
              <h1 className="">Easy Submission</h1>
              <p className="text-size-64">
                Submit your feedback effortlessly through our user-friendly
                form.
              </p>
            </div>
          </div>
          <div className="justify-centre">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Providing Feedback
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyHeader;
