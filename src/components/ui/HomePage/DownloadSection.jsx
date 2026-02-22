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
        <div className="bg-[#f6f5f4]">
            <h3 className="font-dmsans font-bold text-2xl m-4 mt-4 mx-8">Try for free.</h3>

            <div className="flex flex-col gap-2">

                <Card className = "w-[85%] mx-auto">
                    <CardTitle className = " font-dmsans font-bold text-xl mx-5 mb-2 mt-6">
                        <img
                            src = "/logos/idzPHWF4i2_1771481341168.png"
                            className=" w-[12%]"
                        />
                        Get started on Notion
                    </CardTitle>
                    <CardDescription className = " mx-6 text-black">
                        Your AI workspace with built-in agents.
                    </CardDescription>

                    <CardContent className = " flex flex-col gap-2 my-4">
                        <button className=" w-[70%] flex items-center p-2 bg-black text-white rounded-lg">
                            <img 
                                src="/logos/idHtv1PkDa_1771481846711.png"
                                className=" w-[10%]"
                            />
                            Download for Windows
                        </button>

                        <button className=" w-[70%] flex items-center  g-1 p-1 bg-black text-white rounded-lg">
                            <img
                                src = "/logos/microsoft-store-logo-0.png"
                                className="w-[15%]"
                            />
                            Download from the <br/> Microsoft Store 
                        </button>

                        <img
                            alt="A preview image of the notion desktop app"
                            src="https://www.notion.so/front-static/downloads/notion/en-US.png"
                            className=" relative my-6 rounded-l-3xl"
                        />
                    </CardContent>
                </Card>

                <Card className = "w-[85%] mx-auto">
                    <CardTitle className = " font-dmsans font-bold text-xl mx-5  mb-2 mt-6">
                        <Send className="w-12 h-9"/>
                        Notion Mail
                    </CardTitle>
                    <CardDescription className = " mx-6 text-black">
                        The AI inbox that thinks like you.
                    </CardDescription>
                    <CardContent className = "my-2">
                        <button className="w-[45%] border-gray-200 p-2 border-[0.125em] rounded-xl">
                            Download
                        </button>
                    </CardContent>
                </Card>

                <Card className = "w-[85%] mx-auto">
                    <CardTitle className = " font-dmsans font-bold text-xl mx-5 mb-2 mt-6">
                        <Calendar1 className="w-12 h-9"/>
                        Notion Calendar
                    </CardTitle>
                    <CardDescription className = " mx-6 text-black">
                        Time, scheduling, tasks—all together.
                    </CardDescription>
                    <CardContent className = "my-2">
                        <button className="w-[45%] border-gray-200 p-2 border-[0.125em] rounded-xl">
                            Download
                        </button>
                    </CardContent>
                </Card>

                <p className="mx-8 mb-4 mt-2 text-sm text-gray-800">Notion is always at home <u>right in your browser.</u> </p>
            </div>
        </div>
    )
}