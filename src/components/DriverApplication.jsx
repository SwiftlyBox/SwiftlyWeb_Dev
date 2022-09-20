import { useForm, ValidationError } from "@formspree/react";
import {Input ,Form ,Button } from "antd";
import uploadcare from "uploadcare-widget/uploadcare.lang.en.min.js";



const DriverApplication =()=> {
  const [state, handleSubmit] = useForm("mvoykdeo");
  if (state.succeeded) {
      return <p>Thanks for  your application !</p>;
  }
  return (
    <div className="  shadow-lg content-center	">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Contact us</div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-2 italic">
            Email Address
          </label>
          <p>Please Enter The same Email as what you did in the app.</p>
          <input
            className="mb-4 border-b-2"
            id="Email"
            name="Email"
            type="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="name" className="mb-2 italic">
            Name
          </label>
          <input
            className="mb-4 border-b-2"
            id="name"
            name="name"
            type="text"
            required
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="name" className="mb-2 italic">
            Vehicle Type
          </label>
          <input
            className="mb-4 border-b-2"
            id="Vehicle Type"
            name="Vehicle Type"
            type="text"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="name" className="mb-2 italic">
            VIN Number
          </label>
          <p>If not Applicable please enter N/A</p>
          <input
            className="mb-4 border-b-2"
            id="VIN Number"
            name="VIN Number"
            type="text"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="file" className="mb-2 italic">
            Your CV With all Required documents above:
          </label>
          <input
            type="hidden"
            role="uploadcare-uploader"
            data-public-key="209677fd00a0b7fbf4b9"
            data-tabs="file gdrive"
          />

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  );
}

export default DriverApplication;