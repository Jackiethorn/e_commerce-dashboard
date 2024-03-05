import { useCallback } from "react";
import { Panel } from "@/components/Panel";
import { Card } from "@/components/Card";
import { employeeOfMonthCard } from "@/presets/EmployeeOfMonthCard";
import { statisticsCard } from "@/presets/StatisticsCard";
import { monthlyProfitCard } from "@/presets/MonthlyProfitCard";
import { orderOverviewCard } from "@/presets/OrderOverviewCard";

export const Home = () => {
    const employeeOfTheMonthConfig = useCallback(() => {
        return employeeOfMonthCard("John", 57000, "/assets/icons/sidebar_link-settings.svg");
    }, [])();

    const statisticsConfig = useCallback(() => {
        return statisticsCard(2, 500, 100, 200, 1000);
    }, [])();

    const monthlyProfitConfig = useCallback(() => {
        return monthlyProfitCard(132, 56, 1352, 30);
    }, [])();

    const lineChartData = [
        [5, 655, 320, 356, 613, 220],
        [52, 955, 660, 770, 1120, 440],
        [30, 715, 420, 520, 820, 320]
    ];

    const orderOverviewConfig = useCallback(() => {
        return orderOverviewCard(['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'], lineChartData);
    }, [])();

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-8">
                <Panel className="flex-1">
                    <Card config={employeeOfTheMonthConfig} />
                </Panel>
                <Panel className="h-auto grow">
                    <Card config={statisticsConfig} />
                </Panel>
            </div>
            <div className="flex gap-8">
                <Panel className="h-auto flex-inital">
                    <Card config={monthlyProfitConfig} />
                </Panel>
                <Panel className="h-auto">
                    <Card config={orderOverviewConfig} />
                </Panel>
            </div>

        </div>
    );
};