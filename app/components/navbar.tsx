// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { cn } from '@/lib/utils'; // Make sure this function actually exists

// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Testimonials', href: '#testimonials' },
//   { name: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll); // Cleanup to prevent memory leaks
//   }, []);

//   return (
//     <motion.nav
//       className={cn(
//         'fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-between items-center transition-all duration-300',
//         isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//       )}
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//     >
//       {/* Logo */}
//       <Link href="/" className="text-2xl font-bold lexend text-blue-500">
//         FARHAN
//       </Link>

//       {/* Menu */}
//       <div className="flex space-x-8">
//         {navItems.map((item, index) => (
//           <Link
//             key={index}
//             href={item.href}
//             className="text-lg font-light text-gray-900 hover:text-blue-500 transition-colors duration-300"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </motion.nav>
//   );
// }
