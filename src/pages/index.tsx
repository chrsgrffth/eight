import * as React from 'react';

interface Props {}

export default (props: Props) => {
  return (
    <div className="outline">
      <div className="pb-8">
        <div className="font-medium text-xl text-white antialiased pt-6 pb-1">Chris Griffith</div>
        <div className="font-medium text-xl text-grey-light antialiased leading-normal">Designer & Front-End Developer</div>
      </div>

      <div className="projects pt-8">
        {/* <h1 className="title font-medium text-white antialiased">Twitch <span className="opacity-25">Spera Coverhound PayPal Design Kollective</span></h1> */}
        <h1 className="title font-medium text-white antialiased">Twitch</h1>
        <h1 className="title font-medium text-white antialiased">Coverhound</h1>
        <h1 className="title font-medium text-white antialiased">Design Kollective</h1>
        <h1 className="title font-medium text-white antialiased">Spera</h1>
        <h1 className="title font-medium text-white antialiased">PayPal</h1>
      </div>

      <div className="projects pt-8">
        <h1 className="text-3xl font-medium text-white antialiased py-2">About Me</h1>
        <h1 className="text-3xl font-medium text-white antialiased py-2">Thoughts</h1>
        <h1 className="text-3xl font-medium text-white antialiased py-2">Contact</h1>
      </div>
    </div>
  );
};
