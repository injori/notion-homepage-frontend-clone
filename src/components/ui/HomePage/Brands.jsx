import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import clsx from "clsx"

export default function Brands(){
    return(
        <div className="bg-[#f6f5f4] h-full"> 
            <h3 className={clsx("font-dmsans font-bold text-2xl mb-6 pt-8 mx-8",
                "md:text-4xl",
                "lg:text-[2.75em]"
            )}>
                Trusted by teams that ship.
            </h3>

            <div className=" flex flex-col gap-4">
                    
                <Card className={clsx("w-[85%] mx-auto",
                    "lg:w-[75%]"
                )}>
                    <CardContent>
                        <img
                            src="/public/logos/OpenAI_Logo_1.png"
                            className={clsx("w-[25%] h-12 relative object-cover object-top mb-2",
                                "md:w-[20%] md:object-center md:h-12 md:mt-4",
                                "xl:w-[20%] xl:object-center xl:h-14 xl:mt-8"
                            )}
                        />

                        <p className={clsx(" font-sortsmillgoudy font-medium text-xl text-black",
                            "md:w-[85%] ",
                            "xl:text-[1.5em]"
                        )}>
                            "There’s power in a single platform where you can do all your work. Notion is that single place."
                        </p>

                        <a
                            href=""
                            className={clsx(" font-dmsans text-base text-[#1e85e2] ",
                                "xl:text-xl+"
                            )}
                        >
                            Read the full story
                        </a>

                        <iframe
                            className={clsx("w-[87%] rounded-3xl mt-4 mx-auto",
                                "md:h-[20rem]",
                                "xl:h-[30em]"
                            )}
                            src="https://www.youtube.com/embed/HubmluaaFmc?si=sdTYEGK8c7C8skf3"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        />
                    </CardContent>
                </Card>

                <div className="lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:mx-auto gap-y-6 lg:w-[80%]">
                    <Card className={clsx("w-[85%] mx-auto",
                        " lg:w-[45%]"
                    )
                    }>
                        <CardTitle>
                            <img
                                src="/logos/Toyota_Logo_1.png"
                                className={clsx(" w-[35%] mx-7 my-4",
                                    "md:w-[22%] md:my-2"
                                )}
                            />
                        </CardTitle>

                        <CardDescription
                            className={clsx("font-dmsans font-medium text-base text-gray-800 mx-7 mb-2",
                                "text-lg"
                            )}
                        >
                            Streamlined workflows to reduce timelines by 3x.
                        </CardDescription>
                    </Card>

                    <Card className={clsx("w-[85%] mx-auto ",
                        "lg:w-[45%]"
                        )}>
                        <CardTitle>
                            <img
                                src="/logos/Ramp_idxW_Yq9Eu_1.png"
                                className={clsx(" w-[23%] mx-7 my-3",
                                    "md:w-[18%] md:my-2"
                                )}
                            />
                        </CardTitle>

                        <CardDescription
                            className={clsx("font-dmsans font-medium text-base text-gray-800 mx-7 mb-2",
                                "text-lg"
                            )}
                        >
                            "With Notion, every person at Ramp has an AI agent."
                        </CardDescription>
                    </Card>

                    <Card className={clsx("w-[85%] mx-auto mb-6",
                        "lg:w-[45%]"
                    )}>
                        <CardTitle>
                            <img
                                src="/logos/Vercel_Logo_1.png"
                                className={clsx(" w-[25%] mx-7 my-3",
                                    "md:w-[18%] md:my-2"
                                )}
                            />
                        </CardTitle>

                        <CardDescription
                            className={clsx("font-dmsans font-medium text-base text-gray-800 mx-7 mb-2",
                                "text-lg"
                            )}
                        >
                            "Notion understands that you can solve a lot of problems with one tool."
                        </CardDescription>
                    </Card>
                </div>
            </div> 
        </div>
    )
}