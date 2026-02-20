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
        <>
            <h3>Try for free.</h3>

            <div>

                <Card>
                    <CardTitle>
                        <img
                            src = "/public/logos/idzPHWF4i2_1771481341168.png"
                        />
                        Get started on Notion
                    </CardTitle>
                    <CardDescription>
                        Your AI workspace with built-in agents.
                    </CardDescription>

                    <CardContent>
                        <button>
                            <img 
                                src="/public/logos/idHtv1PkDa_1771481846711.png"
                            />
                            Download for Windows
                        </button>

                        <button>
                            <img
                                src = "/public/logos/png-transparent-windows-logo-illustration-microsoft-store-computer-icons-store-angle-text-rectangle-thumbnail.png"
                            />
                            Download from the <br/> <span> Microsoft Store</span>
                        </button>

                        <img
                            alt="A preview image of the notion desktop app"
                            src="https://www.notion.so/front-static/downloads/notion/en-US.png"
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardTitle>
                        <Send/>
                        Notion Mail
                    </CardTitle>
                    <CardDescription>
                        The AI inbox that thinks like you.
                    </CardDescription>
                    <CardContent>
                        <button>
                            Download
                        </button>
                    </CardContent>
                </Card>

                <Card>
                    <CardTitle>
                        <Calendar1/>
                        Notion Calendar
                    </CardTitle>
                    <CardDescription>
                        Time, scheduling, tasks—all together.
                    </CardDescription>
                    <CardContent>
                        <button>
                            Download
                        </button>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}