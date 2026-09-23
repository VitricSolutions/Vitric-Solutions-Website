import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, ShieldCheck, Radio, Network } from "lucide-react";
import { useDemo } from "../../Context/DemoContext";

gsap.registerPlugin(ScrollTrigger);

const VendorSystem = () => {
    const { openDemo } = useDemo();
    const sectionRef = useRef(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".vms-stat",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                    }
                }
            );
        }, sectionRef);

        // Canvas Network Animation
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = 500;
            canvas.height = 500;

            const particles: { x: number, y: number, vx: number, vy: number }[] = [];
            for (let i = 0; i < 30; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }

            function animate() {
                if (!ctx || !canvas) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw connections
                ctx.strokeStyle = 'rgba(234, 88, 12, 0.2)'; // Orange tint
                ctx.lineWidth = 1;

                // Draw center hub lines
                const cx = canvas.width / 2;
                const cy = canvas.height / 2;

                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                    // Connect to center
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();

                    // Draw particle
                    ctx.fillStyle = '#ea580c';
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                });

                requestAnimationFrame(animate);
            }
            animate();
        }

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-4 md:px-8 lg:px-16 bg-[#fafafa] text-[#1D1D1D] font-[Montserrat] overflow-hidden relative border-t border-gray-100">

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-20 items-center relative z-10">

                {/* Visual: The Network Mesh */}
                <div className="flex-1 flex justify-center w-full relative">
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60 max-w-[500px] mx-auto"></canvas>

                    <div className="relative w-[400px] h-[400px] flex items-center justify-center">

                        {/* Central Hub */}
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(234,88,12,0.2)] z-20 relative border-4 border-[#D32F0F]">
                            <Network className="w-12 h-12 text-[#D32F0F]" />
                            <div className="absolute -bottom-10 text-[#D32F0F] font-bold tracking-widest text-sm uppercase">Vitric Hub</div>
                        </div>

                        {/* Floating Satellites */}
                        <div className="absolute top-0 right-10 p-4 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                            <span className="text-sm font-bold text-gray-700">Active Vendor</span>
                        </div>
                        <div className="absolute bottom-10 left-0 p-4 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                            <ShieldCheck className="w-4 h-4 text-[#D32F0F]" />
                            <span className="text-sm font-bold text-gray-700">Verified</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F0F]/10 text-[#D32F0F] rounded-full text-sm font-bold mb-6 border border-[#D32F0F]/20">
                        <Radio className="w-4 h-4" />
                        Vendor Management System
                    </div>
                    <h2 className="text-5xl font-bold mb-6 leading-tight">Connected Ecosystem.<br /> <span className="text-[#D32F0F]">Total Visibility.</span></h2>
                    <p className="text-xl text-gray-500 font-[Lato] mb-10 leading-relaxed">
                        Simplifying onboarding, collaboration, and performance tracking. Vitric’s VMS connects you to your entire supply chain through a secure, centralized digital mesh.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="vms-stat p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#D32F0F] shadow-sm transition-colors cursor-pointer group">
                            <FileText className="w-6 h-6 text-gray-400 group-hover:text-[#D32F0F] mb-3 transition-colors" />
                            <h4 className="font-bold text-lg mb-1">Master Data</h4>
                            <p className="text-sm text-gray-500">Centralized management.</p>
                        </div>
                        <div className="vms-stat p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#1D1D1D] shadow-sm transition-colors cursor-pointer group">
                            <ShieldCheck className="w-6 h-6 text-gray-400 group-hover:text-[#1D1D1D] mb-3 transition-colors" />
                            <h4 className="font-bold text-lg mb-1">Compliance</h4>
                            <p className="text-sm text-gray-500">Risk control & tracking.</p>
                        </div>
                    </div>

                    <button
                        onClick={openDemo}
                        className="px-8 py-3 bg-[#D32F0F] text-white rounded-lg text-sm font-bold hover:bg-[#b01e00] transition-colors shadow-lg shadow-[#D32F0F]/20 cursor-pointer">
                        Request a Demo
                    </button>
                </div>

            </div>
        </section>
    );
};

export default VendorSystem;
