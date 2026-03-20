import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import clsx from "clsx"

export default function Features(){
    return (
        <div className={clsx("bg-[#f6f5f4]")}>
            <h3
                className={clsx(
                "font-dmsans font-bold text-2xl m-4 mx-8 pt-8",
                "md:text-4xl",
                "lg:text-[2.75em]"
                )}
            >
                Introducing Notion 3.0
            </h3>

            <div className={clsx("flex flex-col gap-4 m-2")}>

                <Card className={clsx("w-[85%] mx-auto")}>
                <CardHeader>
                    <CardDescription className={clsx("font-dmsans")}>
                    Notion Agent 
                    <span
                        className={clsx(
                        "font-dmsans bg-[#e3f6ff] text-[#62aef0]",
                        "rounded-lg pl-2 px-2"
                        )}
                    >
                        New
                    </span>
                    </CardDescription>

                    <CardTitle>
                    You assign the tasks. Your Notion agent does the work.
                    </CardTitle>
                </CardHeader>

                <CardContent className={clsx("relative")}>
                    <video
                    src="/slide_vids/Slide_A_1584x1080_isolated_final_compressed_500k.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    />

                    <video
                    src="/videos/clip_noseyDuck.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={clsx(
                        "w-[30%] absolute bottom-16 right-0",
                        "mix-blend-multiply"
                    )}
                    />

                    <h3 className={clsx("font-dmsans font-bold")}>
                    Hands off Your busywork
                    </h3>

                    <p className={clsx("font-dmsans font-light")}>
                    What used to take days in minutes. Tell it your goal and watch it
                    work.
                    </p>
                </CardContent>
                </Card>

                <Card className={clsx("w-[85%] mx-auto")}>
                    <CardHeader>
                        <CardDescription className={clsx("font-dmsans")}>
                            Custom Agents
                            <span className={clsx("font-dmsans bg-[#e3f6ff] text-[#62aef0] pl-2 px-2 rounded-lg")}>
                                Coming soon
                            </span>
                        </CardDescription>

                        <CardTitle className={clsx("font-dmsans")}>
                            Automate repetitive tasks.
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={clsx("relative w-full h-[25em] bg-[#78736f]",
                        "lg:h-[30em]"
                    )}>
                        <img
                            className={clsx(
                                "object-cover [object-position:left\ center] w-[50%] h-[70%] border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-tl-2xl rounded-tr-2xl absolute bottom-0"
                            )}
                            src="https://images.ctfassets.net/spoqsaf9291f/5sE5GLBT9su7AZWQzUp8tG/0f3f3a6fc5c2ddb82174a5b8f57c6798/image.png"
                            alt="Homepage | Fall 25 | Bento 0 Wide | Left | Desktop"
                        />

                        <img
                            className={clsx(
                                "object-cover object-left w-[60%] h-[90%] border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-tl-2xl rounded-tr-2xl absolute bottom-0 right-0"
                            )}
                            alt="Homepage | Fall 25 | Bento 0 Wide | Right | Desktop"
                            src="https://images.ctfassets.net/spoqsaf9291f/3ZLuTZxiiAEkG65LcdQEcq/e540a03193deb64df564b18f5f879289/en-US_agents-b.jpg"
                        />

                        <video
                            src="/videos/clip_customAgents.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={clsx("w-[30%] absolute bottom-0 right-0 mix-blend-multiply")}
                        />
                    </CardContent>
                </Card>

                <Card className={clsx("w-[85%] mx-auto")}>
                    <CardHeader>
                        <CardDescription className={clsx(
                            "font-dmsans",
                            "md:text-base md:text-gray-600" 
                        )}>
                            Enterprise Search
                        </CardDescription>
                        <CardTitle className={clsx(
                            "font-dmsans",
                            "md:text-lg"
                        )}>
                            One search for everything
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={clsx(
                        "relative w-full h-[15.625em] bg-[#f67463]",
                        "md:h-[22em]",
                        "lg:h-[30em]"
                    )}>
                        <img
                            alt="Homepage | Fall 25 | Bento 1"
                            className={clsx(
                                "rounded-xl w-[90%] h-[95%] border-solid border-gray-300 object-contain object-top absolute bottom-0 left-1/2 -translate-x-1/2",
                                " md:object-cover md:w-[93%]"
                            )}
                            src="https://images.ctfassets.net/spoqsaf9291f/5gAtostQzWHe0xapLDsst1/23d29524e34f0012354a2448d2311b16/en-US_EnterpriseSearch.jpg"
                        />
                        <video
                            src="/videos/clip_noseyGlasses.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={clsx("w-[30%] absolute bottom-0 right-0 mix-blend-multiply",
                                "md:w-[20%]"
                            )}
                        />
                    </CardContent>
                </Card>

                <Card className={clsx("w-[85%] mx-auto mb-5")}>
                    <CardHeader>
                        <CardDescription className={clsx("font-dmsans",
                        "md:text-base md:text-gray-600" 
                        )}>
                            AI Meeting Notes
                        </CardDescription>
                        <CardTitle className={clsx("font-dmsans",
                            "md:text-lg"
                        )}>
                            Perfect notes, every time.
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={clsx(
                        "relative w-full h-[15.625em] bg-[#62aef0]",
                        "md:h-[22em]",
                        "lg:h-[30em]"

                    )}>
                        <img
                            src="https://images.ctfassets.net/spoqsaf9291f/6ryGYBBeFdl21HUR07Rf45/805485a867aec66c8aca2087dfd7cb19/en-US_MeetingNotes.jpg"
                            alt="Homepage | Fall 25 | Bento 2 | Desktop"
                            className={clsx(
                                " w-[85%] h-[90%] object-cover object-center absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-tl-2xl rounded-tr-2xl",
                                "md:border-t-[0.40rem] md:border-r-[0.40rem]  md:border-l-[0.40rem] md:rounded-tl-3xl md:rounded-tr-3xl "
                            )}
                        />
                        <video
                            src="/videos/clip_noseyHeadset.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={clsx(
                                "w-[30%] absolute bottom-0 right-0 mix-blend-multiply",
                                "md:w-[20%] right-5"
                            )}
                        />
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
