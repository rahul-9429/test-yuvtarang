import React from 'react';
import MagicButton from '@/components/Elements/MagicButton';

interface ContactProps {
    title: string;
    people: {
        name: string;
        role?: string;
        org: string;
        contact?: string;
    }[];
}

const Contact = () => {
    const mainContacts: ContactProps[] = [
        {
            title: "Convener",
            people: [{ name: "Dr. B. Sateesh", role: "Dean - Student Affairs", org: "VIIT" }]
        },
        {
            title: "Co-Conveners",
            people: [
                { name: "Mrs. K. Sravanthi", role: "Assoc. DSA", org: "VIIT" },
                { name: "Dr. K. P. Suhasini", role: "Assoc. DSA", org: "VIEW" },
                { name: "Dr. S. Satyalakshmi", role: "Assoc. DSA", org: "VIPT" }
            ]
        },
    ];
    const contacts: ContactProps[] = [
        {
            title: "Student Conveners",
            people: [
                { name: "E. Ratan Bhavish", org: "VIIT", contact: "7993726082" },
                { name: "L. Gayatri", org: "VIEW", contact: "7569838603" },
                { name: "K. Sai Kumar", org: "VIPT", contact: "6300193772" }
            ]
        },
        {
            title: "Cultural Coordinators",
            people: [
                { name: "K. Jayanth", org: "VIIT", contact: "7780201265" },
                { name: "K. Sreeja", org: "VIIT", contact: "9573448842" },
                { name: "K. Bhardwaj", org: "VIPT", contact: "9392856536" },
                { name: "M. Naga Sravani", org: "VIEW", contact: "7285985364" }
            ]
        },
        {
            title: "Sports Coordinators",
            people: [
                { name: "G. Prudhivi Kumar Naidu", org: "VIIT", contact: "8978957575" },
                { name: "K. Harsha Vardhan", org: "VIIT", contact: "8328042030" },
                { name: "T. Gulshan Sri Babu", org: "VIIT", contact: "7981878173" },
                { name: "J. Arpana", org: "VIPT", contact: "8383884187" }
            ]
        },
    ];

    return (
        <div className="">
            <div id='contact' className="justify-items-center scroll-m-10">
                <MagicButton title='Event Contacts' />
                <div className='mt-10 justify-items-center lg:justify-items-start'>
                    <div className='w-fit flex flex-wrap lg:grid lg:grid-cols-2 sm:!grid-cols-1 justify-center lg:justify-start gap-20 lg:gap-0'>
                        {mainContacts.map((section, index) => (
                            <div key={index} className="mb-6">
                                <h2 className="text-xl font-semibold text-center lg:text-left font-serif uppercase pb-2">{section.title}</h2>
                                <div className="mt-4 space-y-4">
                                    {section.people.map((person, idx) => (
                                        <div className='flex gap-3 items-center whitespace-nowrap border-l-4 border-black pl-1'>
                                            <p className="text-lg font-medium text-neutral-800">{person.name}</p>
                                            <p className="text-neutral-600">{person.role || person.org}</p>
                                            {person.role && <p className="text-neutral-500">{person.org}</p>}
                                            {person.contact && (
                                                <div className="flex text-neutral-700 sm:text-right">
                                                    <p>{person.contact}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='grid grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1  justify-center lg:justify-start gap-20 lg:gap-0'>
                        {contacts.map((section, index) => (
                            <div key={index} className="mb-6">
                                <h2 className="text-xl font-semibold text-center lg:text-left font-serif uppercase pb-2">{section.title}</h2>
                                <div className="mt-4 space-y-4">
                                    {section.people.map((person, idx) => (
                                        <div className='flex gap-3 items-center whitespace-nowrap border-l-4 border-black pl-1'>
                                            <p className="text-lg font-medium text-neutral-800">{person.name}</p>
                                            <p className="text-neutral-600">{person.role || person.org}</p>
                                            {person.role && <p className="text-neutral-500">{person.org}</p>}
                                            {person.contact && (
                                                <div className="flex text-neutral-700 sm:text-right">
                                                    <p>{person.contact}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
