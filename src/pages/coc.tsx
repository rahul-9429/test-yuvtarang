import MagicButton from '@/components/Elements/MagicButton';
import Link from 'next/link';
import React from 'react';

const CodeOfConduct = () => {
    return (
        <div className="min-h-[calc(100vh-7.5rem)] max-container">
            <div className="space-y-3 mb-6">
                <Link href="/" className="hidden lg:flex items-center">
                    <button className="flex items-center p-3 py-2 border border-[--border] rounded-lg bg-[--primary] text-[--foreground] font-serif uppercase text-sm transition-all duration-200 ease-in-out hover:bg-[--primary-light] hover:text-[--footer] group">
                        <svg
                            className="w-5 h-5 group-hover:scale-110 transition-all duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 12H5m7 7l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Back</span>
                    </button>
                </Link>
                <div className="flex flex-col items-center justify-center">
                    <MagicButton title='Code of Conduct' />
                    <p className='mt-3 max-w-[80rem] text-lg text-center'>Please adhere to the following guidelines to ensure a smooth and enjoyable experience at our cultural fest.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto bg-primary-light p-6 rounded-lg shadow-md border border-border">

                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>ID Card is Mandatory:</strong> All students must carry and display their college ID card at all times.</li>
                    <li><strong>Strict Discipline:</strong> Any interdisciplinary behavior will result in immediate suspension.</li>
                    <li><strong>Substance-Free Event:</strong> Alcohol, drugs, and smoking are strictly prohibited on campus.</li>
                    <li><strong>Respect and Conduct:</strong> Any form of harassment, discrimination, or misconduct will not be tolerated.</li>
                    <li><strong>Event Participation:</strong> Follow the guidelines set by event coordinators and respect time schedules.</li>
                    <li><strong>Property and Cleanliness:</strong> Keep the campus clean and do not cause any damage to college property.</li>
                </ul>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-3">Important Information</h2>
                    <p>
                        <strong>Event Date:</strong> 21st - 22nd February 2025 <br />
                        <strong>Venue:</strong> Vignan's Institute of Information Technology, Visakhapatnam <br />
                        <strong>Emergency Contact:</strong> <Link href={`/#contact`} className='font-serif underline underline-offset-2 font-medium hover:text-footer-secondary'>contact details.</Link> <br />
                        <strong>Social Media:</strong> Follow us on [Insert Social Media Links] for updates!
                    </p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <Link href="/lost-found">
                    <button className="px-6 py-3 bg-footer text-white font-serif font-semibold rounded-lg transition duration-200 hover:bg-footer-secondary rounded-tr-2xl rounded-bl-2xl">
                        Visit Lost & Found
                    </button>
                </Link>
            </div>

            <footer className="mt-10 bg-footer text-primary p-4 text-center rounded-lg">
                <p className="text-sm">
                    Violation of these rules may lead to strict disciplinary action. Let's make this fest a memorable and respectful experience for everyone!
                </p>
            </footer>
        </div>
    );
};

export default CodeOfConduct;
