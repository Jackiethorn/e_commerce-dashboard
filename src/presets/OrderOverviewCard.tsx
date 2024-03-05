import { LineChart } from "@/components/charts/LineChart";

function sumElements(arr: number[]) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const itemClasses = "flex items-center gap-3 py-2 px-3 rounded-md shadow-md w-56 bg-slate-200 bg-opacity-50";
const iconClasses = "p-3 bg-white bg-clip-padding rounded-md shadow-md w-12 h-12";

// TODO: NEEDS A LOT OF WORK ALREADY BUT DONT FORGET TO MAKE A POPOVER FOR THE SIDEITEMS.
export const orderOverviewCard = (labels: any, data: any) => ({
    title: "Order Overview",
    heading: "Order Overview",
    render: function () {
        return (
            <div className="flex flex-col justify-center gap-3 py-2.5 px-1">
                <h2 className="text-secondary_clamp">{this.heading}</h2>
                <div className="flex gap-3 w-5/6">
                    <LineChart data={data} labels={labels} />
                    <div className="flex flex-col self-center gap-3 pr-4">
                        <div className={itemClasses}>
                            <img src="/assets/icons/sidebar_link-orders.svg" alt="orders icon" className={iconClasses} />
                            <div>
                                <h2 className="text-primary_clamp opacity-70">Orders</h2>
                                <span className="font-semibold">{sumElements(data[2])}</span>
                            </div>
                        </div>
                        <div className={itemClasses}>
                            <img src="/assets/icons/earning.svg" alt="earning icon" className={iconClasses} />
                            <div>
                                <h2 className="text-primary_clamp opacity-70">Earning</h2>
                                <span className="font-semibold">${sumElements(data[1])}</span>
                            </div>
                        </div>
                        <div className={itemClasses}>
                            <img src="/assets/icons/refund.svg" alt="earning icon" className={iconClasses} />
                            <div>
                                <h2 className="text-primary_clamp opacity-70">Refunds</h2>
                                <span className="font-semibold">{sumElements(data[0])}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
})