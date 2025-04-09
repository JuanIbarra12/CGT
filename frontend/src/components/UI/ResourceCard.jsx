import React from "react";

const ResourceCard = ({ icon: Icon, title, items }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 ml-4">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map(({ icon: ItemIcon, title, desc, link }, index) => (
          <li key={index} className="flex items-start">
            <ItemIcon className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">{title}</h4>
              <p className="text-gray-600">{desc}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 hover:underline mt-1"
                >
                  Access Resource <ItemIcon className="h-4 w-4 ml-1" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceCard;
