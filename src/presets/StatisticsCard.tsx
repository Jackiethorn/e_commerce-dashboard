import classNames from "classnames"

const elementClasses = classNames("flex items-center gap-2")

const elementItemClasses = classNames("flex flex-col justify-center")

export const statisticsCard = (sinceLastUpdate: number, totalSales: number, customers: number, products: number,
    revenue: number) => ({
        title: "Statistics",
        heading: "Statistics",
        updateInfo: `Updated ${sinceLastUpdate} ago`,
        totalCompanySales: totalSales,
        customerCount: customers,
        productCount: products,
        revenue: revenue,
        render: function () {
            return (
                <div className="statistics-container flex flex-col px-1 py-2.5 gap-8">
                    <div className="statistics-header flex justify-between items-center">
                        <h2 className="text-secondary_clamp">{this.heading}</h2>
                        <small className="opacity-60 text-terniary_clamp">{this.updateInfo}</small>
                    </div>
                    <div className="statistics-content flex justify-around items-center gap-10 mr-8">
                        <div className={elementClasses}>
                            <img className="bg-icon_ring-sales_bg p-2 rounded-full" src="/assets/icons/statistics-pie_chart.svg" alt="sales logo" />
                            <div className={elementItemClasses}>
                                <span className="text-seconday_clamp">{this.totalCompanySales}k</span>
                                <small className="font-light text-terniary_clamp">Sales</small>
                            </div>
                        </div>
                        <div className={elementClasses}>
                            <img className="bg-icon_ring-customers_bg p-2 rounded-full" src="/assets/icons/statistics-customer.svg" alt="customers logo" />
                            <div className={elementItemClasses}>
                                <span className="text-seconday_clamp">{this.customerCount}</span>
                                <small className="font-light text-terniary_clamp">Customers</small>
                            </div>
                        </div>
                        <div className={elementClasses}>
                            <img className="bg-icon_ring-products_bg p-2 rounded-full" src="/assets/icons/statistics-card.svg" alt="products logo" />
                            <div className={elementItemClasses}>
                                <span className="text-seconday_clamp">{this.productCount}</span>
                                <small className="font-light text-terniary_clamp">Products</small>
                            </div>
                        </div>
                        <div className={elementClasses}>
                            <img className="bg-icon_ring-revenue_bg p-2 rounded-full" src="/assets/icons/statistics-dollar_sign.svg" alt="revenue logo" />
                            <div className={elementItemClasses}>
                                <span className="text-seconday_clamp">${this.revenue}k</span>
                                <small className="font-light text-terniary_clamp">Revenue</small>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
    })