import clsx from "clsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MessageCircleQuestionMark, MoveRight, List, Book, User, Globe, Map, Utensils, Target } from 'lucide-react';

export default function ApplicationExamples(){
    return(
        <>
            <img
                src="https://images.ctfassets.net/spoqsaf9291f/66v6l4XnHVR2L6Sr1lgZdW/b36806193b2a88b4d1e5e1cdb12de77b/asset-use-cases.png"
                className={clsx({ "w-[70%] mx-8 mt-6": true },
                    "lg:w-[40%]"
                )}
            />
            <h3 className={clsx({ "font-dmsans font-bold text-2xl mb-2 mt-8 mx-8": true },
                "md:text-4xl",
                "lg:text-[2.75em]",
                "xl:text-5xl"
            )}>
                Let Notion AI handle the busywork.
            </h3>
            <p className={clsx({ "w-[80%] mx-8 font-dmsans font-light leading-tight": true },
                "md:text-lg",
                "lg:text-xl",
                "xl:text-2xl"
            )}>
                Pick a use case to see how Notion does the work for you.
            </p>
            <a href="" className={clsx({ "text-[#1e85e2] flex gap-1 mx-8 mb-6": true },
                "md:text-lg",
                "lg:text-xl"
            )}>
                <span>Explore more</span> 
                <span><MoveRight/></span>
            </a>

            <div className={clsx({ "w-[90%] mx-auto grid grid-cols-2 gap-y-2 [column-gap:0.75em] mb-8": true },
                "lg:w-[85%]"
            )}>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <MessageCircleQuestionMark className={clsx({ "m-2": true })}/>
                    </CardTitle>
                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                    )}>
                        Go from brainstorm to roadmap <MoveRight className={clsx({ "mx-4": true })}/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <List className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                    )}>
                       Turning meetings into social posts  <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <Book className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                        )}>
                        Organixe your workspace <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <User className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                        )}>
                       Onboard a new hire  <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <Globe className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                        )}>
                        Revise a landing page <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <Map className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                        )}>
                        Plan an offsite <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <Utensils className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                        )}>
                        Track favorite restautants <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className={clsx({ "w-full": true })}>
                    <CardTitle>
                        <Target className={clsx({ "m-2": true })}/>
                    </CardTitle>

                    <CardDescription className={clsx({ "font-dmsans font-bold text-gray-600 m-2": true },
                        "md:text-lg",
                        "xl:text-xl"
                        )}>
                        Transform notes into tasks <MoveRight/>
                    </CardDescription>
                </Card>
            </div>
        </>
    )
}