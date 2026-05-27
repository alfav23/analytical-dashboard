"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A linear line chart"

const chartData = [
  { month: "January", deposit: 186 },
  { month: "February", deposit: 305 },
  { month: "March", deposit: 237 },
  { month: "April", deposit: 73 },
  { month: "May", deposit: 209 },
]

const chartConfig = {
  deposit: {
    label: "Deposit",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function ChartLineLinear() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings</CardTitle>
        <CardDescription>January-May 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="deposit"
              type="linear"
              stroke="var(--color-deposit)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Saving increased by 60% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total savings over the past 5 months
        </div>
      </CardFooter>
    </Card>
  )
}
