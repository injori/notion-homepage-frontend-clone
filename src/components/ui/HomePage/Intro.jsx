import { Icon } from "lucide-react";
import clsx from "clsx";
export default function Intro(){
    return (
        <>
            <div>

                <video
                    src = "/videos/homepage-hero-animation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className= {clsx("mx-auto mt-4 w-[95%]",
                        "lg:w-[80%]"
                    )}
                />

                <div className=" flex flex-col gap-2 justify-center items-center w-[80%] mx-auto">
                    
                    <h1 className={ clsx(
                        "indent-10 w-[5em] text-4xl font-dmsans font-extrabold",
                        "md:w-[75%] md:text-center md:text-5xl",
                        "lg:text-6xl",
                        "xl:text-7xl"
                    )}>
                        One workspace.
                    </h1>

                    <h1
                        className={clsx(
                            "text-center tracking-tight text-4xl font-dmsans font-bold",
                            "md:w-[75%] md:pl-8 md:text-5xl",
                            "lg:text-6xl",
                            "xl:text-7xl"
                        )}
                        >
                        Zero busywork.
                    </h1>
                    <p
                        className={clsx(
                            "font-dmsans font-light text-sm w-[70%] tracking-tight leading-4 mb-2",
                            "md:w-[85%] md:text-center md:text-black md:text-lg ",
                            "lg:text-2xl",
                            "xl:text-3xl"
                        )}
                        >
                        Notion is where your teams and AI agents capture knowledge, find answers,
                        and automate projects. Now a team of 7 feels like 70.
                                            </p>
                        <section
                            className={clsx(
                                "flex flex-col gap-2 w-[85%]",
                                "md:w-[60%] md:flex md:flex-row md:justify-center md:items-center"
                            )}
                            >
                            <button
                                className={clsx(
                                "w-full p-1 rounded-md font-dmsans font-medium bg-[#1a86f0] text-white hover:bg-[#005bb5]",
                                "md:p-2 md:text-lg",
                                "lg:text-xl lg:font-semibold",
                                "xl:text-2xl"
                                )}
                            >
                                Try Notion
                            </button>

                            <button
                                className={clsx(
                                "w-full p-1 rounded-md font-dmsans font-medium bg-[#8bc2ef] opacity-0.5 text-[#0075de] hover:bg-[#a3d0f8]",
                                "md:p-2 md:text-lg",
                                "lg:text-xl lg:font-semibold",
                                "xl:text-2xl"
                                )}
                            >
                                Request a demo
                            </button>
                        </section>
                </div>

                

            </div>
            <div>
                <h5
                    className={clsx(
                        "font-dmsans font-light opacity-[0.5] text-xs text-center mt-10",
                        "md:text-sm",
                        "lg:text-lg"
                    )}
                    >
                    Trusted by top teams
                </h5>

                <div
                className={clsx(
                    "flex flex-wrap items-center justify-center gap-x-7 gap-y-1",
                    "md:w-full ",
                    "lg:gap-x-10"
                )}
                >                   
                    <section
                        className={clsx(
                        "flex items-center gap-2"
                        )}
                    >
                        <img
                        src="/logos/Figma_Symbol_1.png"
                        className={clsx(
                            "h-4",
                            "md:h-5",
                            "lg:h-7"
                        )}
                        />

                        <img
                        src="/logos/Figma_Logo_1.png"
                        className={clsx(
                            "h-4 object-contain,",
                            "md:h-5",
                            "lg:h-6"
                        )}
                        />
                    </section>

                    <img
                        src="/logos/OpenAI_Logo_1.png"
                        className={clsx(
                            "h-12 object-contain",
                            "md:h-14",
                            "lg:h-16"
                        )}
                    />

                    <img
                        src="/logos/Ramp_idxW_Yq9Eu_1.png"
                        className={clsx(
                            "h-4 object-contain,",
                            "md:h-5",
                            "lg:h-6"
                        )}
                    />
                    

                    <img
                        src="/logos/Cursor_Logo_1.png"
                        className={clsx(
                            "h-4 object-contain,",
                            "md:h-5",
                            "lg:h-6"
                        )}
                    />

                    <img
                        src="/logos/Vercel_Logo_1.png"
                        className={clsx(
                            "h-[0.85em] object-contain",
                            "md:h-[0.95em]",
                            "lg:h-[1.15em]"

                        )}
                    />
                </div>
            </div>
        </>

        
    )
}