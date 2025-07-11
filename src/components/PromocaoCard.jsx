function PromocaoCard({ title, imageUrl, description, link }) {
  const cardBaseStyle =
    "bg-gray-300 p-6 rounded-xl shadow-lg text-black flex flex-col h-full";

  return (
    <div className={cardBaseStyle}>
      <div className="mb-4 h-74 w-full overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-lg md:text-xl mb-3">{title}</h3>

      <p className="text-sm text-black mb-3 flex-grow">
        {description || "Descrição em breve..."}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-300 text-center"
      >
        Consultar via WhatsApp
      </a>
    </div>
  );
}

export default PromocaoCard;
