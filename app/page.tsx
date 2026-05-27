"use client"

import convert from "convert-csv-to-json"
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
import { InfoIcon, PlusIcon } from "lucide-react"
import { useState } from "react"
import ChartAreaLegend from "@/components/ChartAreaLegend/ChartAreaLegend";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ChartLineLinear from "@/components/ChartLineLinear";
import DataTable from "@/components/DataTable/DataTable";
const DataTableComponent = DataTable as unknown as React.ComponentType<any>;
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"


export default function Page() {
  const avatar = "icon.png"
  const [ isVisible, setIsVisible ] = useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })
  
  const [ file, setFile ] = useState(Object);

  async function handleFile(e: any, file: any) {
    e.preventDefault()
    if (!file) {
      alert('Please select a CSV file');
      return;
    }
    
    try {
      const json = await file.convert
        .parseFile(file);
      console.log('Parsed data:', json);
    } catch (error) {
      console.error('Parse error:', error);
    }
}

  return (
    <div className="flex flex-col min-h-svh p-6">
       <Field orientation="horizontal">
          <Input type="search" placeholder="Search..." />
          <Button>Search</Button>
        </Field>
      <div className="flex m-4 justify-end">
        <Avatar>
          <AvatarImage
            src={avatar}
            alt="fish avatar"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-col min-w-md gap-6 text-sm leading-loose">
        <ScrollReveal>
          <div>
            <h1 className="text-2xl">Budget Bento</h1>
            <h2 className="">Budget on your lunch break with bite-sized budgeting.</h2>
            <p>Import your details to get started.</p>
            <div id="dropZone" className="border-olive-500 border-2 p-4 border-dashed rounded-md flex flex-col max-w-svw text-sm mt-2">
              <div className="flex flex-row gap-2">
                <div>
                  <p className="text-muted-foreground">Drag CSV file here or </p>
                  <input 
                    type="file" 
                    id="csvFile" 
                    accept=".csv"
                  />
                </div>
                <PlusIcon className="text-muted-foreground size-12 p-0"></PlusIcon>
              </div>
            </div>
            <Button className="mt-2" onClick={(e) => handleFile(e, file)}>Import</Button>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="calendar" id="calendar">
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
          <div className="chart pie" id="expenses">
            <ChartPieSimple>
              <CardDescription></CardDescription>
            </ChartPieSimple>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <DataTableComponent />
        </ScrollReveal>

        <ScrollReveal>
          <div className="chart area-legend" id="incoming+outgoing+funds">
              <ChartAreaLegend></ChartAreaLegend>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="chart line-linear" id="savings">
            <ChartLineLinear></ChartLineLinear>
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
