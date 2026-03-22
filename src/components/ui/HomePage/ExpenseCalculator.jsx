import { useState } from "react"
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
    const [inputVal, setInputVal] = useState(10);
    const [checked, setChecked] = useState(checkboxList);

    function handleCheckbox(id){
        setChecked((prev) =>
            prev.map((item) =>
                item.id === id
                   ? {...item, checked: !item.checked} : item
            )
        )
    }

    function calculateExpense(checked, inputVal){
        let totalPerUser = checked 
            .filter(item => item.checked)
            .reduce((sum,item) => sum + item.price, 0)
        
            totalPerUser -= 20
            if (totalPerUser< 0) totalPerUser = 0;
        return totalPerUser * inputVal
    }

    const monthlySaving = calculateExpense(checked, inputVal);
    const yearlySaving = calculateExpense(checked, inputVal) * 12;

    return(
        <>
            <div className={clsx("lg:flex lg:gap-3 lg:relative lg:mx-auto lg:w-[80%]")}>
                <img
                    className={clsx({ "w-[75%] mx-8 my-6": true },
                        "lg:w-[34%] lg:h-[40%] lg:order-2 lg:absolute lg:right-10 lg:bottom-8"
                    )}
                    src="https://images.ctfassets.net/spoqsaf9291f/2FoagXHQUpf8Uw9jo5qEcQ/2e2e3542e9dc6635a0f706df48aa04d8/asset-calculator.png"
                />
                <section className="lg:order-1 lg:py-8 lg:pl-8">
                    <h3 className={clsx({ "font-dmsans font-extrabold text-2xl mt-2 mb-1 mx-8": true },
                        "md:text-4xl",
                        "lg:text-[2.75em]",
                        "xl:text-5xl"
                    )}>
                        More productivity. <br/> Fewer tools.
                    </h3>
                    <p className={clsx({ "w-[75%] font-dmsans font-light leading-tight mx-8": true }, 
                        "md:text-lg",
                        "lg:text-xl",
                        "xl:text-2xl"
                    )}>
                        Bring all your tools and teams under one roof. Calculate saving below.
                    </p>
                    <a href="" className={clsx({ "mx-8 text-[#1e85e2] font-dmsans font-normal": true },
                        "md:text-lg",
                        "xl:text-xl"
                    )}>
                        See pricing plans
                    </a>
                </section>
            </div>
            <Card className={clsx({ "w-[85%] mx-auto mt-3 mb-8" : true },
                "lg:w-[75%]"
            )}>
                <CardContent className = {clsx(
                    "md:flex md:gap-[4em] md:mt-4",
                    "xl:flex xl:flex-col xl:m-0 xl:gap-4 pt-6" 
                )}>
                    <form className={clsx({ "flex flex-col gap-y-2 justify-center items-start mt-3": true },
                        "xl:grid xl:grid-cols-3 xl:gap-3 xl:w-full "
                    )}>
                        { checked.map( (item) => {
                            return(
                                <section key={item.id} className={clsx({ "font-dmsans font-semibold": true },
                                    "xl:text-xl"
                                )}>
                                    <input type = "checkbox" name = {item.id} value={item.val} checked = {item.checked} onChange={() => handleCheckbox(item.id)} />
                                    <label htmlFor={item.id} > {item.text}</label>
                                </section>
                            )
                        })}
                    </form>
                    <div className={clsx({ "bg-[#f6f5f4] rounded-2xl": true },
                        "md:w-[55%] md:ml-auto md:p-3",
                        "xl:flex xl:flex-row justify-center items-center xl:w-full xl:m-0"
                    )}>
                        <form className={clsx({ "flex flex-col gay-y-2 mx-4": true },
                            "xl:flex-row"
                        )}>
                            <label className={clsx({ "pt-3 font-dmsans font-semibold": true },
                                "xl:text-xl"
                            )}>
                                Team size
                            </label>
                            <input 
                                type = "number" 
                                name = "group-size" 
                                defaultValue={inputVal}
                                onChange={(e)=> setInputVal(Number(e.target.value))}
                                visible
                                className={clsx({ "w-[60%] py-1 border-gray-150 border-2 rounded-sm mb-4 font-dmsans font-semibold text-lg": true })}
                            />
                        </form>
                        
                        <h4 className={clsx({ "mx-4 font-dmsans font-semibold": true },
                            "xl:text-xl"
                        )}>
                            Monthly savings:
                        </h4>
                        <h5 className={clsx( "mx-4 font-dmsans font-bold text-2xl")} > ${monthlySaving.toLocaleString()}</h5>
                        <h4 className={clsx({ "mx-4 font-dmsans font-semibold": true },
                            "xl:text-xl"
                        )}>
                            Annual savings:
                        </h4>
                        <h5 className={clsx( "mx-4 font-dmsans font-bold text-2xl")} > ${yearlySaving.toLocaleString()}</h5>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}