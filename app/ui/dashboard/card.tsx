export default function Card({children, title, subtitle} : {children: React.ReactNode, title: string, subtitle: string}) {
    return(
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6 flex flex-col gap-2">
                <div className="text-2xl font-semibold">{title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>
            </div>
            {children}
        </div>
    )
}