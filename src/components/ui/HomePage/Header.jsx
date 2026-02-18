import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header(){
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Notion AI</NavigationMenuLink>
                    <NavigationMenuLink>Agents</NavigationMenuLink>
                    <NavigationMenuLink>AI Meeting Notes</NavigationMenuLink>
                    <NavigationMenuLink>Knowledge Base</NavigationMenuLink>
                    <NavigationMenuLink>Docs</NavigationMenuLink>
                    <NavigationMenuLink>Projects</NavigationMenuLink>
                    <NavigationMenuLink>Integrations</NavigationMenuLink>
                    <NavigationMenuLink>Security</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>AI</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Notion AI</NavigationMenuLink>
                            <NavigationMenuLink>Agents</NavigationMenuLink>
                            <NavigationMenuLink>AI Meeting Notes</NavigationMenuLink>
                            <NavigationMenuLink>Enterprise Search</NavigationMenuLink>
                        </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Eng & Product</NavigationMenuLink>
                    <NavigationMenuLink>Design</NavigationMenuLink>
                    <NavigationMenuLink>Marketing</NavigationMenuLink>
                    <NavigationMenuLink>IT</NavigationMenuLink>

                    <NavigationMenuLink>Startups</NavigationMenuLink>
                    <NavigationMenuLink>Small businesses</NavigationMenuLink>
                    <NavigationMenuLink>Enterprise</NavigationMenuLink>

                    <NavigationMenuLink>Eduction</NavigationMenuLink>
                    <NavigationMenuLink>Personal</NavigationMenuLink>
                    <NavigationMenuLink>Professional</NavigationMenuLink>
                    <NavigationMenuLink>AI use cases</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Tempelates</NavigationMenuLink>
                        <NavigationMenuLink>Consultants</NavigationMenuLink>
                        <NavigationMenuLink><Integrations></Integrations></NavigationMenuLink>

                        <NavigationMenuLink>What's New</NavigationMenuLink>
                        <NavigationMenuLink>Customer stories</NavigationMenuLink>
                        <NavigationMenuLink>Blog</NavigationMenuLink>
                        <NavigationMenuLink>Webinars</NavigationMenuLink>

                        <NavigationMenuLink>Academy</NavigationMenuLink>
                        <NavigationMenuLink>Product tours</NavigationMenuLink>
                        <NavigationMenuLink>Help</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    )
}