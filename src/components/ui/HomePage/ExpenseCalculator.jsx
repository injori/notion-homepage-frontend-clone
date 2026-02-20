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
            <img
                className="w-[75%] mx-8 my-6"
                src="https://images.ctfassets.net/spoqsaf9291f/2FoagXHQUpf8Uw9jo5qEcQ/2e2e3542e9dc6635a0f706df48aa04d8/asset-calculator.png"
            />
            <h3 className=" font-dmsans font-extrabold text-2xl mt-2 mb-1 mx-8">More productivity. <br/> Fewer tools.</h3>
            <p className=" w-[75%] font-dmsans font-light leading-tight mx-8">Bring all your tools and teams under one roof. Calculate saving below.</p>
            <a href="" className="mx-8 text-[#1e85e2] font-dmsans font-normal
            ">See pricing plans</a>

            <Card className = "w-[85%] mx-auto">
                <CardContent>
                    <form className=" flex flex-col gap-y-2 justify-center items-start mt-3">
                        { checkboxList.map( (item) => {
                            return(
                                <section key={item.id} className=" font-dmsans font-semibold">
                                    <input type = "checkbox" name = {item.id} value={item.val} checked = {item.checked}/>
                                    <label htmlFor={item.id}> {item.text}</label>
                                </section>
                            )
                        })}
                    </form>
                    <div className="bg-[#f6f5f4] rounded-2xl">
                        <form className="flex flex-col gay-y-2 mx-4">
                            <label className="pt-3 font-dmsans font-semibold">Team size</label>
                            <input type = "number" name = "group-size" value = {10} visible
                                className=" w-[60%] py-1 border-gray-150 border-2 rounded-sm mb-4"
                            />
                        </form>

                        <h4 className="mx-4 font-dmsans font-semibold ">Monthly savings</h4>
                        <h4 className="mx-4 font-dmsans font-semibold ">Annual savings</h4>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}