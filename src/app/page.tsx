"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Switch } from "@/components/ui/switch"









function Home() {
    return (
   
   <div>
      <main>
      <Button>Click me</Button>
        <Button variant={"destructive"}  className='bg-green-500 text-blue-600 border border-orange-600 rounded-full'> Follow me</Button>
      <Button variant={"ghost"} className='text-2xl px-6 py-4'>Suscribe me</Button>
      <Button variant={"link"} > Like me</Button>
      <Button variant={"outline"}> Shair me</Button>
      <Button variant={"secondary"}> Shair me</Button>
      
     </main>
      
     <Slider defaultValue={[33]} max={100} step={1} />

     <Card className='px-32 py-5'>
  <CardHeader>
    <CardTitle>Mohammad Hanif Memon</CardTitle>
    <CardDescription>Web Devloper</CardDescription>
  </CardHeader>
  <CardContent>
    <p>I am a web devloper.
    </p>
  </CardContent>
  <CardFooter>
    <p>Contact # 03002756831</p>
    
  </CardFooter>
</Card>
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>
<Progress value={33} />
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
< Textarea  />
<br />
<Badge variant="outline" className='bg-green-700 text-white'>Congratulation </Badge>
<br />

<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<br />
<br />
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
<br />
<br />

<Switch />
<br />
<br />





      </div>
  )  }  

export default Home

