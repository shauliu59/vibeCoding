"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
        average: 400,
        today: 240,
    },
    {
        average: 300,
        today: 139,
    },
    {
        average: 200,
        today: 980,
    },
    {
        average: 278,
        today: 390,
    },
    {
        average: 189,
        today: 480,
    },
    {
        average: 239,
        today: 380,
    },
    {
        average: 349,
        today: 430,
    },
]

export function OverviewChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `¥${value}`}
                />
                <Tooltip
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                平均值
                                            </span>
                                            <span className="font-bold text-muted-foreground">
                                                {payload[0].value}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                今日
                                            </span>
                                            <span className="font-bold">
                                                {payload[1].value}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="average"
                    stroke="#888888"
                    strokeWidth={2}
                    activeDot={{
                        r: 6,
                        style: { fill: "#888888", opacity: 0.25 },
                    }}
                />
                <Line
                    type="monotone"
                    strokeWidth={2}
                    dataKey="today"
                    activeDot={{
                        r: 8,
                        style: { fill: "#adfa1d" },
                    }}
                    style={
                        {
                            stroke: "#adfa1d",
                        } as React.CSSProperties
                    }
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
