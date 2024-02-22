import classNames from "classnames";

type PanelProps = {
    className?: string;
    children: React.ReactNode;

} & React.HTMLAttributes<HTMLDivElement>;


export const Panel = ({ className, children, ...rest }: PanelProps) => {

    const panelClasses = classNames(
        "bg-white rounded p-3 shadow w-full border",
        className
    );

    return (
        <div {...rest} className={panelClasses}>
            {children}
        </div>
    )
};