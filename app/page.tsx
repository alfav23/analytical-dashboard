"use client"
import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Calendar } from "@/components/ui/calendar"
import { InfoIcon } from "lucide-react"
import { useState } from "react"

export default function Page() {

  const [ isVisible, setIsVisible ] = useState(true);
  const [ isEnabled, setIsEnabled ] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="calendar">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </div>
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
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
