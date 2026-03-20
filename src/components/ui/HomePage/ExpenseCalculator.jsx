import clsx from "clsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {checkboxList} from "./data.js"

export default function ExpenseCalculator(){
    return(
        <>
            <div className={clsx("lg:flex lg:gap-3 lg:relative")}>
                <img
                    className={clsx({ "w-[75%] mx-8 my-6": true },
                        "lg:w-[34%] lg:h-[40%] lg:order-2 lg:absolute lg:right-10 lg:bottom-8"
                    )}
                    src="https://images.ctfassets.net/spoqsaf9291f/2FoagXHQUpf8Uw9jo5qEcQ/2e2e3542e9dc6635a0f706df48aa04d8/asset-calculator.png"
                />
                <section className="lg:order-1 lg:py-8">
                    <h3 className={clsx({ "font-dmsans font-extrabold text-2xl mt-2 mb-1 mx-8": true },
                        "md:text-4xl",
                        "lg:text-[2.75em]"
                    )}>
                        More productivity. <br/> Fewer tools.
                    </h3>
                    <p className={clsx({ "w-[75%] font-dmsans font-light leading-tight mx-8": true }, 
                        "md:text-lg",
                        "lg:text-xl"
                    )}>
                        Bring all your tools and teams under one roof. Calculate saving below.
                    </p>
                    <a href="" className={clsx({ "mx-8 text-[#1e85e2] font-dmsans font-normal": true },
                        "md:text-lg"
                    )}>
                        See pricing plans
                    </a>
                </section>
            </div>
            <Card className={clsx({ "w-[85%] mx-auto mt-3": true }
            )}>
                <CardContent className = {clsx(
                    "md:flex md:gap-[4em] md:mt-4"
                )}>
                    <form className={clsx({ "flex flex-col gap-y-2 justify-center items-start mt-3": true })}>
                        { checkboxList.map( (item) => {
                            return(
                                <section key={item.id} className={clsx({ "font-dmsans font-semibold": true })}>
                                    <input type = "checkbox" name = {item.id} value={item.val} checked = {item.checked}/>
                                    <label htmlFor={item.id}> {item.text}</label>
                                </section>
                            )
                        })}
                    </form>
                    <div className={clsx({ "bg-[#f6f5f4] rounded-2xl": true },
                        "md:w-[55%] md:ml-auto md:p-3"
                    )}>
                        <form className={clsx({ "flex flex-col gay-y-2 mx-4": true })}>
                            <label className={clsx({ "pt-3 font-dmsans font-semibold": true })}>
                                Team size
                            </label>
                            <input 
                                type = "number" 
                                name = "group-size" 
                                value = {10} 
                                visible
                                className={clsx({ "w-[60%] py-1 border-gray-150 border-2 rounded-sm mb-4": true })}
                            />
                        </form>
                        
                        <h4 className={clsx({ "mx-4 font-dmsans font-semibold": true })}>
                            Monthly savings
                        </h4>
                        <h4 className={clsx({ "mx-4 font-dmsans font-semibold": true })}>
                            Annual savings
                        </h4>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}