export const StepOne = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Step 1: Personal Information
      </h2>
      <input
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
    </div>
  );
};

export const StepTwo = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Step 2: Contact Information
      </h2>
      <input
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
    </div>
  );
};

export const StepThree = ({ formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Step 3: Review Information
      </h2>
      <p className="mb-2 text-gray-600">
        First Name: <span className="font-semibold">{formData.firstName}</span>
      </p>
      <p className="mb-2 text-gray-600">
        Last Name: <span className="font-semibold">{formData.lastName}</span>
      </p>
      <p className="mb-2 text-gray-600">
        Email: <span className="font-semibold">{formData.email}</span>
      </p>
      <p className="mb-2 text-gray-600">
        Phone: <span className="font-semibold">{formData.phone}</span>
      </p>
    </div>
  );
};
