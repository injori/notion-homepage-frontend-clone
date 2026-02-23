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
            <h3 className="font-dmsans font-bold text-2xl mb-6 pt-8 mx-8">Trusted by teams that ship.</h3>

            <div className=" flex flex-col gap-4">
                    
                <Card className={clsx("w-[85%] mx-auto",

                )}>
                    <CardContent>
                        <img
                            src="/public/logos/OpenAI_Logo_1.png"
                            className={clsx("w-[25%] h-12 relative object-cover object-top mb-2",
                                "md:w-[20%] md:object-center md:h-12 md:mt-4"
                            )}
                        />

                        <p className={clsx(" font-sortsmillgoudy font-medium text-xl text-black",
                            "md:w-[85%] "
                        )}>
                            "There’s power in a single platform where you can do all your work. Notion is that single place."
                        </p>

                        <a
                            href=""
                            className={clsx(" font-dmsans text-base text-[#1e85e2] ")}
                        >
                            Read the full story
                        </a>

                        <iframe
                            className={clsx("w-[87%] rounded-3xl mt-4 mx-auto",
                                "md:h-[20rem]"
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

                <Card className={clsx("w-[85%] mx-auto")}>
                    <CardTitle>
                        <img
                            src="/logos/Toyota_Logo_1.png"
                            className={clsx(" w-[35%] mx-7 my-4")}
                        />
                    </CardTitle>

                    <CardDescription
                        className={clsx("font-dmsans font-medium text-base text-gray-800 mx-7 mb-2")}
                    >
                        Streamlined workflows to reduce timelines by 3x.
                    </CardDescription>
                </Card>

                <Card className={clsx("w-[85%] mx-auto ")}>
                    <CardTitle>
                        <img
                            src="/logos/Ramp_idxW_Yq9Eu_1.png"
                            className={clsx(" w-[23%] mx-7 my-3")}
                        />
                    </CardTitle>

                    <CardDescription
                        className={clsx("font-dmsans font-medium text-base text-gray-800 mx-7 mb-2")}
                    >
                        "With Notion, every person at Ramp has an AI agent."
                    </CardDescription>
                </Card>

                <Card className={clsx("w-[85%] mx-auto mb-6")}>
                    <CardTitle>
                        <img
                            src="/logos/Vercel_Logo_1.png"
                            className={clsx(" w-[25%] mx-7 my-3")}
                        />
                    </CardTitle>

                    <CardDescription
                        className={clsx("font-dmsans font-medium text-base text-gray-800 mx-7 mb-2")}
                    >
                        "Notion understands that you can solve a lot of problems with one tool."
                    </CardDescription>
                </Card>
            </div> 
        </div>
    )
}