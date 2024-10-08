type CardProps = {
    className?: string;
    config: CardConfig

} & React.HTMLAttributes<HTMLDivElement>;

export type CardConfig = {
    render: () => JSX.Element | string | null | undefined;
} & React.HTMLAttributes<HTMLDivElement>;


export const Card = ({ className, config }: CardProps) => {
    return (
        <div className={className}>
            {config.render()}
        </div>
    )
}