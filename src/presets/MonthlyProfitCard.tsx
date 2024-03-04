import { DoughnutChart } from "@/components/charts/DoughnutChart";

export const monthlyProfitCard = (topSellingProduct: number, secondBestSellingProduct: number,
    thirdBestSellingProduct: number, monthlyGrowth: number) => ({
        title: "Monthly Profit",
        heading: "Monthly Profits",
        description: `(Total profit growth of ${monthlyGrowth}%)`,
        render: function () {
            return (
                <div className="flex flex-col justify-center gap-4 py-2.5 px-1">
                    <DoughnutChart data={[topSellingProduct, secondBestSellingProduct, thirdBestSellingProduct]} />
                    <div className="ml-4">
                        <h2 className="text-secondary_clamp">{this.heading}</h2>
                        <span className="text-primary_clamp opacity-70">{this.description}</span>
                    </div>
                </div>
            );
        },
    });