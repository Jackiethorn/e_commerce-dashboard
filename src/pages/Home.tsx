import { useCallback, useEffect, useState } from "react";
import { Panel } from "@/components/Panel";
import { Card } from "@/components/Card";
import { employeeOfMonthCard } from "@/presets/EmployeeOfMonthCard";
import { statisticsCard } from "@/presets/StatisticsCard";
import { monthlyProfitCard } from "@/presets/MonthlyProfitCard";
import { orderOverviewCard } from "@/presets/OrderOverviewCard";
import { Table } from "@/components/Table";
import { useProductData } from "@/hooks/useProductData";
import { useTeamData } from "@/hooks/useTeamData";
import { useCustomerData } from "@/hooks/useCustomerData";
import { getBestSellingProducts, getBestSellingProductsTableColumns } from "@/utils/getBestSellingProducts";
import { BestSellingProductsTableType } from "@/types/products.types";
import { getBestSellersFromTeam } from "@/utils/getBestSellers";
import { BestCustomersTableType } from "@/types/customers.types";
import { getBestSellersTableColumns } from "@/utils/getBestSellers";
import { getBestCustomersTableColumns } from "@/utils/getBestCustomers";
import { getBestCustomers } from "@/utils/getBestCustomers";
import { BestSellersFromTeamType } from "@/types/team-members.types";

export const Home = () => {
    const [bestSellingProductsTableData, setBestSellingProductsTableData] = useState<BestSellingProductsTableType[]>([]);
    const [bestSellersTableData, setBestSellersTableData] = useState<BestSellersFromTeamType[]>([]);
    const [bestCustomersTableData, setBestCustomersTableData] = useState<BestCustomersTableType[]>([]);

    const { data: productData, isLoading, isPending, isFetched, isError } = useProductData();

    const { data: teamData } = useTeamData();

    const { data: customerData } = useCustomerData();

    const fetchBestSellingProducts = useCallback(async () => {
        if (productData) {
            const bestSellingProducts = await getBestSellingProducts(productData);
            setBestSellingProductsTableData(bestSellingProducts);
        }
    }, [productData]);

    const fetchBestSellers = useCallback(async () => {
        if (teamData) {
            const bestSellers = await getBestSellersFromTeam(teamData);
            setBestSellersTableData(bestSellers);
        }
    }, [teamData]);

    const fetchBestCustomers = useCallback(async () => {
        if (customerData) {
            const bestCustomers = await getBestCustomers(customerData);
            setBestCustomersTableData(bestCustomers);
        }
    }, [customerData]);

    useEffect(() => {
        fetchBestSellingProducts();
        fetchBestSellers();
        fetchBestCustomers();
    }, [fetchBestSellingProducts, fetchBestSellers, fetchBestCustomers]);

    //TODO:memoize the table columns
    const bestSellingTableColumns = getBestSellingProductsTableColumns();
    const bestSellersTableColumns = getBestSellersTableColumns();
    const bestCustomersTableColumns = getBestCustomersTableColumns();

    const employeeOfTheMonthConfig = useCallback(() => {
        const bestSellerofTheMonth = bestSellersTableData[0];
        return employeeOfMonthCard(bestSellerofTheMonth?.name || '', bestSellerofTheMonth?.monthly_sale || '', bestSellerofTheMonth?.image || '');
    }, [bestSellersTableData])();

    const statisticsConfig = useCallback(() => {
        const totalSale = teamData?.map((teamMember) => teamMember.total_sale).reduce((acc, curr) => acc + curr, 0) || 0;
        const customerCount = customerData?.length || 0;
        const productCount = productData?.length || 0;
        // multiply product sale with product price for each product and sum them up
        const revenue = productData?.map((product) => product.sale * product.price).reduce((acc, curr) => acc + curr, 0) || 0;

        return statisticsCard(2, revenue, customerCount, productCount, totalSale);
    }, [teamData, customerData, productData])();

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


    if (isLoading || isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

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
            <div className="flex gap-8">
                <div className="basis-6/12">
                    <Panel className="">
                        <div className="text-secondary_clamp font-semibold mb-2">
                            <h2>Best Selling Products</h2>
                        </div>
                        <Table data={bestSellingProductsTableData} col={bestSellingTableColumns} className="" />
                    </Panel>
                </div>
                <div className="basis-6/12">
                    <Panel className="min-w-full">
                        <div className="text-secondary_clamp font-semibold mb-2">
                            <h2>Best Sellers</h2>
                        </div>
                        <Table data={bestSellersTableData} col={bestSellersTableColumns} className="border-spacing-y-4" />
                    </Panel>
                </div>
            </div>
            <Panel>
                <div className="text-secondary_clamp font-semibold mb-2">
                    <h2>Best Customers</h2>
                </div>
                <Table data={bestCustomersTableData} col={bestCustomersTableColumns} className="border-spacing-y-6" />
            </Panel>
        </div>
    );
};