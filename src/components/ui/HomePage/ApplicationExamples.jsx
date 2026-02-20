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
                className="w-[70%] mx-8"
            />
            <h3 className="font-dmsans font-bold text-2xl mb-2 mt-4 mx-8">Let Notion AI handle the busywork.</h3>
            <p className=" w-[80%] mx-8 font-dmsans font-light leading-tight ">Pick a use case to see how Notion does the work for you.</p>
            <a href = "" className="text-[#1e85e2] flex gap-1 mx-8 mb-3"><span>Explore more</span> <span><MoveRight/></span></a>

            <div className=" w-[90%] mx-auto grid grid-cols-2 gap-y-2 [column-gap:0.75em] mb-8">

                <Card className = " w-full">
                    <CardTitle>
                        <MessageCircleQuestionMark className="m-2"/>
                    </CardTitle>
                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                        Go from brainstorm to roadmap <MoveRight className=" mx-4"/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <List className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                       Turning meetings into social posts  <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <Book className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                        Organixe your workspace <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <User className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                       Onboard a new hire  <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <Globe className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                        Revise a landing page <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <Map className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                        Plan an offsite <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <Utensils className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                        Track favorite restautants <MoveRight/>
                    </CardDescription>
                </Card>

                <Card className = " w-full">
                    <CardTitle>
                        <Target className="m-2"/>
                    </CardTitle>

                    <CardDescription className = "font-dmsans font-bold text-gray-600">
                        Transform notes into tasks <MoveRight/>
                    </CardDescription>
                </Card>
            </div>
        </>
    )
}