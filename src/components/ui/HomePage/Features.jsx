import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Features(){
    return (
        <>
            <h3>Introducing Notion 3.0</h3>
            <div>
                <Card>

                    <CardHeader>
                        <CardDescription>Notion Agent <span className=" bg-[#e3f6ff] rounded-[25%] pl-2 px-2">New</span></CardDescription>
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
                        <h3 className="font-bold">Hands off Your busywork</h3>
                        <p>What used to take days in minutes. Tell it your goal and watch it work.</p>
                    </CardContent>   
                </Card>

                <Card>
                    <CardHeader>
                        <CardDescription>Custom Agents <span>Coming soon</span></CardDescription>
                        <CardTitle>Automate repetitive tasks.</CardTitle>
                    </CardHeader>

                    <CardContent className = "relative w-full h-[500px] bg-[#78736f]">
                            <img
                                className = "object-cover [object-position:left\ center] w-[50%] h-[70%] border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-2xl absolute bottom-0 "
                                src="https://images.ctfassets.net/spoqsaf9291f/5sE5GLBT9su7AZWQzUp8tG/0f3f3a6fc5c2ddb82174a5b8f57c6798/image.png"
                                alt="Homepage | Fall 25 | Bento 0 Wide | Left | Desktop"
                            />
                        <img
                            className = "object-cover object-left w-[60%] h-[90%] border-t-[0.25rem] border-t-black border-r-[0.25rem] border-r-black border-l-[0.25rem] border-l-black rounded-2xl absolute bottom-0 right-0 "
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

                <Card>
                    <CardHeader>
                        <CardDescription>Enterprise Search</CardDescription>
                        <CardTitle>One search for everything</CardTitle>
                    </CardHeader>

                    <CardContent>

                        <img
                            alt="Homepage | Fall 25 | Bento 1"
                            
                            src="https://images.ctfassets.net/spoqsaf9291f/5gAtostQzWHe0xapLDsst1/23d29524e34f0012354a2448d2311b16/en-US_EnterpriseSearch.jpg"
                        />
                        <video
                            src = "/videos/clip_noseyGlasses.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardDescription>AI Meeting Notes</CardDescription>
                        <CardTitle>Pergect notes, every time.</CardTitle>
                    </CardHeader>

                    <CardContent>

                        <img
                            src="https://images.ctfassets.net/spoqsaf9291f/6ryGYBBeFdl21HUR07Rf45/805485a867aec66c8aca2087dfd7cb19/en-US_MeetingNotes.jpg"
                            alt="Homepage | Fall 25 | Bento 2 | Desktop"
                        />
                        <video
                            src = "/videos/clip_noseyHeadset.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                    </CardContent>
                </Card>

            </div>
        </>
    )
}
