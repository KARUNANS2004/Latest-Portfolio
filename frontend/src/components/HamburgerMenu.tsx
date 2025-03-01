import { useState } from "react";
import { motion, AnimatePresence, transform } from "framer-motion";
import { transformNormalToView } from "three/tsl";

// Menu items
const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative h-screen pl-5">
            {/* Animated Hamburger Icon */}
            <button className="w-12 h-12 flex flex-col justify-between items-center p-2" onClick={toggleMenu}>
                <motion.div
                    className="w-8 h-1 bg-black rounded"
                    style={{ transformOrigin: 'center' }} // Ensures correct rotation
                    animate={isOpen ? { rotate: 45, y: 8, translateY: '5.5px' } : { rotate: 0, y: 0, translateY: '0' }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-8 h-1 bg-black rounded"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-8 h-1 bg-black rounded"
                    style={{ transformOrigin: 'center' }} // Ensures correct rotation
                    animate={isOpen ? { rotate: -45, y: -8, translateY: '-6px' } : { rotate: 0, y: 0, translateY: '0' }}
                    transition={{ duration: 0.3 }}
                />
            </button>


            {/* Menu Items */}
            <AnimatePresence>
                {isOpen && (
                    <div className="absolute top-14 left-5 flex flex-col gap-2 space-y-2">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item}
                                className="p-3 bg-gray-700 text-white rounded-md cursor-pointer"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { delay: index * 0.1, type: "spring", stiffness: 120 },
                                }}
                                exit={{
                                    y: 50,
                                    opacity: 0,
                                    transition: { duration: 0.3, ease: "easeInOut" },
                                }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;
