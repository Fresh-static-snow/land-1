import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="hidden sm:block">
        <div className="flex flex-col items-center gap-4">
          <img
            loading="eager"
            src="/desk-girl.webp"
            className="w-auto max-w-[800px]"
          />
          <a
            href="https://go33au.com/RFV8.PARTNERSHIP"
            target="_blank"
            className="px-[16px]"
          >
            <img
              loading="eager"
              src="/desk-btn-1.webp"
              className="w-auto max-w-[800px]"
            />
          </a>
          <a href="https://v8au.com/RFGO33.PARTNERSHIP" target="_blank">
            <img
              loading="eager"
              src="/desk-btn-2.webp"
              className="w-auto max-w-[800px]"
            />
          </a>
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="flex flex-col items-center gap-4">
          <img
            loading="eager"
            src="/mob-girl.webp"
            className="w-auto max-w-[800px]"
          />
          <a href="https://go33au.com/RFV8.PARTNERSHIP" target="_blank">
            <img
              loading="eager"
              src="/mob-btn-1.webp"
              className="w-auto max-w-[800px]"
            />
          </a>
          <a href="https://v8au.com/RFGO33.PARTNERSHIP" target="_blank">
            <img
              loading="eager"
              src="/mob-btn-2.webp"
              className="w-auto max-w-[800px]"
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
}
