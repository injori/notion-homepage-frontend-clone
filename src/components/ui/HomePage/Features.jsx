import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Features(){
    return (
        <div className="bg-[#f6f5f4]">
            <h3 className="font-dmsans font-bold text-2xl m-4 mt-4 mx-8">Introducing Notion 3.0</h3>
            <div className = "flex flex-col gap-4 m-2">
                <Card className = "w-[85%] mx-auto">

                    <CardHeader>
                        <CardDescription className = "font-dmsans">Notion Agent <span className=" font-dmsans bg-[#e3f6ff] text-[#62aef0] rounded-lg pl-2 px-2">New</span></CardDescription>
                        <CardTitle>You assign the tasks. Your Notion agent does the work.</CardTitle>
                    </CardHeader>

                    <CardContent className = "relative">
                        <video
                            src = "/slide_vids/Slide_A_1584x1080_isolated_final_compressed_500k.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <video
                            src = "/videos/clip_noseyDuck.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className = "w-[30%] absolute bottom-16 right-0 mix-blend-multiply"
                        />
                        <h3 className="font-dmsans font-bold">Hands off Your busywork</h3>
                        <p className="font-dmsans font-light">What used to take days in minutes. Tell it your goal and watch it work.</p>
                    </CardContent>   
                </Card>

                <Card className = "w-[85%] mx-auto">
                    <CardHeader>
                        <CardDescription className = "font-dmsans">Custom Agents <span className="font-dmsans bg-[#e3f6ff] text-[#62aef0] pl-2 px-2 rounded-lg">Coming soon</span></CardDescription>
                        <CardTitle className = "font-dmsans">Automate repetitive tasks.</CardTitle>
                    </CardHeader>

                    <CardContent className = "relative w-full h-[25em] bg-[#78736f]">
                            <img
                                className = "object-cover [object-position:left\ center] w-[50%] h-[70%] border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-tl-2xl rounded-tr-2xl absolute bottom-0 "
                                src="https://images.ctfassets.net/spoqsaf9291f/5sE5GLBT9su7AZWQzUp8tG/0f3f3a6fc5c2ddb82174a5b8f57c6798/image.png"
                                alt="Homepage | Fall 25 | Bento 0 Wide | Left | Desktop"
                            />
                        <img
                            className = "object-cover object-left w-[60%] h-[90%] border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-tl-2xl rounded-tr-2xl absolute bottom-0 right-0 "
                            alt="Homepage | Fall 25 | Bento 0 Wide | Right | Desktop"
                            src="https://images.ctfassets.net/spoqsaf9291f/3ZLuTZxiiAEkG65LcdQEcq/e540a03193deb64df564b18f5f879289/en-US_agents-b.jpg"
                        />
                       <video
                            src="/videos/clip_customAgents.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[30%] absolute bottom-0 right-0 mix-blend-multiply"
                        /> 

                    </CardContent>
                </Card>

                <Card className = "w-[85%] mx-auto">
                    <CardHeader>
                        <CardDescription className = "font-dmsans">Enterprise Search</CardDescription>
                        <CardTitle className = "font-dmsans">One search for everything</CardTitle>
                    </CardHeader>

                    <CardContent className = "relative w-full h-[15.625em] bg-[#f67463]">

                        <img
                            alt="Homepage | Fall 25 | Bento 1"
                            className="rounded-xl w-[90%] h-[95%] border-solid border-gray-300 object-contain object-top absolute bottom-0 left-1/2 -translate-x-1/2"
                            src="https://images.ctfassets.net/spoqsaf9291f/5gAtostQzWHe0xapLDsst1/23d29524e34f0012354a2448d2311b16/en-US_EnterpriseSearch.jpg"
                        />
                        <video
                            src = "/videos/clip_noseyGlasses.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[30%] absolute bottom-0 right-0 mix-blend-multiply"
                        />

                    </CardContent>
                </Card>

                <Card className = "w-[85%] mx-auto">
                    <CardHeader>
                        <CardDescription className = "font-dmsans">AI Meeting Notes</CardDescription>
                        <CardTitle className = "font-dmsans">Pergect notes, every time.</CardTitle>
                    </CardHeader>

                    <CardContent className = "relative w-full h-[15.625em] bg-[#62aef0]">

                        <img
                            src="https://images.ctfassets.net/spoqsaf9291f/6ryGYBBeFdl21HUR07Rf45/805485a867aec66c8aca2087dfd7cb19/en-US_MeetingNotes.jpg"
                            alt="Homepage | Fall 25 | Bento 2 | Desktop"
                            className=" w-[60] h-[90%] object-cover object-center absolute bottom-0 left-1/2 -translate-x-1/2 border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-tl-2xl rounded-tr-2xl"
                        />
                        <video
                            src = "/videos/clip_noseyHeadset.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[30%] absolute bottom-0 right-0 mix-blend-multiply"
                        />

                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
