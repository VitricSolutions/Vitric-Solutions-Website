import linkedin from "../../assets/images/aboutUs/LinkedIn.svg";

import akansha from "../../assets/images/aboutUs/leadership/Akanksha_Vaidya-removebg.png";
import mukund from "../../assets/images/aboutUs/leadership/Mukund_Sangli.jpg";
import loknath from "../../assets/images/aboutUs/leadership/Loknath Rao.png";
import parag from "../../assets/images/aboutUs/leadership/Parag1.png";
import sarang from "../../assets/images/aboutUs/leadership/Sarang.jpeg";
import sawani from "../../assets/images/aboutUs/leadership/Sawani.jpg";
import anish from "../../assets/images/aboutUs/leadership/Anish_Ashirgade.jpg";
import giridharan from "../../assets/images/aboutUs/leadership/Giridharan_Somaskandan.jpg";

interface LeaderProps {
    name: string;
    designation: string;
    bio: string;
    focusTitle: string;
    focusContent: string;
    linkedinUrl?: string;
    image?: string;
}

const LeaderCard = ({ name, designation, bio, focusTitle, focusContent, linkedinUrl, image }: LeaderProps) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="w-full md:w-56 h-64 md:h-auto bg-gray-200 relative flex-shrink-0">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                    <span className="text-4xl opacity-50 font-bold">{name.charAt(0)}{name.split(' ')[1]?.charAt(0)}</span>
                </div>
            )}
            {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 bg-white p-1.5 rounded-sm hover:bg-[#0077B5] hover:text-white transition-colors shadow-sm">
                    <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
            )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
            <h3 className="text-2xl font-bold text-[#1D1D1D] mb-1">{name}</h3>
            <p className="text-[#D32F0F] font-bold text-sm uppercase mb-4 tracking-wide">{designation}</p>

            <p className="text-gray-700 text-[15px] leading-relaxed font-[Lato] mb-6">
                {bio}
            </p>

            <div className="mt-auto border-t border-gray-100 pt-4">
                <h4 className="text-[#1D1D1D] font-bold text-sm uppercase mb-2">{focusTitle}</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-[Lato]">
                    {focusContent}
                </p>
            </div>
        </div>
    </div>
);


const LeadershipTeam = () => {
    // 6.1 Leadership Team (Core)
    const leadershipTeam1 = [
        {
            name: "Sarang Ghawde",
            designation: "SCM Practice Director | Kinaxis Architect",
            bio: "Kinaxis Maestro / RapidResponse Architect with two decades of enterprise supply chain transformation experience across Pharma, CPG, Manufacturing, and Hi-Tech.",
            focusTitle: "Kinaxis Execution Leadership",
            focusContent: "Owns solution architecture, data model design, advanced planning logic, and end-to-end Kinaxis delivery governance.",
            linkedinUrl: "https://www.linkedin.com/in/sarang-ghawde-073a3216/",
            image: sarang
        },
        {
            name: "Rachana Ashirgade",
            designation: "Director – Sales (APAC)",
            bio: "Business Initiator & Strategist focused on building business-led transformation models and driving value realization through Kinaxis-enabled planning.",
            focusTitle: "Client Advisory & Value Realization",
            focusContent: "Leads executive alignment, business case definition, program structuring, and outcome-led transformation models.",
            linkedinUrl: "#",
            image: ""
        }
    ];

    // 6.2 Leadership Team (Second Set)
    const leadershipTeam2 = [
        {
            name: "Sawani Dhawle",
            designation: "Presales & Engagement Lead",
            bio: "Drives solution positioning, pursuit strategy, and client relationships across complex Kinaxis transformations.",
            focusTitle: "Presales & Lead Generation",
            focusContent: "Owns SCM presales strategy, solution shaping, proposal leadership, and continuous lead generation.",
            linkedinUrl: "https://www.linkedin.com/in/sawani-dhawle-0741a14b/",
            image: sawani
        },
        {
            name: "Parag Deshpande",
            designation: "Director – Delivery",
            bio: "Delivery & Transformation Leader driving disciplined execution of digital transformation programs with focus on scalability and quality.",
            focusTitle: "Delivery Governance",
            focusContent: "Owns delivery management, cross-functional coordination, risk mitigation, and sustained business adoption.",
            linkedinUrl: "https://www.linkedin.com/in/parag-deshpande-10054a18/",
            image: parag
        },
        {
            name: "Akanksha Vaidya",
            designation: "Head of Recruitment | SAP & Supply Chain Talent Leader",
            bio: "Expert talent delivery across SAP and leading supply chain platforms including Kinaxis, o9 Solutions, Anaplan, and Blue Yonder.",
            focusTitle: "RECRUITMENT & TALENT LEADERSHIP",
            focusContent: "Specialized in delivering niche technology and supply chain talent to global clients across contract, freelance, and permanent hiring models",
            linkedinUrl: "https://www.linkedin.com/in/akankshavaidya/",
            image: akansha
        }
    ];

    // 6.3 Advisory Team (Retaining structure, mapping content if requested or keeping layout consistent)
    // User only gave content for the 4 above. I will adapt these to match the new props structure to avoid errors.
    const advisoryTeam = [
        {
            name: "Mukund Sangli",
            designation: "Senior Advisor – Global SCM Practice",
            bio: "Global Supply Chain Strategy & GTM Advisor leading SCM practice strategy, partner-led growth, co-selling motions, and industry-specific solution shaping.",
            focusTitle: "CXO Advisory & Value Realization", // Extracted/Inferred from previous prompt content
            focusContent: "Advises executive leadership on transformation roadmaps, operating models, and large-scale SCM programs.",
            linkedinUrl: "https://www.linkedin.com/in/mukund-sangli-70506920/",
            image: mukund
        },
        {
            name: "Loknath Rao (Lok)",
            designation: "Senior Advisor – Platform Solutions",
            bio: "Platform Strategy & Transformation Advisor shaping business-led platform strategies across advanced planning and enterprise transformation initiatives.",
            focusTitle: "Business-to-Platform Alignment",
            focusContent: "Guides platform selection, solution positioning, transformation models, and roadmap-driven adoption aligned to business outcomes.",
            linkedinUrl: "https://www.linkedin.com/in/loknathrao/",
            image: loknath
        }
    ];

    // 6.4 Mark9 Leadership Team (Placeholders, adapting structure)
    const mark9Team = [
        {
            name: "Giridharan Somaskandan",
            designation: "Co-Founder & CEO",
            bio: "SAP Architect & Expert | Decades of enterprise SAP transformation leadership and patents.",
            focusTitle: "Regional Delivery Leadership",
            focusContent: "Local oversight across APAC, MENA and North America",
            linkedinUrl: "https://www.linkedin.com/in/girthu/",
            image: giridharan
        },
        {
            name: "Anish Ashirgade",
            designation: "Co-Founder & CRO",
            bio: "Business Initiator & Strategist | Building business-led transformation models",
            focusTitle: "Advisory Network",
            focusContent: "Senior SAP ecosystem strategists & transformation specialists",
            linkedinUrl: "https://www.linkedin.com/in/ashirgade/",
            image: anish
        }
    ];

    return (
        <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F5F5] font-[Montserrat]">
            <div className="max-w-[85rem] mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[#1D1D1D]">
                    Leadership & <span className="text-[#D32F0F]">Advisory Teams</span>
                </h2>

                {/* 1. Advisory Team (Moved to Top) */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-1.5 h-10 bg-[#D32F0F]"></div>
                        <h3 className="text-3xl font-bold text-[#1D1D1D]">Advisory Team</h3>
                        <div className="h-[1px] flex-grow bg-gray-300 ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {advisoryTeam.map((leader, idx) => <LeaderCard key={idx} {...leader} />)}
                    </div>
                </div>

                {/* 2. Core Team */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-1.5 h-10 bg-[#D32F0F]"></div>
                        <h3 className="text-3xl font-bold text-[#1D1D1D]">Core Team</h3>
                        <div className="h-[1px] flex-grow bg-gray-300 ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {leadershipTeam1.map((leader, idx) => <LeaderCard key={idx} {...leader} />)}
                    </div>
                    {/* Second row of core team */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leadershipTeam2.map((leader, idx) => <LeaderCard key={idx} {...leader} />)}
                    </div>
                </div>

                {/* 3. Partner Team */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-1.5 h-10 bg-[#D32F0F]"></div>
                        <h3 className="text-3xl font-bold text-[#1D1D1D]">Partner Team</h3>
                        <div className="h-[1px] flex-grow bg-gray-300 ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mark9Team.map((leader, idx) => <LeaderCard key={idx} {...leader} />)}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LeadershipTeam;
