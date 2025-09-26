import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div className="h-screen items-start w-screen bg-gradient-to-r from-gray-200 to-blue-200 flex justify-center">
      <div className="p-8 w-1/2 shadow-xl bg-gray-50 flex flex-col items-center justify-center text-center rounded-2xl mt-8">
        <h1 className="font-bold text-4xl mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you! Fill out the form below or reach out to us
          directly.
        </p>
        <h2 className="mb-6">
          <UserClass />
        </h2>
      </div>
    </div>
  );
};

export default Contact;
