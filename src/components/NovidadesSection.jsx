import { FaStar } from "react-icons/fa";

function NovidadesSection({ title, description }) {
  if (!description) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-[#0f8d6b]">
      <h3 className="font-bold text-xl md:text-2xl text-[#0f8d6b] mb-3 flex items-center">
        <FaStar className="mr-3" /> {/* O ícone de estrela */}
        {title || "Novidades"}
      </h3>

      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default NovidadesSection;
