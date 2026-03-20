import clsx from "clsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Send, Calendar1} from "lucide-react"

export default function DownloadSection(){
    return(
        <div className={clsx({ "bg-[#f6f5f4]": true })}>
            <h3 className={clsx({ "font-dmsans font-bold text-2xl m-4 pt-8 mx-8": true },
                "md:text-4xl",
                "lg:text-[2.75em]"
            )}>
                Try for free.
            </h3>

            <div className={clsx({ "flex flex-col gap-2": true },
                "lg:flex-row lg:gap-x-8 m-4 "
            )}>

                <Card className={clsx({ "w-[85%] mx-auto": true },
                    "lg:w-[55%] lg:bg-[#f7f7f5] m-0"
                )}>
                    <CardTitle className={clsx({ "font-dmsans font-bold text-xl mx-5 mb-2 mt-6": true })}>
                        <img
                            src = "/logos/idzPHWF4i2_1771481341168.png"
                            className={clsx({ "w-[12%]": true })}
                        />
                        Get started on Notion
                    </CardTitle>
                    <CardDescription className={clsx({ "mx-6 text-black": true })}>
                        Your AI workspace with built-in agents.
                    </CardDescription>

                    <CardContent className={clsx({ "flex flex-col gap-2 my-4": true }
                    )}>
                        <button className={clsx({ "w-[70%] flex items-center p-2 bg-black text-white rounded-lg": true },
                            "lg:w-[50%]"
                        )}>
                            <img 
                                src="/logos/idHtv1PkDa_1771481846711.png"
                                className={clsx({ "w-[10%]": true })}
                            />
                            Download for Windows
                        </button>

                        <button className={clsx({ "w-[70%] flex items-center  g-1 p-1 bg-black text-white rounded-lg": true },
                            "lg:w-[50%]"
                        )}>
                            <img
                                src = "/logos/microsoft-store-logo-0.png"
                                className={clsx({ "w-[15%]": true })}
                            />
                            Download from the <br/> Microsoft Store 
                        </button>

                        <img
                            alt="A preview image of the notion desktop app"
                            src="https://www.notion.so/front-static/downloads/notion/en-US.png"
                            className={clsx({ "relative my-6 rounded-l-3xl": true },
                                "lg:w-[95%] lg:ml-auto"
                            )}
                        />
                    </CardContent>
                </Card>
                
                <div className="lg:flex lg:flex-col lg:gap-y-2">
                    <Card className={clsx({ "w-[85%] mx-auto": true },
                        "lg:w-[130%] lg:bg-[#f7f7f5] lg:m-0"
                    )}>
                        <CardTitle className={clsx({ "font-dmsans font-bold text-xl mx-5  mb-2 mt-6": true })}>
                            <Send className={clsx({ "w-12 h-9": true })}/>
                            Notion Mail
                        </CardTitle>
                        <CardDescription className={clsx({ "mx-6 text-black": true })}>
                            The AI inbox that thinks like you.
                        </CardDescription>
                        <CardContent className={clsx({ "my-2": true })}>
                            <button className={clsx({ "w-[45%] border-gray-200 p-2 border-[0.125em] rounded-xl": true })}>
                                Download
                            </button>
                        </CardContent>
                    </Card>

                    <Card className={clsx({ "w-[85%] mx-auto": true },
                        "lg:w-[130%] lg:bg-[#f7f7f5] lg:m-0"
                    )}>
                        <CardTitle className={clsx({ "font-dmsans font-bold text-xl mx-5 mb-2 mt-6": true })}>
                            <Calendar1 className={clsx({ "w-12 h-9": true })}/>
                            Notion Calendar
                        </CardTitle>
                        <CardDescription className={clsx({ "mx-6 text-black": true })}>
                            Time, scheduling, tasks—all together.
                        </CardDescription>
                        <CardContent className={clsx({ "my-2": true })}>
                            <button className={clsx({ "w-[45%] border-gray-200 p-2 border-[0.125em] rounded-xl": true })}>
                                Download
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
             <p className={clsx({ "mx-8 mb-4 mt-2 text-sm text-gray-600": true },
                    "md:text-lg",
                    "lg:text-xl"
                )}>
                    Notion is always at home <u>right in your browser.</u>
            </p>
        </div>
    )
}