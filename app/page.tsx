"use client"
import { Button } from "@/components/ui/button"
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

export default function Page() {

  const [ isVisible, setIsVisible ] = useState(true);
  const [ isEnabled, setIsEnabled ] = useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <ScrollReveal>
          <div>
            <h1 className="font-large">Budget Sense</h1>
            <h2>Budget your life so that you can live it!</h2>
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
          <div className="chart area-legend">
              <ChartAreaLegend></ChartAreaLegend>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* notification/update alert */}
          <Alert style={{display: isEnabled ? 'light' : 'dark'}}>
            <InfoIcon />
            <AlertTitle>Lights out!</AlertTitle>
            <AlertDescription>
              Dark mode is now available.
            </AlertDescription>
            <AlertAction>
              <Button variant="outline" onClick={()=>setIsEnabled(true)}>Enable</Button>
              <Button variant="default" onClick={()=>setIsEnabled(false)}>Disable</Button>
            </AlertAction>
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
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
