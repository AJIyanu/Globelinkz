'use client'

import { useState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { format, addHours } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { CalendarIcon, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

const generate24HourTimeOptions = () => {
  const options = []
  for (let hour = 0; hour < 24; hour++) {
    for (const minute of [0, 30]) {
      const time = new Date()
      time.setHours(hour, minute, 0, 0)
      options.push({
        value: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
        label: format(time, 'h:mm a'),
      })
    }
  }
  return options
}

const timeOptions = generate24HourTimeOptions()

const quickBookingOptions = [
  {
    value: 'now',
    label: 'Now',
    description: 'Might take up to 10 mins to setup meeting',
  },
  { value: 'next1hr', label: 'Next 1 hour' },
  { value: 'next2hr', label: 'Next 2 hours' },
  { value: 'next5hr', label: 'Next 5 hours' },
  { value: 'anytimeToday', label: 'Anytime today' },
]

const platformOptions = ['Google Meet', 'Zoom', 'WhatsApp Video Call']

// Create the form schema with conditional validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  platform: z.enum(['Google Meet', 'Zoom', 'WhatsApp Video Call'], {
    required_error: 'Please select a video call platform.',
  }),
  quickBooking: z.enum(
    ['now', 'next1hr', 'next2hr', 'next5hr', 'anytimeToday', 'custom'],
    {
      required_error: 'Please select a booking time option.',
    }
  ),
  date: z.date({
    required_error: 'Please select a date.',
  }),
  time: z.string({
    required_error: 'Please select a time.',
  }),
  timezone: z.string(),
})

// Type for our form values
type FormValues = z.infer<typeof formSchema>

const decodeBase64Url = (encoded: string): string => {
  encoded = encoded.replace(/-/g, '+').replace(/_/g, '/') // Restore Base64 format
  return Buffer.from(encoded, 'base64').toString('utf-8')
}

function BookingForm() {
  const [quickTimeSelected, setQuickTimeSelected] = useState(false)
  const [clientTimezone, setClientTimezone] = useState('')
  const [timezoneOffset, setTimezoneOffset] = useState(0)
  const [isPrefilled, setIsPrefilled] = useState(false)

  // Get search params for prefilling form data
  const searchParams = useSearchParams()

  // Get current date for default values
  const now = new Date()

  // Initialize timezone information on component mount
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setClientTimezone(timezone)

    // Calculate offset in hours
    const offset = -now.getTimezoneOffset() / 60
    setTimezoneOffset(offset)

    // Check for prefill data in URL
    const name = searchParams.get('name')
    const email = searchParams.get('email')

    if (name) {
      // Decode the name (it might be URL encoded)
      const decodedName = decodeURIComponent(name)
      form.setValue('name', decodeBase64Url(decodedName))
      setIsPrefilled(true)
    }

    if (email) {
      // Validate that it's a proper email before setting
      try {
        const decodedEmail = decodeBase64Url(decodeURIComponent(email))
        // Basic email validation
        if (decodedEmail.includes('@') && decodedEmail.includes('.')) {
          form.setValue('email', decodedEmail)
          setIsPrefilled(true)
        }
      } catch (e) {
        console.error('Invalid email in URL parameters', e)
      }
    }
  }, [])

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      quickBooking: 'custom',
      date: now,
      time: '10:00 AM',
      timezone: '',
    },
  })

  useEffect(() => {
    if (clientTimezone) {
      form.setValue('timezone', clientTimezone)
    }
  }, [clientTimezone, form])

  // Handle the quick booking option selection
  const handleQuickBookingChange = (value: string) => {
    const currentDate = new Date()

    // Declare all variables at the top of the function, outside the switch statement
    let next1hr, next2hr, next5hr

    switch (value) {
      case 'now':
        form.setValue('date', currentDate)
        form.setValue('time', format(currentDate, 'h:mm a'))
        setQuickTimeSelected(true)
        break
      case 'next1hr':
        next1hr = new Date(currentDate.getTime() + 60 * 60 * 1000)
        form.setValue('date', next1hr)
        form.setValue('time', format(next1hr, 'h:mm a'))
        setQuickTimeSelected(true)
        break
      case 'next2hr':
        next2hr = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000)
        form.setValue('date', next2hr)
        form.setValue('time', format(next2hr, 'h:mm a'))
        setQuickTimeSelected(true)
        break
      case 'next5hr':
        next5hr = new Date(currentDate.getTime() + 5 * 60 * 60 * 1000)
        form.setValue('date', next5hr)
        form.setValue('time', format(next5hr, 'h:mm a'))
        setQuickTimeSelected(true)
        break
      case 'anytimeToday':
        form.setValue('date', currentDate)
        form.setValue('time', 'Anytime')
        setQuickTimeSelected(true)
        break
      case 'custom':
        setQuickTimeSelected(false)
        break
    }
  }

  const convertToMyTimezone = (date: Date, timeString: string) => {
    // Clone the date to avoid modifying the original
    const clientDateTime = new Date(date)

    // Parse the time string (format: "HH:mm")
    const [hours, minutes] = timeString.split(':').map(Number)

    // Set the hours and minutes
    clientDateTime.setHours(hours, minutes, 0, 0)

    // For demonstration, let's say your timezone is UTC
    // You should replace this with your actual timezone offset
    const myTimezoneOffset = 0 // UTC (replace with your timezone offset)

    // Calculate the difference between client timezone and your timezone
    const timeDifference = myTimezoneOffset - timezoneOffset

    // Add the difference to convert to your timezone
    return addHours(clientDateTime, timeDifference)
  }

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    if (data.time !== 'Anytime') {
      const myTimezoneMeeting = convertToMyTimezone(data.date, data.time)
      console.log(
        "Original time (client's timezone):",
        format(data.date, 'PPP'),
        'at',
        data.time
      )
      console.log(
        'Converted time (your timezone):',
        format(myTimezoneMeeting, "PPP 'at' h:mm a")
      )
    }
    console.log(data)
    // Handle form submission here
    alert('Booking submitted successfully!')
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Book a Meeting</h2>

      <div className="text-sm text-gray-500 mb-4 text-center">
        Your local timezone: {clientTimezone} (GMT
        {timezoneOffset >= 0 ? '+' : ''}
        {timezoneOffset})
      </div>

      {isPrefilled && (
        <div className="mb-4 p-3 bg-blue-50 text-blue-800 rounded-md text-sm">
          We&apos;ve prefilled some information for you to make booking easier!
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>
                  What should we call you during our meeting?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  We&apos;ll send your booking details to this address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Platform Field */}
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video Call Platform</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {platformOptions.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose your preferred platform for the meeting
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Quick Booking Options */}
          <FormField
            control={form.control}
            name="quickBooking"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking Time</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value)
                    handleQuickBookingChange(value)
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select when you'd like to meet" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="custom">Custom date and time</SelectItem>
                    {quickBookingOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {field.value === 'now' && (
                  <FormDescription>
                    Might take up to 10 mins to setup meeting
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date Field */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className={cn(quickTimeSelected ? 'opacity-70' : '')}>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                        disabled={quickTimeSelected}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={
                        quickTimeSelected || {
                          before: new Date(),
                        }
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Select a date for your meeting
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Field */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className={cn(quickTimeSelected ? 'opacity-70' : '')}>
                <FormLabel>Time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={quickTimeSelected}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                      <Clock className="ml-auto h-4 w-4 opacity-50" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-72">
                    {timeOptions.map((time) => (
                      <SelectItem key={time.value} value={time.value}>
                        {time.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select a time for your meeting (in your local timezone)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Book Now
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default function Page() {
  return (
    <div className="py-9">
      <BookingForm />
    </div>
  )
}
