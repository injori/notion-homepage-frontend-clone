import clsx from "clsx"
import { MoveRight } from "lucide-react"
import { footerData } from "./data.js"

export default function FooterSection(){
    return(
        <>
            <div className={clsx({ "mx-6 mt-4": true })}>
                <section className={clsx({ "flex gap-1 items-center": true })}>
                    <img
                        src = "/logos/idzPHWF4i2_1771481341168.png"
                        className={clsx({ "w-[12%]": true },
                            "md:w-[6%]"
                        )}
                    />
                    <h4 className={clsx({ "font-dmsans font-bold text-2xl": true })}> Notion</h4> 
                </section>
                
                <section className={clsx({ "flex gap-2 opacity-50 mx-6 my-2": true })}>
                    <img
                        src = "/logos/Instagram_Symbol_1.png"
                        className={clsx({ "w-[5%] h-[10%]": true },
                            "md:w-[3%] md:h-[8%]"
                        )}
                    />
                    <img
                        src = "/logos/LinkedIn_Symbol_1.png"
                        className={clsx({ "w-[6%] h-[10%]": true },
                            "md:w-[3%] md:h-[8%]"
                        )}
                    />
                    <img
                        src = "/logos/X_idJxGuURW1_1.png"
                        className={clsx({ "w-[5%] h-[10%]": true },
                            "md:w-[3%] md:h-[8%]"
                        )}
                    />
                    <img
                        src = "/logos/YouTube_Symbol_1.png"
                        className={clsx({ "w-[6%] h-[10%]": true },
                            "md:w-[3%] md:h-[8%]"
                        )}
                    />
                </section>
                <p className={clsx({ "font-dmsans font-light text-gray-500 text-sm m-4": true })}>
                    © 2026 Notion Labs cloned by hibst. All rights reserved.
                </p>
            </div>
            <div className={clsx({ "grid grid-cols-2 gap-2 mx-6 my-6": true })}>
                
                {footerData.map(
                    (items)=>{
                        return(
                            <section key={items.category}>
                                <h4 className={clsx({ "font-dmsans font-semibold": true })}>
                                    {items.category}
                                </h4>
                                {items.elements.map(
                                    (items) => (
                                        <h5 
                                            key={items} 
                                            className={clsx({ "font-dmsans font-light text-gray-800": true })}
                                        >
                                            {items}
                                        </h5>
                                    )
                                )}
                            </section>
                        )
                    }
                )}

            </div>
        </>
    )
}