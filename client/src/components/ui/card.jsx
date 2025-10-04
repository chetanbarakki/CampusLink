import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        // Center everything inside
        "bg-card text-card-foreground flex flex-col items-center justify-center gap-6 rounded-xl border py-6 shadow-sm text-center",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        // Center content in header
        "grid auto-rows-min grid-rows-[auto_auto] items-center justify-center gap-1.5 px-6 text-center",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-center", className)}
      {...props}
    />
  )
}


function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm text-center", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn("flex justify-center items-center", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 text-center flex justify-center items-center", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center justify-center px-6 pt-6 text-center", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
