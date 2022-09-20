import { useForm, ValidationError } from "@formspree/react";
import { Input, Form, Button } from "antd";

const RestaurantApplication = () => {
  const [state, handleSubmit] = useForm("xoqbeboe");
  if (state.succeeded) {
    return (
      <p>
        Thanks for your application,We will contact you soon if you want to
        email us .Email us at support@swiftlybox.com !
      </p>
    );
  }
  return (
    <div className="  shadow-lg content-center	">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Contact us</div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-2 italic">
            Email Address of the Restaurant Owner
          </label>
          <input
            className="mb-4 border-b-2"
            id="Email"
            name="Email"
            type="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="name" className="mb-2 italic">
            Owners Name
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
            Address of the restaurant
          </label>
          <input
            className="mb-4 border-b-2"
            id="address of the restaurant"
            name="address of the restaurant"
            type="text"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="name" className="mb-2 italic">
            Type of Restaurant
          </label>

          <input
            className="mb-4 border-b-2"
            id="Type"
            name="Type"
            type="text"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

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
};
export default RestaurantApplication;