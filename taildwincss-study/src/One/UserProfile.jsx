import React from "react";

export const UserProfile = () => {
  return (
    <div className="w-[36rem] bg-white rounded p-12 flex gap-x-4">
      <img
        src="data:image/jpeg;base64,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"
        className="w-32 rounded-full border-[11px] border-[#126ede] self-start"
        alt="doremon"
      />
      <div className="spacey-7 ">
        <h1 className="text-3xl font-bold text-red-600 ">Doraemon Chat!</h1>
        <h2 className="mt-1 text-3x1 ">Sợ chuột</h2>

        <div className="space-y-4">
          <p className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            5 Rating
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            Review
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
            Call Me
          </p>
        </div>
        <p className="mt-2 font-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nulla id ea hic libero, accusantium sunt mollitia corrupti impedit
          itaque.
        </p>

        <button className="p-1 border-2 bg-green-300 mt-2">Show more..</button>
      </div>
    </div>
  );
};
