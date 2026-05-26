"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

export const description = "A simple pie chart"

const chartData = [
  { expense: "groceries", cost: 275, fill: "var(--chart-1)" },
  { expense: "insurance", cost: 200, fill: "var(--chart-2)" },
  { expense: "electrical", cost: 187, fill: "var(--chart-3)" },
  { expense: "gas", cost: 173, fill: "var(--chart-4)" },
  { expense: "rent", cost: 900, fill: "var(--chart-5)" },
  { expense: "misc", cost: 90, fill: "var(--chart-0)" },
]

const chartConfig = {
  cost: {
    label: "Cost",
  },
  groceries: {
    label: "Groceries",
    color: "var(--chart-1)",
  },
  insurance: {
    label: "Insurance",
    color: "var(--chart-2)",
  },
  electrical: {
    label: "Electrical",
    color: "var(--chart-3)",
  },
  gas: {
    label: "Gas",
    color: "var(--chart-4)",
  },
  rent: {
    label: "Rent",
    color: "var(--chart-5)",
  },
  misc: {
    label: "Misc",
    color: "var(--chart-0)",
  },
} satisfies ChartConfig

export default function ChartPieSimple({children}: any) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expenses</CardTitle>
        {children}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-250px"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="cost" nameKey="expense" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Expenses up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total expenses for the past month
        </div>
      </CardFooter>
    </Card>
  )
}
