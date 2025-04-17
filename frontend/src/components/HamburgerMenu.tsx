import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Menu items
const menuItems = ["Home", "About", "Skills", "Projects", "Connect"];

const HamburgerMenu = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExiting, setIsExiting] = useState(false)

    // Function to toggle menu
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="fixed pl-5 pt-5 z-[101] bg-transparent">
            {/* Animated Hamburger Icon */}
            <button className="w-12 h-12 flex flex-col justify-between items-center py-2 " onClick={toggleMenu}>
                <motion.div
                    className="w-8 h-1 bg-white rounded"
                    style={{ transformOrigin: 'center' }} // Ensures correct rotation
                    animate={isOpen ? { rotate: 45, y: 8, translateY: '5.5px' } : { rotate: 0, y: 0, translateY: '0' }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-8 h-1 bg-white rounded"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-8 h-1 bg-white rounded"
                    style={{ transformOrigin: 'center' }} // Ensures correct rotation
                    animate={isOpen ? { rotate: -45, y: -8, translateY: '-6px' } : { rotate: 0, y: 0, translateY: '0' }}
                    transition={{ duration: 0.3 }}
                />
            </button>


            {/* Menu Items */}
            <AnimatePresence
                onExitComplete={() => setIsExiting(false)} // Reset on complete
            >
                {isOpen && (
                    <div className="absolute top-20 left-5 flex flex-col gap-2 space-y-2">
                        {menuItems.map((item, index) => (
                            <motion.div
                                onClick={() => {
                                    scrollToSection(item);
                                    toggleMenu();
                                }}
                                key={item}
                                className="p-4 bg-[#060621] text-white rounded-xl cursor-pointer text-center"
                                whileHover={
                                    !isExiting
                                        ? {
                                            scale: 1.1,
                                            backgroundColor: "#12125b",
                                            translateX: 5,
                                            translateY: 2,
                                            transition: {
                                                duration: 0.2,
                                            },
                                        }
                                        : {}
                                }
                                initial={{ x: -50, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 70,
                                    },
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
