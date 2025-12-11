import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewChart } from "@/components/overview-chart";
import { PiggyBank, CreditCard, DollarSign, Activity } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
            <div className="flex-1 space-y-4 p-8 pt-6 w-full max-w-7xl">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-white">仪表盘</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">总收入</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">¥45,231.89</div>
                            <p className="text-xs text-muted-foreground">较上月增长 +20.1%</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">总支出</CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+¥2,350</div>
                            <p className="text-xs text-muted-foreground">较上月增长 +180.1%</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">储蓄</CardTitle>
                            <PiggyBank className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+¥12,234</div>
                            <p className="text-xs text-muted-foreground">较上月增长 +19%</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">当前活跃</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">过去一小时新增 +201</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>概览</CardTitle>
                            <CardDescription>
                                月度支出明细
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <OverviewChart />
                        </CardContent>
                    </Card>
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>近期交易</CardTitle>
                            <CardDescription>
                                本月共有 265 笔交易
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                <div className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">超市购物</p>
                                        <p className="text-sm text-muted-foreground">
                                            groceries@example.com
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">-¥120.00</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">加油站</p>
                                        <p className="text-sm text-muted-foreground">gas@example.com</p>
                                    </div>
                                    <div className="ml-auto font-medium">-¥45.00</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">水电费</p>
                                        <p className="text-sm text-muted-foreground">utilities@example.com</p>
                                    </div>
                                    <div className="ml-auto font-medium">-¥250.00</div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
