import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from 'next/image';
import Link from "next/link"



const header = () => {
  return (
<header className="sticky top-0 w-full min-w-fit border-b bg-gray-600 px-25 z-50 ">
  
  
     <div className="flex items-center gap-6 justify-between px-5" >
    <div className="flex items-center text-white font-bold tracking-wide text-2xl gap-3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7sArfyp9-sYvVzsVINAGbrA-2rXE6ObIVg&s" alt="resume" className=" mix-blend-multiply w-15 h-15" />
      Resume Builder
    </div>
    <NavigationMenu className="h-16 flex items-center  ">
    <NavigationMenuList className="gap-3">

<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/" className="bg-gray-500 font-semibold tracking-wide text-white px-4 py-2 rounded">
      Home
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/create" className="bg-gray-500 font-semibold tracking-wide text-white px-4 py-2 rounded">
      Create Resume
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/preview" className="bg-gray-500 font-semibold tracking-wide text-white px-4 py-2 rounded">
      Preview
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/download" className="bg-gray-500 font-semibold tracking-wide text-white px-4 py-2 rounded">
      Download
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>

</NavigationMenuList>


</NavigationMenu>

     
</div>  
  
</header>

 
  )
}

export default header