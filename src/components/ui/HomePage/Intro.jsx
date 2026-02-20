import { Icon } from "lucide-react";

export default function Intro(){
    return (
        <>
            <div>

                <video
                    src = "/public/videos/homepage-hero-animation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className=" flex flex-col gap-2 justify-center items-center w-[80%] mx-auto">
                    
                    <h1 className="indent-10 w-[5em] text-4xl font-dmsans font-extrabold">One workspace.</h1>
                    <h1 className="text-center tracking-tight text-4xl font-dmsans font-bold">Zero busywork.</h1>

                    <p className="font-dmsans font-light text-sm w-[70%] tracking-tight leading-4">Notion is where your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70.</p>
                    <button className=" w-[70%] p-1 rounded-md font-dmsans font-medium bg-[#0075de] text-white ">Try Notion</button>
                    <button className="w-[70%] p-1 rounded-md font-dmsans font-medium bg-[#8bc2ef] opacity-0.5 text-[#0075de]">Request a demo</button>
                </div>

                

            </div>
            <div>
                <h5 className="font-dmsans font-light opacity-[0.5] text-xs text-center mt-4">
                    Trusted by top teams
                </h5>

                <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1">
                    <section className="flex items-center gap-2">
                        <img
                            src = "/logos/Figma_Symbol_1.png"
                            className="h-4"
                        />
                        <img
                            src="/logos/Figma_Logo_1.png"
                            className="h-4 object-contain"
                        />
                    </section>

                    <img
                        src = "/logos/OpenAI_Logo_1.png"
                        className="h-12 object-contain"
                    />
                    <img
                        src = "/logos/Ramp_idxW_Yq9Eu_1.png"
                        className="h-4 object-contain"
                    />
                    <img
                        src = "/logos/Cursor_Logo_1.png"
                        className="h-4 object-contain"
                    />
                    <img
                        src = "/logos/Vercel_Logo_1.png"
                        className="h-[0.85em] object-contain"
                    />
                </div>
            </div>
        </>

        
    )
}