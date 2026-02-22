import { MoveRight } from "lucide-react"
import { footerData } from "./data.js"

export default function FooterSection(){
    return(
        <>
            <div className="mx-6 mt-4">
                <section className="flex gap-1 items-center">
                    <img
                        src = "/logos/idzPHWF4i2_1771481341168.png"
                        className=" w-[12%]"
                    />
                    <h4 className=" font-dmsans font-bold text-2xl"> Notion</h4> 
                </section>
                
                <section className="flex gap-2 opacity-50 mx-6 my-2">
                    <img
                        src = "/logos/Instagram_Symbol_1.png"
                        className="w-[5%] h-[10%]"
                    />
                    <img
                        src = "/logos/LinkedIn_Symbol_1.png"
                        className="w-[6%] h-[10%]"
                    />
                    <img
                        src = "/logos/X_idJxGuURW1_1.png"
                        className="w-[5%] h-[10%]"
                    />
                    <img
                        src = "/logos/YouTube_Symbol_1.png"
                        className="w-[6%] h-[10%]"
                    />
                </section>
                <p className="font-dmsans font-light text-gray-500 text-sm m-4">© 2026 Notion Labs cloned by hibst. All rights reserved. </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mx-6 my-6">
                
                {footerData.map(
                    (items)=>{
                        return(
                            <section key={items.category}>
                                <h4 className=" font-dmsans font-semibold">{items.category}</h4>
                                {items.elements.map(
                                    (items) => <h5 key={items} className=" font-dmsans font-light text-gray-800">{items}</h5>
                                )}
                            </section>
                        )
                    }
                )}

            </div>
        </>
    )
}
