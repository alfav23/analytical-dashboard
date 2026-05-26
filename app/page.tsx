"use client"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"
import ChartPieSimple from "../components/ChartPieSimple/ChartPieSimple";
import { CardDescription } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"
import { useState } from "react"
import ChartAreaLegend from "@/components/ChartAreaLegend/ChartAreaLegend";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import DataTable from "@/components/DataTable/DataTable";
// Some DataTable exports may have typings that TS interprets as () => void.
// Cast to a React component type for use in JSX.
const DataTableComponent = DataTable as unknown as React.ComponentType<any>;

export default function Page() {
  const fishavatar = "./public/fishavatar.jpg"
  const [ isVisible, setIsVisible ] = useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <div className="flex flex-col min-h-svh p-6">
      <div className="flex m-4 justify-end">
        <Avatar>
          <AvatarImage
            src={fishavatar}
            alt="fish avatar"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col min-w-md gap-6 text-sm leading-loose">
        <ScrollReveal>
          <div>
            <h1 className="text-2xl">Budget Sense</h1>
            <h2 className="">Budget your life so that you can live it!</h2>
            <p>Import your details to get started.</p>
            <Button className="mt-2">Import</Button>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="calendar">
            <Calendar
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              // {console.log(dateRange)}
              className="rounded-lg border"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="chart pie">
            <ChartPieSimple>
              <CardDescription></CardDescription>
            </ChartPieSimple>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <DataTableComponent />
        </ScrollReveal>

        <ScrollReveal>
          <div className="chart area-legend">
              <ChartAreaLegend></ChartAreaLegend>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* notification/update alert */}
          <Alert>
            <InfoIcon />
            <AlertTitle>Lights out!</AlertTitle>
            <AlertDescription>
              Press <kbd>d</kbd> to toggle dark mode.
            </AlertDescription>
          </Alert>
        </ScrollReveal>
          
        <ScrollReveal>
          {/* error alert */}
          <Alert variant="destructive" style={{ display: isVisible ? 'default' : 'none'}}>
            <InfoIcon />
            <AlertTitle>Action failed!</AlertTitle>
            <AlertDescription>
              Hmm, something went wrong. Please try again.
            </AlertDescription>
            <AlertAction>
              <Button variant="destructive" onClick={()=>setIsVisible(false)}>Dismiss</Button>
            </AlertAction>
          </Alert>
        </ScrollReveal>
      </div>
    </div>
  )
}
