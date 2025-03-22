import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    image: "/assets/images/doctor1.png",
    description: "Dr. John Doe is a renowned cardiologist with over 20 years of experience in treating heart diseases."
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    image: "/assets/images/doctor2.png",
    description: "Dr. Jane Smith is a leading neurologist specializing in brain and nervous system disorders."
  },
  // Add more doctors as needed
];

const DoctorsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Meet Our Therapist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card p-4 border rounded-lg">
            <div className="relative w-full h-48">
              <Image
                src={doctor.image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={doctor.name}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-4">{doctor.name}</h2>
            <p className="text-lg text-gray-600">{doctor.specialty}</p>
            <p className="text-md text-gray-500 mt-2">{doctor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;