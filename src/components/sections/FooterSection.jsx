import Button from "../Button";
import { Container } from "../Container";
import { motion } from "framer-motion";
import { IconBrandLinkedinFilled, IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react'

export default function FooterSection() {
    return (
        <footer className="bg-bgprimary text-gray-300 py-20">
            <Container className="px-4">

                {/* Animate whole footer content */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="max-w-full mx-auto sm:grid-cols-2 sm:gap-x-20 grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2">
                            <span className="text-red-500 text-3xl font-bold">≋</span>
                            <h2 className="text-xl font-bold text-white">Gana Tech Solutions</h2>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p>123-456-7890</p>
                            <p>info@ganatech.com</p>
                            <p>1234 Tech Boulevard</p>
                            <p>San Francisco, CA 94158</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Training</a></li>
                            <li><a href="#" className="hover:text-white">Events</a></li>
                            <li><a href="#" className="hover:text-white">Resources</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                        <Button className="bg-primary mt-2 hover:bg-transparent" />
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Subscribe to Our Newsletter
                        </h3>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="subscribe" className="accent-red-500" />
                                <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
                            </div>
                            <Button
                                className="hover:bg-blue-500 hover:border-none scale-x-105"
                            />
                        </form>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col md:items-end items-start">
                        <h3 className="text-lg font-semibold text-white mb-3">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <div className="h-8 w-8 overflow-hidden border border-text-secondary flex items-center justify-center rounded-full">
                                <IconBrandLinkedinFilled className="text-primary  cursor-pointer p-1 text-center h-10 w-10" />
                            </div>
                            <div className="h-8 w-8 overflow-hidden border border-text-secondary flex items-center justify-center rounded-full">
                                <IconBrandFacebook className="text-primary w-full h-full cursor-pointer p-1 text-center" />
                            </div>
                            <div className="h-8 w-8 overflow-hidden border border-text-secondary flex items-center justify-center rounded-full">
                                <IconBrandTwitter className="text-primary w-full h-full cursor-pointer p-1 text-center" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center text-gray-500 text-sm"
                >
                    © 2023 by Gana Tech Solutions. All rights reserved.
                </motion.div>
            </Container>
        </footer>
    );
}
