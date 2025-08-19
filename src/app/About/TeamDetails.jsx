import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const TeamDetails = () => {
  const team = [
    {
      name: "Mark William",
      role: "Interior Designer",
      img: "https://i.pinimg.com/736x/bd/3b/16/bd3b16868f55313d5d70415d8b969a91.jpg",
    },
    {
      name: "Jon Deo",
      role: "Interior Designer",
      img: "https://i.pinimg.com/736x/d8/0e/2f/d80e2f09e4dc9f85f548436b8d67e170.jpg",
    },
    {
      name: "Ahad Raza Mir",
      role: "Interior Designer",
      img: "https://i.pinimg.com/736x/a5/47/80/a547809ed2d134bdb794a5ff19a101b7.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our expert tips, creative ideas, and trend-focused content help
              you transform any space into something beautiful and personal.
            </p>
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              Our team of home decor experts brings years of experience in
              interior design, styling, and creative planning.
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-lg text-yellow-400 font-semibold tracking-wide">
              OUR TEAM
            </h3>
            <h2 className="text-5xl font-extrabold mt-3 text-white">
              Meet Our Expert
            </h2>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="relative group rounded-2xl shadow-xl overflow-hidden bg-white/5 backdrop-blur-lg"
            >
              {/* Image with subtle zoom */}
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-full h-[450px] object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Social Icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition duration-500">
                <motion.a
                  whileHover={{ y: -4 }}
                  className="text-white text-2xl hover:text-yellow-400 cursor-pointer"
                >
                  <BsFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4 }}
                  className="text-white text-2xl hover:text-yellow-400 cursor-pointer"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4 }}
                  className="text-white text-2xl hover:text-yellow-400 cursor-pointer"
                >
                  <FaTwitter />
                </motion.a>
              </div>

              {/* Card Details */}
              <div className="p-6 text-center bg-white">
                <h2 className="text-xl font-bold text-blue-900">
                  {member.name}
                </h2>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-14 py-4 bg-gradient-to-r from-yellow-400 to-emerald-400 text-blue-900 font-bold text-lg rounded-full shadow-lg overflow-hidden transition-all duration-500 group"
          >
            <span className="relative z-10">View More</span>
            {/* Optional subtle animated underline on hover */}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-900 group-hover:w-full transition-all duration-500"></span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
